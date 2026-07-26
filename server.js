/* ===========================================
   NEUROSIM - SERVIDOR DE EVALUACIÓN EN LÍNEA
   server.js
   =========================================== */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const os = require('os');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*' }
});

const PORT = process.env.PORT || 3000;

// Serve static files from the project directory
app.use(express.static(path.join(__dirname)));

// ─── STATE ───
let leaderboard = [];       // { id, name, score, total, status, timeUsed }
let evalActive = true;      // Whether the evaluation session is accepting participants

// ─── SOCKET.IO ───
io.on('connection', (socket) => {
    console.log(`✅ Conectado: ${socket.id}`);

    // Send current leaderboard to the new client
    socket.emit('leaderboard-update', leaderboard);
    socket.emit('eval-status', evalActive);

    // ── Player registers for evaluation ──
    socket.on('eval-register', (data) => {
        const { name } = data;
        // Check for duplicate names
        const existing = leaderboard.find(p => p.name === name && p.status === 'playing');
        if (existing) {
            socket.emit('register-error', 'Ya hay un participante con ese nombre jugando.');
            return;
        }

        const participant = {
            id: socket.id,
            name: name,
            score: 0,
            total: 20,
            status: 'playing',   // 'playing' | 'finished' | 'abandoned'
            timeUsed: 0
        };
        leaderboard.push(participant);
        console.log(`📝 Registrado: ${name} (${socket.id})`);

        socket.emit('register-ok', { id: socket.id });
        io.emit('leaderboard-update', leaderboard);
    });

    // ── Player answers a question ──
    socket.on('eval-answer', (data) => {
        const { correct } = data;
        const participant = leaderboard.find(p => p.id === socket.id && p.status === 'playing');
        if (participant && correct) {
            participant.score++;
            io.emit('leaderboard-update', leaderboard);
        }
    });

    // ── Player finishes evaluation ──
    socket.on('eval-finish', (data) => {
        const { timeUsed } = data;
        const participant = leaderboard.find(p => p.id === socket.id && p.status === 'playing');
        if (participant) {
            participant.status = 'finished';
            participant.timeUsed = timeUsed || 0;
            console.log(`🏁 Finalizó: ${participant.name} — ${participant.score}/${participant.total} pts`);
            io.emit('leaderboard-update', leaderboard);
        }
    });

    // ── Admin Login ──
    socket.on('admin-login', (data) => {
        if (data.password === 'UTMACH-AGROPEC') {
            console.log(`👨‍🏫 Admin conectado: ${socket.id}`);
            socket.emit('leaderboard-update', leaderboard);
        }
    });

    // ── Host resets the evaluation session ──
    socket.on('admin-reset', () => {
        leaderboard = [];
        evalActive = true;
        console.log('🔄 Evaluación reiniciada por Admin.');
        io.emit('leaderboard-update', leaderboard);
        io.emit('eval-status', evalActive);
    });

    // ── Host kicks a user ──
    socket.on('admin-kick', (data) => {
        const { id } = data;
        const index = leaderboard.findIndex(p => p.id === id);
        if (index !== -1) {
            const removed = leaderboard.splice(index, 1)[0];
            console.log(`⛔ Admin eliminó a: ${removed.name}`);
            io.emit('leaderboard-update', leaderboard);
        }
    });

    // ── Player disconnects (closes tab/navigates away) ──
    socket.on('disconnect', () => {
        const participant = leaderboard.find(p => p.id === socket.id);
        if (participant && participant.status === 'playing') {
            participant.status = 'abandoned';
            participant.score = 0;
            console.log(`❌ Abandonó: ${participant.name} — 0 pts (salió de la página)`);
            io.emit('leaderboard-update', leaderboard);
        }
        console.log(`🔌 Desconectado: ${socket.id}`);
    });
});

// ─── GET LOCAL IP ───
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}

// ─── START SERVER ───
server.listen(PORT, '0.0.0.0', () => {
    const ip = getLocalIP();
    console.log('');
    console.log('╔══════════════════════════════════════════════════╗');
    console.log('║     🧠 NeuroSim — Servidor de Evaluación        ║');
    console.log('╠══════════════════════════════════════════════════╣');
    console.log(`║  📡 Local:     http://localhost:${PORT}             ║`);
    console.log(`║  📱 Red WiFi:  http://${ip}:${PORT}        ║`);
    console.log('╠══════════════════════════════════════════════════╣');
    console.log('║  Comparte la dirección de "Red WiFi" con los    ║');
    console.log('║  participantes para que se conecten desde sus   ║');
    console.log('║  teléfonos o computadoras.                      ║');
    console.log('╚══════════════════════════════════════════════════╝');
    console.log('');
});
