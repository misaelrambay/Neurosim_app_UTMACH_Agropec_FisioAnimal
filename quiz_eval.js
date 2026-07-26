/* =============================================
   QUIZ & EVALUATION SYSTEM - quiz_eval.js
   ============================================= */

// ─── QUIZ (Practice Mode) ───
let quizQuestions = [];
let quizCurrentIdx = 0;
let quizScore = 0;
let quizAnswered = [];

function initQuiz() {
    quizQuestions = pickRandomQuestions(20);
    quizCurrentIdx = 0;
    quizScore = 0;
    quizAnswered = [];
    showScreen('quizScreen');
    renderQuizIntro();
    updateQuizProgress();
}

function updateQuizProgress() {
    const c = document.getElementById('quizProgress');
    if (!c) return;
    c.innerHTML = '';
    for (let i = 0; i < quizQuestions.length; i++) {
        const d = document.createElement('div');
        d.className = 'progress-dot';
        if (quizAnswered.includes(i)) d.classList.add('completed');
        if (i === quizCurrentIdx && quizAnswered.length < quizQuestions.length) d.classList.add('current');
        c.appendChild(d);
    }
}

function renderQuizIntro() {
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    document.getElementById('quizScene').innerHTML =
        '<div class="hari-character">' + hariAvatarHtml +
        '<div class="hari-bubble"><span class="hari-name">Hari</span>' +
        '¡Bienvenido al <strong>Cuestionario del SNA</strong>! 📝🐾<br><br>' +
        'Este cuestionario está diseñado para que pongas a prueba tus conocimientos sobre el <strong>Sistema Nervioso Autónomo</strong>, ' +
        'incluyendo definiciones, fisiología y estudios de caso reales de producción animal.<br><br>' +
        '<strong>Las reglas son simples:</strong><br><br>' +
        '<div style="display:flex;flex-direction:column;gap:12px;margin:8px 0;">' +
        '<div style="display:flex;align-items:center;gap:12px;"><span style="background:var(--accent-calm);color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">1</span><span><strong>Aprende</strong> — Cada pregunta refuerza tu conocimiento sobre el SNA.</span></div>' +
        '<div style="display:flex;align-items:center;gap:12px;"><span style="background:#F4A460;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">2</span><span><strong>Diviértete</strong> — Si te equivocas, te guiaré a la respuesta correcta. ¡No hay presión!</span></div>' +
        '<div style="display:flex;align-items:center;gap:12px;"><span style="background:#D98880;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">3</span><span><strong>Gana</strong> — Responde 20 preguntas y acumula puntos. ¡A por todas!</span></div>' +
        '</div>' +
        '</div></div>' +
        '<div style="text-align:center;margin-top:24px"><button class="btn-next-level" onclick="startQuizQuestion(0)">¡Comenzar Cuestionario! 🚀</button></div>';
}

function startQuizQuestion(idx) {
    if (idx >= quizQuestions.length) { renderQuizComplete(); return; }
    quizCurrentIdx = idx;
    updateQuizProgress();
    const q = quizQuestions[idx];
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    const letters = ['A', 'B', 'C', 'D'];
    let isCase = q.isCase || q.question.startsWith('ESTUDIO DE CASO');
    let optionsHtml = '<div class="quiz-options-container">';
    for (let i = 0; i < q.options.length; i++) {
        optionsHtml += '<button class="quiz-option" id="quizOpt' + i + '" onclick="handleQuizAnswer(' + i + ',' + idx + ')">' +
            '<span class="quiz-option-letter">' + letters[i] + '</span>' +
            '<span class="quiz-option-text">' + q.options[i] + '</span></button>';
    }
    optionsHtml += '</div>';

    let questionLabel = isCase ? '📋 Estudio de Caso' : '📖 Pregunta';
    document.getElementById('quizScene').innerHTML =
        '<div class="quiz-question-header">' +
        '<span class="quiz-question-number">' + questionLabel + ' ' + (idx + 1) + ' de ' + quizQuestions.length + '</span>' +
        '<span class="quiz-score-badge">⭐ ' + quizScore + ' / ' + quizQuestions.length + '</span>' +
        '</div>' +
        '<div class="quiz-question-card">' +
        '<div class="quiz-question-text">' + q.question + '</div>' +
        '</div>' +
        optionsHtml +
        '<div id="quizFeedback"></div>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleQuizAnswer(selected, idx) {
    const q = quizQuestions[idx];
    const correct = q.answer;
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    const fb = document.getElementById('quizFeedback');
    const letters = ['A', 'B', 'C', 'D'];

    if (selected === correct) {
        // Correct answer
        if (!quizAnswered.includes(idx)) {
            quizScore++;
            quizAnswered.push(idx);
        }
        // Disable all buttons, mark correct
        for (let i = 0; i < q.options.length; i++) {
            const btn = document.getElementById('quizOpt' + i);
            if (btn) {
                btn.disabled = true;
                btn.style.pointerEvents = 'none';
                if (i === correct) btn.classList.add('correct');
            }
        }
        updateQuizProgress();
        fb.innerHTML = '<div class="hari-character" style="animation-delay:.1s">' + hariAvatarHtml +
            '<div class="hari-bubble"><span class="hari-name">Hari</span>' +
            '¡Correcto! 🎉 La respuesta es <strong>' + letters[correct] + ') ' + q.options[correct] + '</strong>. ¡Excelente trabajo! 💪' +
            '</div></div>' +
            '<div style="text-align:center"><button class="btn-next-level" onclick="startQuizQuestion(' + (idx + 1) + ')">' +
            (idx < quizQuestions.length - 1 ? 'Siguiente pregunta →' : 'Ver resultados 🎉') + '</button></div>';
        fb.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Wrong answer - guide user
        const btn = document.getElementById('quizOpt' + selected);
        if (btn) {
            btn.classList.add('incorrect');
            btn.disabled = true;
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.5';
        }
        fb.innerHTML = '<div class="hari-character" style="animation-delay:.1s">' + hariAvatarHtml +
            '<div class="hari-bubble"><span class="hari-name">Hari</span>' +
            '¡Buen intento! 🤔 La opción <strong>' + letters[selected] + '</strong> no es la correcta. ' +
            'Piénsalo un poco más y vuelve a intentarlo. ¡Tú puedes! 🐾' +
            '</div></div>';
        fb.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function renderQuizComplete() {
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    const pct = Math.round((quizScore / quizQuestions.length) * 100);
    let emoji = '🏆';
    let msg = '¡Perfecto! ¡Respondiste todas las preguntas correctamente!';
    if (pct < 100) {
        if (pct >= 80) { emoji = '🌟'; msg = '¡Excelente trabajo! Tienes un gran dominio del SNA.'; }
        else if (pct >= 60) { emoji = '👍'; msg = '¡Buen trabajo! Sigue practicando para mejorar.'; }
        else { emoji = '💪'; msg = '¡No te rindas! Practica más y mejorarás.'; }
    }

    document.getElementById('quizScene').innerHTML =
        '<div class="game-complete"><span class="trophy">' + emoji + '</span>' +
        '<h2>¡Cuestionario Completado!</h2>' +
        '<p>Obtuviste <strong style="font-size:1.5rem;color:var(--accent-calm)">' + quizScore + ' / ' + quizQuestions.length + '</strong> puntos<br>' + msg + '</p></div>' +
        '<div class="hari-character">' + hariAvatarHtml +
        '<div class="hari-bubble"><span class="hari-name">Hari</span>' +
        (pct === 100
            ? '¡Felicidades! 🎊 ¡Has respondido todas las preguntas correctamente! Eres un verdadero experto en el Sistema Nervioso Autónomo. 🧠✨<br><br>¿Listo para poner a prueba tus conocimientos en la <strong>Evaluación</strong> oficial? ¡Ahí sí que cuenta cada respuesta!'
            : '¡Bien hecho! 🐾 Has demostrado buenos conocimientos sobre el SNA. ' + (pct >= 60 ? 'Si quieres un reto mayor, prueba la <strong>Evaluación</strong> oficial.' : 'Te recomiendo practicar más antes de la evaluación.')) +
        '</div></div>' +
        '<div style="text-align:center;margin-top:24px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap">' +
        '<button class="btn-next-level" style="background:var(--accent-calm)" onclick="showScreen(\'landingPage\')">🏠 Ir a Inicio</button>' +
        '<button class="btn-next-level" onclick="initEval()">📝 Iniciar Evaluación</button>' +
        '</div>';
    updateQuizProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ─── EVALUATION (Online Multiplayer Mode) ───
let evalQuestions = [];
let evalCurrentIdx = 0;
let evalScore = 0;
let evalTimerInterval = null;
let evalTimeRemaining = 20 * 60; // 20 minutes in seconds
let evalCurrentUser = '';
let evalIsPlaying = false;
let evalStartTime = 0;

// Socket.io connection
let socket = null;
let serverLeaderboard = [];

function connectSocket() {
    if (socket && socket.connected) return;
    // Connect to the server that served this page
    socket = io();

    socket.on('connect', function() {
        console.log('🔗 Conectado al servidor:', socket.id);
    });

    socket.on('leaderboard-update', function(data) {
        serverLeaderboard = data;
        // If we're on the eval screen and not actively playing, refresh the leaderboard view
        const evalScene = document.getElementById('evalScene');
        if (isAdmin) {
            updateAdminLeaderboard(serverLeaderboard);
        } else if (evalScene && !evalIsPlaying) {
            const lbContainer = document.getElementById('liveLeaderboard');
            if (lbContainer) {
                lbContainer.innerHTML = buildLeaderboardHtml(serverLeaderboard);
            }
        }
    });

    socket.on('register-error', function(msg) {
        const nameInput = document.getElementById('evalNameInput');
        if (nameInput) {
            nameInput.style.borderColor = '#D98880';
            nameInput.value = '';
            nameInput.setAttribute('placeholder', '⚠️ ' + msg);
            nameInput.focus();
        }
    });

    socket.on('register-ok', function() {
        // Registration successful — start the evaluation
        evalScore = 0;
        evalCurrentIdx = 0;
        evalTimeRemaining = 20 * 60;
        evalStartTime = Date.now();
        evalIsPlaying = true;
        evalQuestions = pickRandomQuestions(20);

        document.getElementById('evalTimerDisplay').style.display = 'flex';
        startEvalTimer();
        startEvalQuestion(0);
        updateEvalProgress();
    });

    socket.on('disconnect', function() {
        console.log('🔌 Desconectado del servidor');
    });
}

function initEval() {
    connectSocket();
    showScreen('evalScreen');
    evalIsPlaying = false;
    renderEvalIntro();
}

function renderEvalIntro() {
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    document.getElementById('evalTimerDisplay').textContent = '20:00';
    document.getElementById('evalTimerDisplay').style.display = 'none';
    document.getElementById('evalProgress').innerHTML = '';

    document.getElementById('evalScene').innerHTML =
        '<div class="hari-character">' + hariAvatarHtml +
        '<div class="hari-bubble"><span class="hari-name">Hari</span>' +
        '¡Bienvenido a la <strong>Evaluación Oficial En Línea</strong>! 🎓📡<br><br>' +
        'Aquí pondrás a prueba todo lo que has aprendido. Las reglas son las siguientes:<br><br>' +
        '<div style="display:flex;flex-direction:column;gap:12px;margin:8px 0;">' +
        '<div style="display:flex;align-items:center;gap:12px;"><span style="background:var(--accent-calm);color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">1</span><span>Cada participante debe <strong>registrarse con su nombre</strong> desde su propio dispositivo.</span></div>' +
        '<div style="display:flex;align-items:center;gap:12px;"><span style="background:#F4A460;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">2</span><span>Tendrás <strong>20 minutos</strong> para responder <strong>20 preguntas</strong> aleatorias.</span></div>' +
        '<div style="display:flex;align-items:center;gap:12px;"><span style="background:#D98880;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">3</span><span>Cada pregunta vale <strong>1 punto</strong>.</span></div>' +
        '<div style="display:flex;align-items:center;gap:12px;"><span style="background:#5DADE2;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">4</span><span>Si te equivocas, <strong>no podrás retroceder</strong> y perderás ese punto.</span></div>' +
        '<div style="display:flex;align-items:center;gap:12px;"><span style="background:#9B59B6;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">5</span><span>Al final se mostrará la <strong>tabla de posiciones en vivo</strong> para saber quién es el ganador.</span></div>' +
        '<div style="display:flex;align-items:center;gap:12px;"><span style="background:#E74C3C;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">⚠</span><span>Si te sales de la página durante la evaluación, <strong>perderás todos los puntos automáticamente</strong>.</span></div>' +
        '</div><br>' +
        '¡Mucha suerte! 🍀🐾' +
        '</div></div>' +
        '<div id="liveLeaderboard"></div>' +
        '<div style="text-align:center;margin-top:24px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap">' +
        '<button class="btn-next-level" onclick="showEvalRegister()">Registrarse y Comenzar 📝</button>' +
        '<button class="btn-next-level" style="background:var(--bg-card);color:var(--text-primary);border:1px solid var(--border-color);" onclick="promptAdminLogin()">Soy Profesor</button>' +
        '</div>';

    // Show current leaderboard if it has data
    if (serverLeaderboard.length > 0) {
        document.getElementById('liveLeaderboard').innerHTML = buildLeaderboardHtml(serverLeaderboard);
    }
}

function showEvalRegister() {
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    document.getElementById('evalScene').innerHTML =
        '<div class="hari-character">' + hariAvatarHtml +
        '<div class="hari-bubble"><span class="hari-name">Hari</span>' +
        '¡Regístrate para comenzar! Escribe tu nombre completo. 🐾<br><br>' +
        '<strong style="color:#E74C3C">⚠️ Recuerda:</strong> Si cierras la página o navegas a otro sitio durante la evaluación, perderás TODOS tus puntos.' +
        '</div></div>' +
        '<div class="eval-register-card">' +
        '<label class="eval-register-label">Nombre del Participante</label>' +
        '<input type="text" id="evalNameInput" class="eval-register-input" placeholder="Escribe tu nombre..." autocomplete="off" onkeydown="if(event.key===\'Enter\')registerAndStartEval()">' +
        '<button class="btn-next-level" style="margin-top:16px;width:100%" onclick="registerAndStartEval()">¡Comenzar Evaluación! ⏱️</button>' +
        '</div>';
    setTimeout(function() { document.getElementById('evalNameInput').focus(); }, 300);
}

function registerAndStartEval() {
    const nameInput = document.getElementById('evalNameInput');
    const name = nameInput.value.trim();
    if (!name) {
        nameInput.style.borderColor = '#D98880';
        nameInput.setAttribute('placeholder', '⚠️ Debes escribir tu nombre...');
        nameInput.focus();
        return;
    }
    evalCurrentUser = name;

    // Register with the server
    if (socket && socket.connected) {
        socket.emit('eval-register', { name: name });
    } else {
        // Fallback: if not connected, try to reconnect
        connectSocket();
        setTimeout(function() {
            if (socket && socket.connected) {
                socket.emit('eval-register', { name: name });
            } else {
                nameInput.style.borderColor = '#D98880';
                nameInput.value = '';
                nameInput.setAttribute('placeholder', '⚠️ No se pudo conectar al servidor...');
            }
        }, 1000);
    }
}

function startEvalTimer() {
    clearInterval(evalTimerInterval);
    updateTimerDisplay();
    evalTimerInterval = setInterval(function() {
        evalTimeRemaining--;
        updateTimerDisplay();
        if (evalTimeRemaining <= 0) {
            clearInterval(evalTimerInterval);
            finishCurrentEvalUser();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const el = document.getElementById('evalTimerDisplay');
    if (!el) return;
    const min = Math.floor(evalTimeRemaining / 60);
    const sec = evalTimeRemaining % 60;
    el.textContent = (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
    if (evalTimeRemaining <= 60) {
        el.classList.add('timer-warning');
    } else {
        el.classList.remove('timer-warning');
    }
}

function updateEvalProgress() {
    const c = document.getElementById('evalProgress');
    if (!c) return;
    c.innerHTML = '';
    for (let i = 0; i < evalQuestions.length; i++) {
        const d = document.createElement('div');
        d.className = 'progress-dot';
        if (i < evalCurrentIdx) d.classList.add('completed');
        if (i === evalCurrentIdx && evalCurrentIdx < evalQuestions.length) d.classList.add('current');
        c.appendChild(d);
    }
}

function startEvalQuestion(idx) {
    if (idx >= evalQuestions.length) { finishCurrentEvalUser(); return; }
    evalCurrentIdx = idx;
    updateEvalProgress();
    const q = evalQuestions[idx];
    const letters = ['A', 'B', 'C', 'D'];
    let isCase = q.isCase || q.question.startsWith('ESTUDIO DE CASO');

    let optionsHtml = '<div class="quiz-options-container">';
    for (let i = 0; i < q.options.length; i++) {
        optionsHtml += '<button class="quiz-option" id="evalOpt' + i + '" onclick="handleEvalAnswer(' + i + ',' + idx + ')">' +
            '<span class="quiz-option-letter">' + letters[i] + '</span>' +
            '<span class="quiz-option-text">' + q.options[i] + '</span></button>';
    }
    optionsHtml += '</div>';

    let questionLabel = isCase ? '📋 Estudio de Caso' : '📖 Pregunta';
    document.getElementById('evalScene').innerHTML =
        '<div class="quiz-question-header">' +
        '<span class="quiz-question-number">' + questionLabel + ' ' + (idx + 1) + ' de ' + evalQuestions.length + '</span>' +
        '<span class="quiz-score-badge">⭐ ' + evalScore + ' pts — ' + evalCurrentUser + '</span>' +
        '</div>' +
        '<div class="quiz-question-card">' +
        '<div class="quiz-question-text">' + q.question + '</div>' +
        '</div>' +
        optionsHtml +
        '<div id="evalFeedback"></div>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleEvalAnswer(selected, idx) {
    const q = evalQuestions[idx];
    const correct = q.answer;
    const letters = ['A', 'B', 'C', 'D'];
    const fb = document.getElementById('evalFeedback');

    // Disable all buttons
    for (let i = 0; i < q.options.length; i++) {
        const btn = document.getElementById('evalOpt' + i);
        if (btn) {
            btn.disabled = true;
            btn.style.pointerEvents = 'none';
            if (i === correct) btn.classList.add('correct');
            if (i === selected && i !== correct) btn.classList.add('incorrect');
        }
    }

    if (selected === correct) {
        evalScore++;
        // Send score update to server
        if (socket && socket.connected) {
            socket.emit('eval-answer', { correct: true });
        }
        fb.innerHTML = '<div class="eval-feedback-bar correct-bar">✅ ¡Correcto! +1 punto</div>';
    } else {
        // Send wrong answer too (to keep server in sync)
        if (socket && socket.connected) {
            socket.emit('eval-answer', { correct: false });
        }
        fb.innerHTML = '<div class="eval-feedback-bar incorrect-bar">❌ Incorrecto. La respuesta correcta era: <strong>' + letters[correct] + ') ' + q.options[correct] + '</strong></div>';
    }

    fb.innerHTML += '<div style="text-align:center;margin-top:16px"><button class="btn-next-level" onclick="startEvalQuestion(' + (idx + 1) + ')">' +
        (idx < evalQuestions.length - 1 ? 'Siguiente →' : 'Finalizar ✔') + '</button></div>';
    fb.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishCurrentEvalUser() {
    clearInterval(evalTimerInterval);
    evalIsPlaying = false;
    document.getElementById('evalTimerDisplay').style.display = 'none';

    const timeUsed = Math.round((Date.now() - evalStartTime) / 1000);

    // Send finish to server
    if (socket && socket.connected) {
        socket.emit('eval-finish', { timeUsed: timeUsed });
    }

    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';

    document.getElementById('evalScene').innerHTML =
        '<div class="game-complete"><span class="trophy">' + (evalScore >= 16 ? '🏆' : evalScore >= 10 ? '🌟' : '💪') + '</span>' +
        '<h2>Evaluación Finalizada</h2>' +
        '<p><strong style="color:var(--accent-calm)">' + evalCurrentUser + '</strong> obtuvo<br>' +
        '<strong style="font-size:2rem;color:var(--accent-calm)">' + evalScore + ' / ' + evalQuestions.length + '</strong> puntos</p></div>' +
        '<div class="hari-character">' + hariAvatarHtml +
        '<div class="hari-bubble"><span class="hari-name">Hari</span>' +
        '¡Bien hecho, <strong>' + evalCurrentUser + '</strong>! 🐾<br><br>' +
        'Tu puntaje ha sido registrado en la <strong>Tabla de Posiciones en Vivo</strong>. ' +
        'Espera a que todos los participantes terminen para ver los resultados finales.' +
        '</div></div>' +
        '<div id="liveLeaderboard"></div>' +
        '<div style="text-align:center;margin-top:24px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap">' +
        '<button class="btn-next-level" style="background:var(--accent-calm)" onclick="exitEval()">🏠 Ir a Inicio</button>' +
        '<button class="btn-next-level" style="background:#E74C3C" onclick="resetEvalSession()">🔄 Reiniciar Sesión</button>' +
        '</div>';

    // Show live leaderboard
    if (serverLeaderboard.length > 0) {
        document.getElementById('liveLeaderboard').innerHTML = buildLeaderboardHtml(serverLeaderboard);
    }

    updateEvalProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildLeaderboardHtml(participants) {
    if (!participants || participants.length === 0) return '';

    var sorted = [...participants].sort(function(a, b) {
        if (b.score !== a.score) return b.score - a.score;
        // If same score, finished first wins
        if (a.status === 'finished' && b.status !== 'finished') return -1;
        if (b.status === 'finished' && a.status !== 'finished') return 1;
        return (a.timeUsed || 0) - (b.timeUsed || 0);
    });

    var medals = ['🥇', '🥈', '🥉'];
    var tableHtml = '<div class="eval-leaderboard"><h3>🏆 Tabla de Posiciones en Vivo</h3><table>' +
        '<thead><tr><th>Pos.</th><th>Participante</th><th>Puntaje</th><th>Estado</th></tr></thead><tbody>';

    for (var i = 0; i < sorted.length; i++) {
        var p = sorted[i];
        var pos = i < 3 ? medals[i] : (i + 1);
        var isTop = i === 0 && p.status === 'finished';
        var statusIcon = '';
        var rowClass = '';

        if (p.status === 'playing') {
            statusIcon = '<span class="status-playing">⏳ Jugando</span>';
            rowClass = 'playing-row';
        } else if (p.status === 'finished') {
            statusIcon = '<span class="status-finished">✅ Finalizado</span>';
            rowClass = isTop ? 'top-row' : '';
        } else if (p.status === 'abandoned') {
            statusIcon = '<span class="status-abandoned">❌ Abandonó</span>';
            rowClass = 'abandoned-row';
        }

        tableHtml += '<tr class="' + rowClass + '"><td>' + pos + '</td><td>' + p.name + '</td><td>' + p.score + ' / ' + p.total + '</td><td>' + statusIcon + '</td></tr>';
    }
    tableHtml += '</tbody></table></div>';

    // Check if all have finished or abandoned
    var allDone = sorted.every(function(p) { return p.status === 'finished' || p.status === 'abandoned'; });
    var finishedPlayers = sorted.filter(function(p) { return p.status === 'finished'; });

    if (allDone && finishedPlayers.length > 0) {
        var topScore = finishedPlayers[0].score;
        var winners = finishedPlayers.filter(function(p) { return p.score === topScore; });
        var hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';

        if (winners.length > 1) {
            var winnerNames = winners.map(function(w) { return '<strong>' + w.name + '</strong>'; }).join(', ');
            tableHtml += '<div class="hari-character">' + hariAvatarHtml +
                '<div class="hari-bubble"><span class="hari-name">Hari</span>' +
                '¡Tenemos un empate! 🤯 ' + winnerNames + ' tienen el mismo puntaje: <strong>' + topScore + ' puntos</strong>.<br><br>' +
                '¡Pueden hacer un <strong>desempate</strong> reiniciando la sesión y volviendo a jugar! ⚔️' +
                '</div></div>';
        } else if (winners.length === 1) {
            tableHtml += '<div class="hari-character">' + hariAvatarHtml +
                '<div class="hari-bubble"><span class="hari-name">Hari</span>' +
                '¡Felicidades, <strong>' + winners[0].name + '</strong>! 🎊 Eres el ganador con <strong>' + topScore + ' puntos</strong>. ' +
                '¡Has demostrado un excelente dominio del Sistema Nervioso Autónomo! 🧠🏆' +
                '</div></div>';
        }
    } else if (finishedPlayers.length > 0) {
        var playingCount = sorted.filter(function(p) { return p.status === 'playing'; }).length;
        if (playingCount > 0) {
            tableHtml += '<div style="text-align:center;margin-top:16px;color:var(--text-secondary);font-style:italic">' +
                '⏳ Esperando a ' + playingCount + ' participante(s) que aún están jugando...</div>';
        }
    }

    return tableHtml;
}

function resetEvalSession() {
    if (confirm('¿Estás seguro? Esto borrará todos los resultados de esta sesión para TODOS los participantes.')) {
        if (socket && socket.connected) {
            socket.emit('admin-reset');
        }
        evalIsPlaying = false;
        renderEvalIntro();
    }
}

// ─── ABANDONMENT DETECTION ───
window.addEventListener('beforeunload', function(e) {
    if (evalIsPlaying) {
        e.preventDefault();
        e.returnValue = '¡Atención! Si sales de la página perderás todos tus puntos.';
        return e.returnValue;
    }
});

function exitQuiz() { showScreen('landingPage'); }
function exitEval() {
    clearInterval(evalTimerInterval);
    evalIsPlaying = false;
    showScreen('landingPage');
}

// ─── ADMIN PANEL ───
let isAdmin = false;

function promptAdminLogin() {
    const password = prompt('Ingrese la contraseña de Profesor:');
    if (password === 'UTMACH-AGROPEC') {
        isAdmin = true;
        connectSocket();
        socket.emit('admin-login', { password: password });
        showScreen('evalScreen');
        renderAdminPanel();
    } else if (password !== null) {
        alert('Contraseña incorrecta');
    }
}

function renderAdminPanel() {
    document.getElementById('evalTimerDisplay').style.display = 'none';
    document.getElementById('evalProgress').innerHTML = '';

    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    
    document.getElementById('evalScene').innerHTML = 
        '<div class="hari-character">' + hariAvatarHtml +
        '<div class="hari-bubble"><span class="hari-name">Hari (Admin)</span>' +
        'Bienvenido al <strong>Panel de Control</strong>, Profesor. 👨‍🏫<br><br>' +
        'Desde aquí puede monitorear a todos los alumnos en vivo, reiniciar la sesión o gestionar a los participantes.' +
        '</div></div>' +
        '<div id="adminLiveLeaderboard"></div>' +
        '<div id="adminQuestionBank" style="display:none; margin-top: 32px; text-align: left;"></div>' +
        '<div style="text-align:center;margin-top:24px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap">' +
        '<button class="btn-next-level" style="background:var(--accent-calm)" onclick="viewQuestionBank()">📖 Ver Banco de Preguntas</button>' +
        '<button class="btn-next-level" style="background:#E74C3C" onclick="adminResetSession()">🔄 Reiniciar Evaluación a Todos</button>' +
        '<button class="btn-next-level" style="background:var(--bg-card);color:var(--text-primary);border:1px solid var(--border-color);" onclick="exitAdmin()">🏠 Salir del Panel</button>' +
        '</div>';

    // If we already have leaderboard data, render it
    if (serverLeaderboard && serverLeaderboard.length > 0) {
        updateAdminLeaderboard(serverLeaderboard);
    }
}

function updateAdminLeaderboard(participants) {
    const lbContainer = document.getElementById('adminLiveLeaderboard');
    if (!lbContainer) return; // not on admin page

    if (!participants || participants.length === 0) {
        lbContainer.innerHTML = '<p style="text-align:center;color:var(--text-secondary);margin-top:20px;">No hay alumnos registrados aún.</p>';
        return;
    }

    var sorted = [...participants].sort(function(a, b) {
        if (b.score !== a.score) return b.score - a.score;
        if (a.status === 'finished' && b.status !== 'finished') return -1;
        if (b.status === 'finished' && a.status !== 'finished') return 1;
        return (a.timeUsed || 0) - (b.timeUsed || 0);
    });

    var medals = ['🥇', '🥈', '🥉'];
    var tableHtml = '<div class="eval-leaderboard"><h3>📊 Monitoreo de Alumnos en Vivo</h3><table>' +
        '<thead><tr><th>Pos.</th><th>Participante</th><th>Puntaje</th><th>Estado</th><th>Acción</th></tr></thead><tbody>';

    for (var i = 0; i < sorted.length; i++) {
        var p = sorted[i];
        var pos = i < 3 ? medals[i] : (i + 1);
        var isTop = i === 0 && p.status === 'finished';
        var statusIcon = '';
        var rowClass = '';

        if (p.status === 'playing') {
            statusIcon = '<span class="status-playing">⏳ Jugando</span>';
            rowClass = 'playing-row';
        } else if (p.status === 'finished') {
            statusIcon = '<span class="status-finished">✅ Finalizado</span>';
            rowClass = isTop ? 'top-row' : '';
        } else if (p.status === 'abandoned') {
            statusIcon = '<span class="status-abandoned">❌ Abandonó</span>';
            rowClass = 'abandoned-row';
        }

        tableHtml += '<tr class="' + rowClass + '"><td>' + pos + '</td><td>' + p.name + '</td><td>' + p.score + ' / ' + p.total + '</td><td>' + statusIcon + '</td>' +
                     '<td><button onclick="adminKickUser(\'' + p.id + '\')" style="background:#E74C3C;color:white;border:none;border-radius:4px;padding:4px 8px;cursor:pointer;">Eliminar</button></td></tr>';
    }
    tableHtml += '</tbody></table></div>';

    lbContainer.innerHTML = tableHtml;
}

function adminResetSession() {
    if (confirm('⚠️ PELIGRO: Esto borrará TODOS los puntajes actuales. ¿Deseas reiniciar la sesión?')) {
        if (socket && socket.connected) {
            socket.emit('admin-reset');
        }
    }
}

function adminKickUser(socketId) {
    if (confirm('¿Estás seguro de eliminar el registro de este alumno?')) {
        if (socket && socket.connected) {
            socket.emit('admin-kick', { id: socketId });
        }
    }
}

function exitAdmin() {
    isAdmin = false;
    showScreen('landingPage');
}

// Override the leaderboard-update socket event to also update admin panel
const originalLeaderboardUpdate = function(data) {}; // Not needed since we can just hook into the existing connection
// We will add a hook in connectSocket() by modifying how we handle 'leaderboard-update'
// But wait, the previous code already stores serverLeaderboard. I will just make it update the admin view if it exists.

function viewQuestionBank() {
    const qbContainer = document.getElementById('adminQuestionBank');
    if (!qbContainer) return;

    if (qbContainer.style.display === 'block') {
        qbContainer.style.display = 'none';
        return;
    }

    let html = '<div class="quiz-question-card" style="margin-bottom: 24px;">' +
               '<h3 style="color: var(--accent-calm); margin-bottom: 16px;">📚 Banco Completo de Preguntas</h3>' +
               '<div style="font-size: 0.95rem; color: var(--text-primary);">';

    for (let i = 0; i < QUIZ_BANK.length; i++) {
        const q = QUIZ_BANK[i];
        const letters = ['A', 'B', 'C', 'D'];
        html += '<div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border-color);">';
        html += '<strong>' + (i + 1) + '. ' + q.question + '</strong><br>';
        html += '<ul style="list-style-type: none; padding-left: 10px; margin-top: 8px;">';
        for (let j = 0; j < q.options.length; j++) {
            const isCorrect = (j === q.answer);
            const optStyle = isCorrect ? 'color: #27ae60; font-weight: bold;' : 'color: var(--text-secondary);';
            const icon = isCorrect ? '✅ ' : '🔸 ';
            html += '<li style="' + optStyle + ' margin-bottom: 4px;">' + icon + letters[j] + ') ' + q.options[j] + '</li>';
        }
        html += '</ul></div>';
    }

    html += '</div></div>';
    qbContainer.innerHTML = html;
    qbContainer.style.display = 'block';
}
