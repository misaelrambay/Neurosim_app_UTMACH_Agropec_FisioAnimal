const QUIZ_BANK = [
    // ═══════════════════════════════════════════════
    // PREGUNTAS CONCEPTUALES (1–25)
    // ═══════════════════════════════════════════════
    {
        question: 'Cuando una vaca escucha un ruido fuerte y se asusta, la señal viaja desde el oído hacia el cerebro a través de las neuronas. ¿Qué parte de la neurona recibe primero esa señal?',
        options: ['Axón', 'Dendritas', 'Vesículas sinápticas', 'Vaina de mielina'],
        answer: 1
    },
    {
        question: 'Una neurona de un bovino en reposo tiene una diferencia de cargas eléctricas entre el interior y el exterior de su membrana. ¿Cuál es el valor aproximado de ese "potencial de reposo"?',
        options: ['+40 mV', '-55 mV', '-70 mV', '-120 mV'],
        answer: 2
    },
    {
        question: 'Cuando un bovino pisa un objeto punzante y retira la pata inmediatamente, se genera un potencial de acción en las neuronas sensoriales. ¿Qué evento iónico principal ocurre durante la despolarización?',
        options: ['Salida de K⁺', 'Entrada de Na⁺', 'Ingreso de Cl⁻', 'Cierre de canales'],
        answer: 1
    },
    {
        question: 'Un caballo retira la pata en milisegundos al pisar una espina. Esta velocidad de respuesta (hasta 120 m/s) se debe a que el impulso "salta" entre puntos del axón. ¿Qué estructura hace posible esta conducción saltatoria?',
        options: ['Soma', 'Hendidura sináptica', 'Nódulos de Ranvier', 'Dendritas'],
        answer: 2
    },
    {
        question: 'Si un bovino recibe un pinchazo suave, envía pocos impulsos nerviosos; si el pinchazo es fuerte, envía muchos más. ¿Cómo codifica el sistema nervioso del animal la intensidad de ese estímulo?',
        options: ['Aumentando amplitud', 'Aumentando frecuencia', 'Cambiando de ión', 'Grosor de mielina'],
        answer: 1
    },
    {
        question: 'Para que una neurona libere su neurotransmisor (por ejemplo, acetilcolina para activar la digestión de un rumiante), las vesículas deben fusionarse con la membrana. ¿Qué ión es indispensable para que esto ocurra?',
        options: ['Magnesio', 'Sodio', 'Potasio', 'Calcio'],
        answer: 3
    },
    {
        question: 'Cuando una vaca está tranquila rumiando, el nervio vago libera un neurotransmisor que activa su sistema digestivo, reduce la frecuencia cardíaca y estimula las secreciones. ¿Cuál es ese neurotransmisor del sistema parasimpático?',
        options: ['Noradrenalina', 'Adrenalina', 'Acetilcolina', 'Dopamina'],
        answer: 2
    },
    {
        question: 'El sistema nervioso parasimpático (el de "descansar y digerir") tiene su origen en dos zonas del cuerpo del animal. ¿Cuáles son?',
        options: ['Torácicos y lumbares', 'Tronco encefálico y sacro', 'Cadena simpática', 'Médula adrenal'],
        answer: 1
    },
    {
        question: 'Hay un nervio que recorre desde el cerebro hasta la mayoría de los órganos internos del animal (corazón, pulmones, rumen, intestinos). Inerva aproximadamente el 75% de las vísceras. ¿Cuál es?',
        options: ['Nervio oculomotor', 'Nervio facial', 'Nervio glosofaríngeo', 'Nervio vago'],
        answer: 3
    },
    {
        question: 'Cuando un animal se asusta, sus glándulas adrenales liberan adrenalina y noradrenalina directamente a la sangre. La parte de la adrenal que hace esto funciona como un "ganglio simpático modificado". ¿Cuál es?',
        options: ['Corteza adrenal', 'Médula adrenal', 'Hipotálamo', 'Ganglio celíaco'],
        answer: 1
    },
    {
        question: 'Cuando una vaca se asusta durante el ordeño, la adrenalina contrae los vasos sanguíneos de la ubre, impidiendo que la oxitocina llegue a las células de la leche. ¿Qué receptor causa esa vasoconstricción?',
        options: ['Receptor Alfa-1', 'Receptor Alfa-2', 'Receptor Beta-1', 'Receptor Beta-2'],
        answer: 0
    },
    {
        question: 'Cuando un bovino está en pleno reposo digestivo, su frecuencia cardíaca baja a ~65 latidos por minuto. ¿Qué sistema nervioso y qué efecto produce esta bradicardia?',
        options: ['Simpático (Taquicardia)', 'Parasimpático (Bradicardia)', 'Somático (Voluntario)', 'Entérico (Directo)'],
        answer: 1
    },
    {
        question: 'Cuando un animal huye de un depredador, su corazón late más rápido y con más fuerza para bombear sangre a los músculos. ¿Qué receptor del corazón es responsable de esta taquicardia?',
        options: ['Receptor Alfa-1', 'Receptor Alfa-2', 'Receptor Beta-1', 'Receptor Beta-2'],
        answer: 2
    },
    {
        question: 'En el sistema nervioso autónomo, las neuronas están conectadas en cadena: la primera (preganglionar) hace sinapsis en un ganglio con la segunda (posganglionar). ¿Qué neurotransmisor usa la fibra preganglionar en AMBOS sistemas (simpático y parasimpático)?',
        options: ['Noradrenalina', 'Acetilcolina', 'Serotonina', 'Adrenalina'],
        answer: 1
    },
    {
        question: 'El tracto digestivo de los animales tiene su propio "cerebro intestinal" llamado Sistema Nervioso Entérico. Dentro de este, ¿qué plexo controla específicamente la secreción de jugos gástricos e intestinales?',
        options: ['Plexo mientérico', 'Plexo submucoso', 'Ganglio estrellado', 'Plexo braquial'],
        answer: 1
    },
    {
        question: 'En los trópicos, las vacas lecheras pueden sufrir estrés calórico cuando la temperatura ambiental supera los 28°C. ¿Qué órgano del cerebro actúa como "termostato" del animal, integrando la información térmica y activando respuestas como jadeo o vasodilatación periférica?',
        options: ['Bulbo raquídeo', 'Médula espinal', 'Hipotálamo', 'Cerebelo'],
        answer: 2
    },
    {
        question: 'En el arco reflejo de un animal (por ejemplo, el reflejo de retirada al pisar un clavo), hay cinco componentes. ¿Cuál es el que ejecuta la respuesta final, como contraer el músculo para retirar la pata?',
        options: ['Receptor sensorial', 'Centro integrador', 'Neurona aferente', 'Órgano efector'],
        answer: 3
    },
    {
        question: 'Un bovino adulto en reposo produce grandes cantidades de saliva diaria que contiene bicarbonato, esencial para neutralizar los ácidos del rumen. ¿Cuántos litros de saliva produce un bovino al día bajo tono vagal (parasimpático) normal?',
        options: ['20–40 L/día', '50–90 L/día', '100–180 L/día', '> 250 L/día'],
        answer: 2
    },
    {
        question: 'Cuando un bovino es transportado en camión por varias horas (estrés por el viaje), su saliva cambia de características. ¿Cómo se vuelve la saliva bajo la influencia del sistema nervioso simpático?',
        options: ['Abundante y acuosa', 'Escasa y viscosa', 'Rica en enzimas', 'Nula producción'],
        answer: 1
    },
    {
        question: 'En la reproducción animal, la erección del pene del toro o del padrillo es esencial para la monta natural. ¿Qué rama del sistema nervioso autónomo controla la erección mediante la liberación de óxido nítrico y acetilcolina?',
        options: ['Parasimpática', 'Simpática', 'Somática', 'Entérica'],
        answer: 0
    },
    {
        question: 'En la sala de ordeño, después de estimular los pezones de una vaca, una hormona viaja por la sangre y hace que las células alrededor de los alvéolos mamarios se contraigan, expulsando la leche. ¿Qué hormona es?',
        options: ['Prolactina', 'Estrógeno', 'Oxitocina', 'Cortisol'],
        answer: 2
    },
    {
        question: 'Cuando un animal sufre un cólico intestinal (dolor visceral), la señal de dolor viaja lentamente (~0.5 m/s) hacia el cerebro. ¿Por qué tipo de fibras nerviosas viaja esta señal de dolor lento y profundo?',
        options: ['Fibras A-alfa', 'Fibras A-delta', 'Fibras C', 'Fibras motoras'],
        answer: 2
    },
    {
        question: 'Cuando una vaca está echada, rumiando tranquilamente bajo la sombra (dominio parasimpático), el cuerpo dirige la mayor parte de la sangre hacia sus órganos digestivos. ¿Qué porcentaje aproximado del flujo sanguíneo llega al tracto gastrointestinal en ese estado?',
        options: ['5%', '10%', '30%', '70%'],
        answer: 2
    },
    {
        question: 'Cuando un lote de animales es sometido a estrés crónico (hacinamiento, malas instalaciones), se activa un eje hormonal que libera cortisol. Este cortisol causa pérdida de músculo, baja inmunidad y menor ganancia de peso. ¿Cuál es ese eje neuroendocrino?',
        options: ['Eje gonadal', 'Eje adrenal', 'Eje somatotrófico', 'Eje tiroideo'],
        answer: 1
    },
    {
        question: 'Una vaca gestante presenta contracciones uterinas prematuras y hay riesgo de aborto. El veterinario administra un fármaco que relaja el útero. ¿Qué tipo de receptor estimula este fármaco (tocolítico) para relajar el músculo liso uterino?',
        options: ['Receptor Beta-2', 'Receptor M3', 'Receptor Alfa-1', 'Receptor nicotínico'],
        answer: 0
    },

    // ═══════════════════════════════════════════════
    // ESTUDIOS DE CASO (26–50)
    // ═══════════════════════════════════════════════
    {
        question: 'ESTUDIO DE CASO: En una granja porcina, un lote de 20 cerdas gestantes (último tercio) es trasladado bruscamente a un corral nuevo con gritos, perros y golpes. A las pocas horas, 3 cerdas abortan. ¿Cuál fue la causa fisiológica primaria de los abortos?',
        options: ['Intoxicación gaseosa', 'Relajación parasimpática', 'Vasoconstricción simpática', 'Infección bacteriana'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En la sala de ordeño de una finca lechera, un perro desconocido entra ladrando agresivamente. Una vaca que estaba dando 15 litros deja de soltar leche a pesar de tener la ubre llena. ¿Qué mecanismo fisiológico explica esto?',
        options: ['Vasoconstricción simpática', 'Bloqueo del nervio vago', 'Espasmo por acetilcolina', 'Reabsorción de leche'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted revisa los datos del collar de actividad de un hato lechero y detecta que una vaca de alta producción solo rumia 3 horas al día (lo normal es 8 horas o más). ¿Qué interpretación técnica debe hacer como profesional?',
        options: ['Normal en alta producción', 'Alarma por estrés/enfermedad', 'Dominancia parasimpática ideal', 'Falla del sensor'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una planta de faenamiento de cerdos, se usa la picana eléctrica excesivamente antes del sacrificio. La carne resultante es pálida, blanda y suelta agua (defecto PSE). ¿Qué proceso fisiológico causó esto?',
        options: ['Parálisis vagal', 'Contracción intestinal', 'Glucogenólisis por catecolaminas', 'Falta de calcio celular'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En un galpón avícola con 5,000 pollos de engorde, un operario deja caer una lámina de zinc que produce un ruido metálico ensordecedor. Decenas de pollos mueren por síncope cardíaco en minutos. Si la FC basal de un pollo es ~275 lpm, ¿qué pasó con su corazón?',
        options: ['Bradicardia severa', 'Bradicardia parasimpática', 'Paro respiratorio aislado', 'Taquicardia y fibrilación'],
        answer: 3,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un ganadero tiene un toro reproductor que no logra montar a las vacas. Al investigar, usted descubre que los operarios lo golpean y le gritan para sacarlo del corral antes de cada monta. ¿Por qué el toro no consigue la erección?',
        options: ['Bloqueo simpático pélvico', 'Agotamiento espermático', 'Relajación por adrenalina', 'Falla de glándula adrenal'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted formuló una ración para novillos de engorde con mucho grano (almidón) pero poca fibra larga (pasto picado). A los pocos días, varios novillos presentan acidosis ruminal subaguda con pH ruminal < 5.5. ¿Qué mecanismo autonómico protector falló por la falta de fibra?',
        options: ['Reflejo palpebral', 'Reflejo neuroendocrino', 'Reflejo de rumia', 'Reflejo condicionado'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una finca ganadera de doble propósito, una vaca gestante de 7 meses comienza con contracciones uterinas prematuras. El veterinario aplica Clenbuterol intramuscular y las contracciones se detienen. ¿Cuál fue el mecanismo de acción del fármaco?',
        options: ['Bloqueo del nervio vago', 'Agonismo Beta-2 tocolítico', 'Aumento de FC fetal', 'Vasoconstricción uterina'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: El administrador de una finca lechera rediseña las instalaciones: elimina los ángulos rectos de la manga por curvas suaves, instala pisos antideslizantes, y prohíbe los gritos del personal. Después de 3 meses, la producción del hato sube un 12%. ¿Cuál es la explicación fisiológica?',
        options: ['Mayor ejercicio físico', 'Dominancia parasimpática crónica', 'Aumento de temperatura', 'Mayor velocidad al caminar'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En la costa ecuatoriana, un hato de vacas Holstein sufre estrés calórico severo al mediodía (ITH > 80). El consumo de materia seca cae un 40% y la producción baja. ¿Hacia dónde redirigió el flujo sanguíneo el sistema simpático?',
        options: ['Hacia rumen y ubre', 'Hacia piel y respiratorias', 'Hacia el cerebro', 'Hacia los huesos'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted recibe un lote de 50 terneros de compra en un feedlot y necesita evaluar rápidamente su nivel de estrés SIN tocarlos ni estresarlos más. ¿Qué herramienta tecnológica no invasiva usaría para detectar activación simpática?',
        options: ['Termografía infrarroja', 'Cortisol en sangre', 'Biopsia muscular', 'Ecografía abdominal'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En un establo con 60 vacas en ordeño, la incidencia de mastitis es del 25%. Al investigar, usted observa que el personal grita, el ordeño es apresurado (vaciado incompleto) y hay perros sueltos. Tras implementar un protocolo de manejo tranquilo, la mastitis baja al 15% en dos meses. ¿Qué cambió a nivel fisiológico?',
        options: ['Destrucción bacteriana ambiental', 'Vaciado completo (sin adrenalina)', 'Esterilización parasimpática', 'Inmunidad por noradrenalina'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En la rutina de pre-ordeño, el ordeñador lava la ubre de una vaca con agua tibia y la seca con una toalla. Antes de poner las pezoneras, la vaca ya está goteando leche. ¿Qué reflejo se activó?',
        options: ['Reflejo somático', 'Reflejo neuroendocrino', 'Condicionamiento negativo', 'Reflejo simpático'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una finca lechera tecnificada, las vacas esperan 15 minutos en un corral tranquilo con sombra y agua antes de entrar a la sala de ordeño. ¿Cuál es el objetivo fisiológico de esta espera?',
        options: ['Evacuación controlada', 'Degradación de adrenalina', 'Apagado vagal temporal', 'Reducción de temperatura'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Las vacas de un establo escuchan todos los días el sonido del motor de la ordeñadora a las 5:00 AM. Al oír el motor, antes de que nadie las toque, sus pezones ya comienzan a gotear leche. ¿Qué fenómeno neurofisiológico explica esta anticipación?',
        options: ['Condicionamiento clásico', 'Vasodilatación por calor', 'Hiperpolarización mamaria', 'Bloqueo muscarínico'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un lote de 30 novillos es transportado en camión por 8 horas hasta una feria ganadera. Al llegar, los animales tienen saliva espesa, no rumian, no comen y están inquietos. ¿Qué rama del SNA dominó durante el viaje y qué neurotransmisor posganglionar causó estos efectos?',
        options: ['Parasimpático / Acetilcolina', 'Somático / Glutamato', 'Simpático / Noradrenalina', 'Entérico / Serotonina'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un bovino está echado bajo un árbol a las 2 PM, masticando plácidamente su bolo ruminal. Su frecuencia cardíaca es de 65 latidos por minuto. ¿Qué porcentaje aproximado de su gasto cardíaco está irrigando el tracto gastrointestinal en ese momento?',
        options: ['5%', '10%', '30%', '70%'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un asesor le recomienda al dueño de un establo aplicar "farmacología barata": instalar pisos de goma antideslizantes, luces LED uniformes (sin sombras), ventiladores y música clásica suave. ¿Cuál es el objetivo de estas medidas sobre el Sistema Nervioso Autónomo?',
        options: ['Aumentar noradrenalina', 'Dominancia parasimpática óptima', 'Reducir horas de rumia', 'Fortalecimiento muscular somático'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En un ensayo experimental, se administra atropina (bloqueador de receptores muscarínicos M₃) a un cerdo de engorde a nivel gástrico. ¿Qué función productiva se afectará directamente?',
        options: ['Movimiento muscular esquelético', 'Secreción de ácido clorhídrico', 'Dilatación pupilar', 'Termorregulación por jadeo'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Una vaca lechera de alta producción (30 L/día) sufre un susto fuerte por un perro durante el ordeño de la tarde. La adrenalina reduce el flujo sanguíneo a la ubre en un 50% durante ese ordeño. ¿Cuántos litros de leche se pierden aproximadamente en ese solo evento?',
        options: ['2 litros', '5 litros', '15 litros', '30 litros'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted asiste un parto en una vaca de primer servicio. A medida que el ternero avanza por el canal de parto y presiona el cuello del útero, las contracciones se hacen más fuertes en vez de disminuir. ¿Qué mecanismo hormonal y autonómico está operando?',
        options: ['Inhibición simpática progresiva', 'Retroalimentación positiva (Ferguson)', 'Bloqueo vagal por dolor', 'Relajación Beta-2 uterina'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un operario de la sala de ordeño tiene la costumbre de golpear las tuberías metálicas cada mañana al entrar. Después de semanas, las vacas se ponen nerviosas solo con verlo llegar, incluso antes de que haga ruido. Si este condicionamiento negativo continúa, ¿qué impacto crónico tendrá en el hato?',
        options: ['Aumento de producción', 'Caída de producción y mastitis', 'Aumento de rumia', 'Defensa parasimpática crónica'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una hacienda ganadera, un caballo de trabajo no parpadea cuando usted acerca la mano rápidamente a su ojo (reflejo de amenaza). Este reflejo normalmente ocurre en menos de 100 milisegundos. ¿Qué tipo de conducción nerviosa probablemente está fallando?',
        options: ['Conducción por fibras C', 'Conducción en fibras A-alfa', 'Transmisión química lenta', 'Bloqueo de canales de K⁺'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted toma muestras de saliva de un lote de bovinos durante un manejo agresivo en la manga y los resultados muestran cortisol salival > 60 ng/mL (lo normal en reposo es 2-10 ng/mL). ¿Qué le indica este hallazgo sobre el estado fisiológico de los animales?',
        options: ['Relajación parasimpática', 'Estrés agudo intenso (HHA)', 'Niveles normales', 'Exceso de acetilcolina'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Después de una jornada de arreo en la finca, usted evalúa al perro de trabajo y nota que su frecuencia cardíaca está muy elevada y sus pupilas están dilatadas. En ese estado de activación simpática, ¿qué neurotransmisor está usando la fibra PREGANGLIONAR simpática para comunicarse con la neurona del ganglio?',
        options: ['Dopamina', 'Serotonina', 'Acetilcolina', 'GABA'],
        answer: 2,
        isCase: true
    }
];

// ─── Utilidades de aleatorización ───

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function shuffleOptions(q) {
    // Crea índices [0,1,2,3] y los baraja
    const indices = [0, 1, 2, 3];
    const shuffled = shuffleArray(indices);
    // Reordena las opciones y recalcula el índice de la respuesta correcta
    const newOptions = shuffled.map(function(i) { return q.options[i]; });
    const newAnswer = shuffled.indexOf(q.answer);
    return {
        question: q.question,
        options: newOptions,
        answer: newAnswer,
        isCase: q.isCase || false
    };
}

function pickRandomQuestions(n) {
    // Baraja las preguntas y luego baraja las opciones de cada una
    return shuffleArray(QUIZ_BANK).slice(0, n).map(shuffleOptions);
}
