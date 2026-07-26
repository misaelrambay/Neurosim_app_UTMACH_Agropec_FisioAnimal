const SPECIES_DATA = [
    { id: 'bovino', name: 'Bovino (Carne)', emoji: '🐄', basalHR: 65, stressHR: 120, basalMotility: 'Activa (Rumia frecuente)', stressMotility: 'Inhibida (Atonía ruminal)', basalBloodFlow: 'Tracto gastrointestinal (40%)', stressBloodFlow: 'Músculo esquelético (70%)', intakeLabel: 'Consumo de Materia Seca (CMS)', expectedIntake: 12.5, stressIntake: 9.0, unit: 'kg/día', gainLabel: 'Ganancia Media Diaria (GMD)', expectedGain: 1.6, stressGain: 0.9, gainUnit: 'kg/día' },
    { id: 'bovino_leche', name: 'Bovino (Leche)', emoji: '🐄', basalHR: 70, stressHR: 130, basalMotility: 'Rumia frecuente y digestión activa', stressMotility: 'Falta de contracciones ruminales (Atonía)', basalBloodFlow: 'Glándula mamaria y Digestivo', stressBloodFlow: 'Músculos (Reducción de flujo a la ubre)', intakeLabel: 'Consumo de Materia Seca (CMS)', expectedIntake: 22.0, stressIntake: 15.0, unit: 'kg/día', gainLabel: 'Producción de Leche', expectedGain: 35.0, stressGain: 22.0, gainUnit: 'L/día' },
    { id: 'porcino', name: 'Porcino (Engorde)', emoji: '🐖', basalHR: 75, stressHR: 150, basalMotility: 'Digestión activa', stressMotility: 'Parálisis intestinal temporal, vaciado retrasado', basalBloodFlow: 'Vísceras (predominante)', stressBloodFlow: 'Músculo y piel', intakeLabel: 'Consumo Diario de Alimento', expectedIntake: 2.8, stressIntake: 1.9, unit: 'kg/día', gainLabel: 'Ganancia de Peso', expectedGain: 0.95, stressGain: 0.60, gainUnit: 'kg/día' },
    { id: 'ovino', name: 'Ovino', emoji: '🐑', basalHR: 80, stressHR: 130, basalMotility: 'Rumia y tránsito normal', stressMotility: 'Inhibición de motilidad, timpanismo', basalBloodFlow: 'Aparato digestivo', stressBloodFlow: 'Músculo y corazón', intakeLabel: 'Consumo de Materia Seca', expectedIntake: 1.5, stressIntake: 0.8, unit: 'kg/día', gainLabel: 'Ganancia Diaria', expectedGain: 0.25, stressGain: 0.10, gainUnit: 'kg/día' },
    { id: 'caprino', name: 'Caprino (Leche/Carne)', emoji: '🐐', basalHR: 80, stressHR: 130, basalMotility: 'Rumia activa', stressMotility: 'Falta de contracciones del estómago (Atonía), cese de rumia', basalBloodFlow: 'Glándula mamaria y digestivo', stressBloodFlow: 'Músculo periférico', intakeLabel: 'Consumo de Materia Seca', expectedIntake: 1.8, stressIntake: 1.1, unit: 'kg/día', gainLabel: 'Ganancia/Prod. Leche', expectedGain: 2.5, stressGain: 1.2, gainUnit: 'kg o L/día' },
    { id: 'ave', name: 'Ave (Pollo Engorde)', emoji: '🐔', basalHR: 275, stressHR: 450, basalMotility: 'Tránsito rápido (secreciones activas)', stressMotility: 'Alimento atascado (Estasis del buche) e intestinos', basalBloodFlow: 'Intestino y molleja', stressBloodFlow: 'Músculos pectorales y corazón', intakeLabel: 'Consumo de Alimento', expectedIntake: 160, stressIntake: 90, unit: 'g/día', gainLabel: 'Ganancia Diaria', expectedGain: 85, stressGain: 35, gainUnit: 'g/día' }
];

const VET_DESCRIPTIONS = {
    calm: {
        hrStatus: 'Bradicardia relativa (Tono vagal)',
        hrDescription: 'Efecto cronotrópico negativo mediado por acetilcolina (ACh) sobre receptores muscarínicos M₂ del nodo sinoauricular, reduciendo la frecuencia de despolarización.',
        productivityDescription: 'Predominio parasimpático (Nervio Vago – X par craneal): Incremento del tono colinérgico → estimulación de receptores muscarínicos M₃ en músculo liso intestinal → aumento de la motilidad y secreciones exocrinas (HCl, enzimas pancreáticas, bilis). Favorece el anabolismo vía eje somatotrófico (GH/IGF-1) y reduce la proteólisis mediada por cortisol.'
    },
    stress: {
        hrStatus: 'Taquicardia (Activación simpática)',
        hrDescription: 'Efecto cronotrópico e inotrópico positivo por liberación de catecolaminas (adrenalina/noradrenalina) actuando sobre receptores β₁-adrenérgicos del miocardio. Incremento del gasto cardíaco.',
        productivityDescription: 'Activación del eje Hipotálamo-Hipófisis-Adrenal (HHA): Liberación de CRH → ACTH → Cortisol desde la corteza adrenal. El cortisol induce gluconeogénesis hepática, lipólisis, proteólisis muscular y supresión inmunitaria (linfopenia, involución tímica). Vasoconstricción esplácnica por receptores α₁-adrenérgicos → isquemia gastrointestinal. Inhibición del tono vagal → atonía ruminal/intestinal.'
    }
};

const HARI_LEVELS = [
    {
        id: 1, sceneEmoji: '🌿😌🐄', sceneTitle: 'Descanso después de comer', sceneDesc: 'Bella acaba de almorzar y se echó bajo la sombra de un gran árbol. Está masticando tranquilamente su comida, con los ojos entrecerrados y respirando lentamente.', correctAnswer: 'parasimpatico',
        physiologyCorrect: { heartRate: { icon: '❤️', label: 'Frecuencia Cardíaca', value: 'Disminuye (60-70 LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Se contraen (miosis)' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Lenta y profunda' }, digestion: { icon: '🟢', label: 'Digestión', value: 'Muy activa (rumia)' } },
        hariCorrect: '¡Excelente! 🎉 Cuando Bella descansa después de comer, su cuerpo activa el <strong>Sistema Parasimpático</strong>. El nervio vago libera acetilcolina, que reduce la frecuencia cardíaca, contrae las pupilas y activa todo el sistema digestivo. ¡Es el momento perfecto para que Bella absorba todos los nutrientes de su comida!',
        hariHint: '¡Buen intento! 🤔 Observemos nuevamente la situación. Bella está descansando tranquilamente después de comer... ¿Crees que necesita prepararse para huir o más bien su cuerpo debe enfocarse en digerir la comida?'
    },
    {
        id: 2, sceneEmoji: '🐕😰🐄', sceneTitle: 'Un perro desconocido aparece', sceneDesc: 'Un perro grande que Bella nunca ha visto aparece corriendo y ladrando fuertemente en la cerca de la hacienda. Bella levanta la cabeza de golpe, abre los ojos bien grandes y se tensa.', correctAnswer: 'simpatico',
        physiologyCorrect: { heartRate: { icon: '💓', label: 'Frecuencia Cardíaca', value: 'Aumenta rápidamente (120+ LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Se dilatan (midriasis)' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Rápida y superficial' }, digestion: { icon: '🔴', label: 'Digestión', value: 'Se detiene (atonía)' } },
        hariCorrect: '¡Muy bien! ⚡ Ante un posible depredador, el cuerpo de Bella activa el <strong>Sistema Simpático</strong>. Las glándulas adrenales liberan adrenalina y noradrenalina, que aceleran el corazón, dilatan las pupilas para ver mejor, envían sangre a los músculos y detienen la digestión. ¡Es la respuesta de "lucha o huida" que protege a Bella!',
        hariHint: '¡Buen intento! 🤔 Piensa en esto: un animal desconocido está ladrando agresivamente... ¿Bella debería relajarse para digerir o preparar su cuerpo para reaccionar rápidamente ante una posible amenaza?'
    },
    {
        id: 3, sceneEmoji: '☀️💧🐄', sceneTitle: 'Mediodía caluroso', sceneDesc: 'Es mediodía y hace mucho calor. Bella encontró un charco de agua fresca y está bebiendo lentamente, luego se recuesta bajo un techo de palma con otras vacas. Todo está en calma.', correctAnswer: 'parasimpatico',
        physiologyCorrect: { heartRate: { icon: '❤️', label: 'Frecuencia Cardíaca', value: 'Estable y baja (65 LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Contraídas (miosis)' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Regular y calmada' }, digestion: { icon: '🟢', label: 'Digestión', value: 'Activa (secreciones digestivas)' } },
        hariCorrect: '¡Perfecto! 💧 Cuando Bella bebe agua tranquilamente y descansa, el <strong>Sistema Parasimpático</strong> domina. El cuerpo se enfoca en hidratarse, regular la temperatura y mantener activas las funciones digestivas. La acetilcolina también estimula las glándulas salivales, lo cual es esencial para la rumia. ¡La homeostasis en acción!',
        hariHint: '¡Buen intento! 🤔 Bella está bebiendo agua tranquilamente y descansando con sus amigas... ¿Su cuerpo necesita ahorrar energía para descansar o prepararse para actuar rápidamente?'
    },
    {
        id: 4, sceneEmoji: '⛈️😨🐄', sceneTitle: 'Tormenta con truenos', sceneDesc: 'De repente, el cielo se oscurece y caen rayos con truenos muy fuertes. El suelo tiembla y Bella empieza a moverse nerviosa de un lado a otro, con las orejas hacia atrás.', correctAnswer: 'simpatico',
        physiologyCorrect: { heartRate: { icon: '💓', label: 'Frecuencia Cardíaca', value: 'Muy elevada (130+ LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Muy dilatadas (midriasis)' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Acelerada y agitada' }, digestion: { icon: '🔴', label: 'Digestión', value: 'Completamente inhibida' } },
        hariCorrect: '¡Correcto! 🌩️ Los ruidos fuertes e impredecibles activan el <strong>Sistema Simpático</strong> de Bella. El cerebro interpreta los truenos como una amenaza potencial. La médula adrenal libera catecolaminas que preparan el cuerpo: más sangre a los músculos, broncodilatación para más oxígeno y la energía almacenada se libera como glucosa. ¡El cuerpo se prepara por si necesita escapar!',
        hariHint: '¡Buen intento! 🤔 Observa cómo Bella está nerviosa, se mueve de un lado a otro... Los ruidos fuertes representan algo impredecible. ¿Crees que su cuerpo se relajaría o se activaría para estar lista ante cualquier peligro?'
    },
    {
        id: 5, sceneEmoji: '🌾🐄😊', sceneTitle: 'Prado tranquilo al atardecer', sceneDesc: 'El sol se pone lentamente y pinta el cielo de naranja. Bella está en un prado verde, rumiando su última comida del día. La brisa es suave, no hay ruidos extraños, y las otras vacas también están tranquilas.', correctAnswer: 'parasimpatico',
        physiologyCorrect: { heartRate: { icon: '❤️', label: 'Frecuencia Cardíaca', value: 'Baja y estable (60 LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Contraídas (miosis)' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Muy lenta y rítmica' }, digestion: { icon: '🟢', label: 'Digestión', value: 'Máxima actividad (rumia activa)' } },
        hariCorrect: '¡Excelente! 🌅 Este es el momento ideal del <strong>Sistema Parasimpático</strong>. Sin amenazas, el cuerpo de Bella se dedica completamente a procesar los alimentos, absorber nutrientes y restaurar energía. El nervio vago mantiene un ritmo cardíaco bajo, estimula la secreción de enzimas digestivas y promueve el anabolismo. ¡Así es como Bella crece sana y fuerte!',
        hariHint: '¡Buen intento! 🤔 Es un atardecer tranquilo, sin amenazas, Bella está rumiando pacíficamente... ¿Necesita activarse para huir o debería su cuerpo dedicarse a descansar y aprovechar al máximo los nutrientes?'
    },
    {
        id: 6, sceneEmoji: '💉🐄😟', sceneTitle: 'Día de vacunación', sceneDesc: 'El veterinario llega con su equipo. Hay mucho ruido de corrales metálicos y Bella está en la manga de contención, sintiéndose acorralada y nerviosa por el manejo.', correctAnswer: 'simpatico',
        physiologyCorrect: { heartRate: { icon: '💓', label: 'Frecuencia Cardíaca', value: 'Aumenta (125 LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Dilatadas (midriasis)' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Acelerada' }, digestion: { icon: '🔴', label: 'Digestión', value: 'Pausada temporalmente' } },
        hariCorrect: '¡Bien hecho! ⚡ Las situaciones de manejo y encierro generan estrés agudo. El <strong>Sistema Simpático</strong> de Bella se activa para prepararla ante lo que percibe como un peligro, elevando su frecuencia cardíaca y deteniendo procesos no esenciales como la digestión.',
        hariHint: '¡Buen intento! 🤔 Bella está encerrada y nerviosa por el manejo del veterinario. ¿Su cuerpo se está relajando o se está activando para protegerse del estrés?'
    },
    {
        id: 7, sceneEmoji: '🍎🐄🤤', sceneTitle: 'Comiendo su premio favorito', sceneDesc: 'El granjero le trae a Bella una ración extra de pasto fresco y unos trozos de manzana dulce. Bella come gustosamente, sin ninguna prisa.', correctAnswer: 'parasimpatico',
        physiologyCorrect: { heartRate: { icon: '❤️', label: 'Frecuencia Cardíaca', value: 'Tranquila (65 LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Normales a contraídas' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Pausada' }, digestion: { icon: '🟢', label: 'Digestión', value: 'Muy estimulada y secretando saliva' } },
        hariCorrect: '¡Exacto! 🍎 Al disfrutar de su comida en un ambiente seguro, el <strong>Sistema Parasimpático</strong> aumenta la secreción de saliva y jugos gástricos. La acetilcolina relaja el cuerpo para maximizar la asimilación del alimento.',
        hariHint: '¡Buen intento! 🤔 Bella está disfrutando una rica comida sin que nadie la moleste. ¿Qué sistema domina cuando un animal está comiendo tranquilamente?'
    },
    {
        id: 8, sceneEmoji: '🐍🐄😱', sceneTitle: 'Una serpiente en el pasto', sceneDesc: 'Mientras pastaba, Bella casi pisa una serpiente que sisea fuertemente. Bella salta hacia atrás rápidamente y se queda inmovilizada observando.', correctAnswer: 'simpatico',
        physiologyCorrect: { heartRate: { icon: '💓', label: 'Frecuencia Cardíaca', value: 'Se dispara (140 LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Máxima dilatación' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Contenida y luego muy rápida' }, digestion: { icon: '🔴', label: 'Digestión', value: 'Cese total e inmediato' } },
        hariCorrect: '¡Correcto! 🐍 El susto repentino provoca una descarga masiva del <strong>Sistema Simpático</strong>. La adrenalina inunda el torrente sanguíneo de Bella, dándole la energía explosiva necesaria para saltar y huir del peligro.',
        hariHint: '¡Buen intento! 🤔 Una serpiente siseando es una amenaza directa e inmediata. ¿Qué sistema prepara los músculos para saltar y escapar de inmediato?'
    },
    {
        id: 9, sceneEmoji: '💤🐄🌙', sceneTitle: 'Durmiendo bajo las estrellas', sceneDesc: 'Es medianoche. Todo el rebaño está dormido en el campo bajo la luna. La respiración de Bella es profunda y rítmica mientras descansa plácidamente.', correctAnswer: 'parasimpatico',
        physiologyCorrect: { heartRate: { icon: '❤️', label: 'Frecuencia Cardíaca', value: 'Mínima basal (55 LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Miosis (contraídas)' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Lenta y profunda' }, digestion: { icon: '🟢', label: 'Digestión', value: 'Procesando alimento lentamente' } },
        hariCorrect: '¡Perfecto! 🌙 Durante el sueño profundo, el <strong>Sistema Parasimpático</strong> está al mando absoluto. Se encarga de las funciones de mantenimiento, reparación de tejidos y crecimiento celular.',
        hariHint: '¡Buen intento! 🤔 Bella está completamente dormida y descansando en la noche. ¿Qué sistema nervioso es el encargado de las funciones de "descansar y reparar"?'
    },
    {
        id: 10, sceneEmoji: '🚛🐄🔊', sceneTitle: 'Un camión ruidoso pasa cerca', sceneDesc: 'Un camión de carga pesada pasa por la carretera tocando una bocina muy fuerte. Bella deja de rumiar, alza las orejas y mira fijamente hacia la carretera.', correctAnswer: 'simpatico',
        physiologyCorrect: { heartRate: { icon: '💓', label: 'Frecuencia Cardíaca', value: 'Elevada repentinamente (110 LPM)' }, pupils: { icon: '👁️', label: 'Pupilas', value: 'Leve dilatación para enfocar' }, breathing: { icon: '🫁', label: 'Respiración', value: 'Acelerada temporalmente' }, digestion: { icon: '🔴', label: 'Digestión', value: 'Interrupción de la rumia' } },
        hariCorrect: '¡Excelente! 🚛 Los ruidos fuertes e inesperados son estresores ambientales. El <strong>Sistema Simpático</strong> interrumpe la rumia de Bella y desvía la sangre hacia los músculos y sentidos para estar alerta.',
        hariHint: '¡Buen intento! 🤔 El fuerte ruido del camión asustó a Bella e interrumpió su momento de paz. ¿Qué sistema se activa ante un sobresalto ruidoso?'
    }
];

let isStressed = false;
let selectedSpecies = SPECIES_DATA[0];
let currentHR = selectedSpecies.basalHR;
let hrInterval = null;
let currentMode = 'agro';
let gameLevel = -1;
let gameLevelCompleted = [];
let currentLevels = [];

const ui = {
    btnBackToHome: document.getElementById('btnBackToHome'),
    btnStart: document.getElementById('btnStart'),
    landingPage: document.getElementById('landingPage'),
    appContainer: document.getElementById('appContainer'),
    speciesSelect: document.getElementById('speciesSelect'),
    btnCalm: document.getElementById('btnCalm'),
    btnStress: document.getElementById('btnStress'),
    hrValue: document.getElementById('hrValue'),
    hrValueContainer: document.getElementById('hrValueContainer'),
    hrStatus: document.getElementById('hrStatus'),
    hrDescription: document.getElementById('hrDescription'),
    heartSvg: document.getElementById('heartSvg'),
    motilityValue: document.getElementById('motilityValue'),
    bloodFlowValue: document.getElementById('bloodFlowValue'),
    motilityPanel: document.getElementById('motilityPanel'),
    bloodFlowPanel: document.getElementById('bloodFlowPanel'),
    intakeLabel: document.getElementById('intakeLabel'),
    intakeValue: document.getElementById('intakeValue'),
    intakeUnit: document.getElementById('intakeUnit'),
    gainLabel: document.getElementById('gainLabel'),
    gainValue: document.getElementById('gainValue'),
    gainUnit: document.getElementById('gainUnit'),
    intakeIconContainer: document.getElementById('intakeIconContainer'),
    gainIconContainer: document.getElementById('gainIconContainer'),
    productivityDescription: document.getElementById('productivityDescription')
};

const arrowUpSvg = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-calm)" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`;
const arrowDownSvg = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-stress)" stroke-width="2"><path d="M17 7 7 17"/><path d="M17 17H7V7"/></svg>`;

function showScreen(screenId) {
    ['landingPage', 'levelSelectScreen', 'specialtyScreen', 'appContainer', 'hariGameScreen', 'quizScreen', 'evalScreen'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === screenId) {
            el.style.display = (id === 'appContainer' || id === 'hariGameScreen' || id === 'quizScreen' || id === 'evalScreen') ? 'block' : (id === 'landingPage' ? '' : 'flex');
            el.classList.add('active');
        } else {
            el.style.display = (id === 'landingPage') ? 'none' : 'none';
            el.classList.remove('active');
        }
    });
    document.body.classList.remove('stress-mode');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startExpertMode(mode) {
    currentMode = mode;
    showScreen('appContainer');
    updateUI();
}

function init() {
    SPECIES_DATA.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.emoji + ' ' + s.name;
        ui.speciesSelect.appendChild(opt);
    });

    if (ui.btnStart) {
        ui.btnStart.addEventListener('click', () => showScreen('levelSelectScreen'));
    }
    if (ui.btnBackToHome) {
        ui.btnBackToHome.addEventListener('click', () => showScreen('levelSelectScreen'));
    }

    ui.speciesSelect.addEventListener('change', (e) => {
        selectedSpecies = SPECIES_DATA.find(s => s.id === e.target.value);
        currentHR = isStressed ? selectedSpecies.stressHR : selectedSpecies.basalHR;
        updateUI();
    });
    ui.btnCalm.addEventListener('click', () => { isStressed = false; updateUI(); });
    ui.btnStress.addEventListener('click', () => { isStressed = true; updateUI(); });
    updateUI();
}

function updateUI() {
    const isVet = (currentMode === 'vet');
    if (isStressed) {
        document.body.classList.add('stress-mode');
        ui.btnStress.classList.add('active');
        ui.btnCalm.classList.remove('active');
        ui.hrValueContainer.classList.remove('calm-text');
        ui.hrValueContainer.classList.add('stress-text');
        ui.hrStatus.textContent = isVet ? VET_DESCRIPTIONS.stress.hrStatus : 'Taquicardia';
        ui.motilityPanel.style.borderLeftColor = 'var(--accent-stress)';
        ui.bloodFlowPanel.style.borderLeftColor = 'var(--accent-stress)';
        ui.intakeIconContainer.innerHTML = arrowDownSvg;
        ui.gainIconContainer.innerHTML = arrowDownSvg;
    } else {
        document.body.classList.remove('stress-mode');
        ui.btnCalm.classList.add('active');
        ui.btnStress.classList.remove('active');
        ui.hrValueContainer.classList.add('calm-text');
        ui.hrValueContainer.classList.remove('stress-text');
        ui.hrStatus.textContent = isVet ? VET_DESCRIPTIONS.calm.hrStatus : 'Basal';
        ui.motilityPanel.style.borderLeftColor = 'var(--accent-calm)';
        ui.bloodFlowPanel.style.borderLeftColor = 'var(--accent-calm)';
        ui.intakeIconContainer.innerHTML = arrowUpSvg;
        ui.gainIconContainer.innerHTML = arrowUpSvg;
    }

    const expertExpl = document.getElementById('expertHariExplanation');
    if (expertExpl) {
        const hrDesc = isVet ? VET_DESCRIPTIONS[isStressed ? 'stress' : 'calm'].hrDescription : (isStressed ? 'Liberación de Catecolaminas (Adrenalina/Noradrenalina).' : 'Dominancia del Nervio Vago (Acetilcolina).');
        const prodDesc = isVet ? VET_DESCRIPTIONS[isStressed ? 'stress' : 'calm'].productivityDescription : (isStressed ? 'El estrés prolongado eleva el cortisol, aumenta el catabolismo proteico y reduce el apetito, afectando severamente la conversión alimenticia.' : 'Un ambiente de bajo estrés favorece el tono vagal, optimizando la secreción de enzimas digestivas, la absorción de nutrientes y el anabolismo.');

        expertExpl.innerHTML = '<strong>🫀 Frecuencia Cardíaca:</strong> ' + hrDesc + '<br><br><strong>📈 Impacto Productivo:</strong> ' + prodDesc;
    }
    ui.motilityValue.textContent = isStressed ? selectedSpecies.stressMotility : selectedSpecies.basalMotility;
    ui.bloodFlowValue.textContent = isStressed ? selectedSpecies.stressBloodFlow : selectedSpecies.basalBloodFlow;
    ui.intakeLabel.textContent = selectedSpecies.intakeLabel;
    ui.intakeValue.textContent = isStressed ? selectedSpecies.stressIntake : selectedSpecies.expectedIntake;
    ui.intakeUnit.textContent = selectedSpecies.unit;
    ui.gainLabel.textContent = selectedSpecies.gainLabel;
    ui.gainValue.textContent = isStressed ? selectedSpecies.stressGain : selectedSpecies.expectedGain;
    ui.gainUnit.textContent = selectedSpecies.gainUnit;

    const existingBadge = document.querySelector('.vet-badge, .agro-badge');
    if (existingBadge) existingBadge.remove();
    const header = document.querySelector('#appContainer header h1');
    if (header) {
        const badge = document.createElement('span');
        if (isVet) {
            badge.className = 'vet-badge';
            badge.innerHTML = '🩺 Veterinaria';
        } else {
            badge.className = 'agro-badge';
            badge.innerHTML = '🌿 Agropecuaria';
        }
        header.appendChild(badge);
    }
    animateHeartRate();
}

function animateHeartRate() {
    const targetHR = isStressed ? selectedSpecies.stressHR : selectedSpecies.basalHR;
    if (hrInterval) clearInterval(hrInterval);
    const step = targetHR > currentHR ? 1 : -1;
    hrInterval = setInterval(() => {
        if (currentHR === targetHR) { clearInterval(hrInterval); }
        else {
            const diff = Math.abs(targetHR - currentHR);
            const jump = diff > 50 ? 5 : diff > 20 ? 2 : 1;
            currentHR += (step * jump);
            if ((step === 1 && currentHR > targetHR) || (step === -1 && currentHR < targetHR)) currentHR = targetHR;
        }
        ui.hrValue.textContent = currentHR;
        ui.heartSvg.style.animation = 'heartbeat ' + (60000 / currentHR) + 'ms infinite ease-in-out';
    }, 30);
}

function initHariGame() {
    gameLevel = -1; gameLevelCompleted = [];
    let shuffled = [...HARI_LEVELS].sort(() => 0.5 - Math.random());
    currentLevels = shuffled.slice(0, 5);
    renderGameIntro(); updateProgressDots();
}
function exitHariGame() { showScreen('levelSelectScreen'); }
function updateProgressDots() {
    const c = document.getElementById('gameProgress'); c.innerHTML = '';
    for (let i = 0; i < currentLevels.length; i++) {
        const d = document.createElement('div'); d.className = 'progress-dot';
        if (gameLevelCompleted.includes(i)) d.classList.add('completed');
        if (i === gameLevel) d.classList.add('current');
        c.appendChild(d);
    }
}
function renderGameIntro() {
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    document.getElementById('gameScene').innerHTML = '<div class="hari-character">' + hariAvatarHtml + '<div class="hari-bubble"><span class="hari-name">Hari</span>Te presento a <strong>Bella</strong> 🐮, una vaca muy amigable que vive en una hacienda. Juntos vamos a observar cómo su cuerpo reacciona ante distintas situaciones cotidianas.</div></div><div class="Bella-scene" style="margin:24px 0"><span class="scene-emoji">🐄🌿</span><div class="scene-title">¡Conoce a Bella!</div><div class="scene-desc">Bella es una vaca curiosa que vive en una hacienda. Su cuerpo tiene un sistema increíble llamado <strong>Sistema Nervioso Autónomo</strong> que le ayuda a responder a todo lo que le sucede.</div></div><div class="hari-character" style="animation-delay:.3s"><div class="hari-bubble" style="width:100%; max-width:none;"><span class="hari-name">Hari</span><strong>¿Cómo funciona el juego?</strong><br><br>🐾 Te mostraré una situación que Bella está viviendo.<br>🐾 Tú decidirás qué sistema nervioso ayuda a Bella: el <strong>Simpático</strong> ⚡ (activa el cuerpo) o el <strong>Parasimpático</strong> 🧘 (relaja el cuerpo).<br>🐾 Después, veremos juntos cómo reacciona el cuerpo de Bella.<br>🐾 No te preocupes si te equivocas, ¡siempre puedes volver a intentarlo!<br><br>¿Listo para empezar? 🐾</div></div><div style="text-align:center;margin-top:24px"><button class="btn-next-level" onclick="startGameLevel(0)">¡Comenzar la aventura! 🚀</button></div>';
}
function startGameLevel(idx) {
    if (idx >= currentLevels.length) { renderGameComplete(); return; }
    gameLevel = idx; updateProgressDots();
    const lv = currentLevels[idx];
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    document.getElementById('gameScene').innerHTML = '<h2 class="level-indicator" style="text-align:center; color:var(--text-secondary); margin-bottom: 24px; font-family:\'Outfit\',sans-serif;">¡Nivel ' + (idx + 1) + '! Observa lo que le sucede a Bella...</h2><div class="Bella-scene"><span class="scene-emoji">' + lv.sceneEmoji + '</span><div class="scene-title">' + lv.sceneTitle + '</div><div class="scene-desc">' + lv.sceneDesc + '</div></div><div class="hari-character" style="animation-delay:.2s">' + hariAvatarHtml + '<div class="hari-bubble"><span class="hari-name">Hari</span>¿Qué sistema nervioso autónomo crees que ayudará a Bella a responder mejor a esta situación?</div></div><div class="choice-container" id="choiceContainer"><button class="choice-btn choice-simp" onclick="handleChoice(\'simpatico\',' + idx + ')"><span class="choice-icon">⚡</span><div class="choice-label">Sistema Simpático</div><div class="choice-hint">Activa, prepara, lucha o huida</div></button><button class="choice-btn choice-para" onclick="handleChoice(\'parasimpatico\',' + idx + ')"><span class="choice-icon">🍃</span><div class="choice-label">Sistema Parasimpático</div><div class="choice-hint">Relaja, descansa, digiere</div></button></div><div id="feedbackArea"></div>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function handleChoice(choice, idx) {
    const lv = currentLevels[idx], ok = (choice === lv.correctAnswer);
    const fb = document.getElementById('feedbackArea'), btns = document.querySelectorAll('.choice-btn');
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    if (ok) {
        btns.forEach(b => { if ((choice === 'simpatico' && b.classList.contains('choice-simp')) || (choice === 'parasimpatico' && b.classList.contains('choice-para'))) b.classList.add('correct'); b.disabled = true; b.style.pointerEvents = 'none'; });
        gameLevelCompleted.push(idx); updateProgressDots();
        let ph = ''; Object.values(lv.physiologyCorrect).forEach(it => { ph += '<div class="physio-item"><span class="physio-icon">' + it.icon + '</span><div class="physio-label">' + it.label + '</div><div class="physio-value">' + it.value + '</div></div>'; });
        fb.innerHTML = '<div class="physiology-result"><h4>🔬 Así reacciona el cuerpo de Bella:</h4><div class="physio-grid">' + ph + '</div></div><div class="hari-character">' + hariAvatarHtml + '<div class="hari-bubble"><span class="hari-name">Hari</span>' + lv.hariCorrect + '</div></div><div style="text-align:center"><button class="btn-next-level" onclick="startGameLevel(' + (idx + 1) + ')">' + (idx < currentLevels.length - 1 ? 'Siguiente nivel →' : 'Ver resultados 🎉') + '</button></div>';
        fb.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        btns.forEach(b => { if ((choice === 'simpatico' && b.classList.contains('choice-simp')) || (choice === 'parasimpatico' && b.classList.contains('choice-para'))) { b.classList.add('incorrect'); setTimeout(() => b.classList.remove('incorrect'), 600); } });
        fb.innerHTML = '<div class="hari-character">' + hariAvatarHtml + '<div class="hari-bubble"><span class="hari-name">Hari</span>' + lv.hariHint + '</div></div>';
        fb.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
function renderGameComplete() {
    const hariAvatarHtml = '<div class="hari-avatar"><img src="assets/hari.png" class="hari-img" alt="Hari"></div>';
    document.getElementById('gameScene').innerHTML = '<div class="game-complete"><span class="trophy">🏆</span><h2>¡Felicidades! Has completado la aventura</h2><p>Junto con Bella y Hari, aprendiste cómo el <strong>Sistema Nervioso Autónomo</strong> mantiene el equilibrio del cuerpo. El <strong>Simpático</strong> ⚡ prepara al animal para situaciones de estrés, mientras que el <strong>Parasimpático</strong> 🍃 le permite descansar, digerir y recuperar energía.</p></div><div class="hari-character">' + hariAvatarHtml + '<div class="hari-bubble"><span class="hari-name">Hari</span>¡Lo hiciste increíble! 🌟 Ahora sabes que el equilibrio entre ambos sistemas es fundamental para la salud y el bienestar de los animales. Recuerda: el bienestar animal no solo es importante para ellos, ¡también impacta directamente en la producción! 🐄💚<br><br>Si quieres profundizar más, te invito a explorar el <strong>modo Experto</strong> con el simulador completo.</div></div><div style="text-align:center;margin-top:24px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap"><button class="btn-next-level" onclick="initHariGame()">🔄 Jugar de nuevo</button><button class="btn-next-level" style="background:var(--accent-calm)" onclick="showScreen(\'levelSelectScreen\')">← Volver al menú</button></div>';
    updateProgressDots(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

init();