const QUIZ_BANK = [
    // ═══════════════════════════════════════════════
    // PREGUNTAS CONCEPTUALES (1–25)
    // ═══════════════════════════════════════════════
    {
        question: 'Cuando una vaca escucha un ruido fuerte y se asusta, la señal viaja desde el oído hacia el cerebro a través de las neuronas. ¿Qué parte de la neurona recibe primero esa señal?',
        options: ['El axón, que la envía al músculo', 'Las dendritas, que captan la señal de otras células o receptores', 'Las vesículas sinápticas, que almacenan la señal', 'La vaina de mielina, que genera la señal eléctrica'],
        answer: 1
    },
    {
        question: 'Una neurona de un bovino en reposo tiene una diferencia de cargas eléctricas entre el interior y el exterior de su membrana. ¿Cuál es el valor aproximado de ese "potencial de reposo"?',
        options: ['+40 mV (el interior es positivo)', '-55 mV', '-70 mV (el interior es negativo respecto al exterior)', '-120 mV'],
        answer: 2
    },
    {
        question: 'Cuando un bovino pisa un objeto punzante y retira la pata inmediatamente, se genera un potencial de acción en las neuronas sensoriales. ¿Qué evento iónico principal ocurre durante la despolarización?',
        options: ['Salida masiva de potasio (K⁺) hacia afuera', 'Entrada rápida de sodio (Na⁺) al interior de la neurona', 'Ingreso de cloro (Cl⁻) al interior celular', 'Cierre de todos los canales iónicos simultáneamente'],
        answer: 1
    },
    {
        question: 'Un caballo retira la pata en milisegundos al pisar una espina. Esta velocidad de respuesta (hasta 120 m/s) se debe a que el impulso "salta" entre puntos del axón. ¿Qué estructura hace posible esta conducción saltatoria?',
        options: ['El soma (cuerpo celular) de la neurona', 'La hendidura sináptica entre neuronas', 'La vaina de mielina y sus nódulos de Ranvier', 'Las dendritas ramificadas'],
        answer: 2
    },
    {
        question: 'Si un bovino recibe un pinchazo suave, envía pocos impulsos nerviosos; si el pinchazo es fuerte, envía muchos más. ¿Cómo codifica el sistema nervioso del animal la intensidad de ese estímulo?',
        options: ['Aumentando el tamaño (amplitud) de cada potencial de acción', 'Aumentando la frecuencia (número por segundo) de los potenciales de acción', 'Cambiando el tipo de ión que entra a la neurona', 'Duplicando el grosor de la vaina de mielina'],
        answer: 1
    },
    {
        question: 'Para que una neurona libere su neurotransmisor (por ejemplo, acetilcolina para activar la digestión de un rumiante), las vesículas deben fusionarse con la membrana. ¿Qué ión es indispensable para que esto ocurra?',
        options: ['Magnesio (Mg²⁺)', 'Sodio (Na⁺)', 'Potasio (K⁺)', 'Calcio (Ca²⁺)'],
        answer: 3
    },
    {
        question: 'Cuando una vaca está tranquila rumiando, el nervio vago libera un neurotransmisor que activa su sistema digestivo, reduce la frecuencia cardíaca y estimula las secreciones. ¿Cuál es ese neurotransmisor del sistema parasimpático?',
        options: ['Noradrenalina', 'Adrenalina', 'Acetilcolina', 'Dopamina'],
        answer: 2
    },
    {
        question: 'El sistema nervioso parasimpático (el de "descansar y digerir") tiene su origen en dos zonas del cuerpo del animal. ¿Cuáles son?',
        options: ['Segmentos torácicos y lumbares de la médula espinal', 'El tronco encefálico (pares craneales, especialmente el vago) y la región sacra', 'Exclusivamente los ganglios de la cadena simpática', 'La médula de la glándula adrenal'],
        answer: 1
    },
    {
        question: 'Hay un nervio que recorre desde el cerebro hasta la mayoría de los órganos internos del animal (corazón, pulmones, rumen, intestinos). Inerva aproximadamente el 75% de las vísceras. ¿Cuál es?',
        options: ['Nervio oculomotor (III par craneal)', 'Nervio facial (VII par craneal)', 'Nervio glosofaríngeo (IX par craneal)', 'Nervio vago (X par craneal)'],
        answer: 3
    },
    {
        question: 'Cuando un animal se asusta, sus glándulas adrenales liberan adrenalina y noradrenalina directamente a la sangre. La parte de la adrenal que hace esto funciona como un "ganglio simpático modificado". ¿Cuál es?',
        options: ['La corteza adrenal (zona fascicular)', 'La médula adrenal (suprarrenal)', 'El hipotálamo', 'El ganglio celíaco'],
        answer: 1
    },
    {
        question: 'Cuando una vaca se asusta durante el ordeño, la adrenalina contrae los vasos sanguíneos de la ubre, impidiendo que la oxitocina llegue a las células de la leche. ¿Qué receptor causa esa vasoconstricción?',
        options: ['Receptor Alfa-1 (α₁) — contrae los vasos sanguíneos', 'Receptor Alfa-2 (α₂) — inhibe la liberación de más adrenalina', 'Receptor Beta-1 (β₁) — acelera el corazón', 'Receptor Beta-2 (β₂) — relaja los bronquios'],
        answer: 0
    },
    {
        question: 'Cuando un bovino está en pleno reposo digestivo, su frecuencia cardíaca baja a ~65 latidos por minuto. ¿Qué sistema nervioso y qué efecto produce esta bradicardia?',
        options: ['El simpático acelera el corazón (taquicardia)', 'El parasimpático reduce la frecuencia cardíaca (bradicardia) mediante acetilcolina en el nodo sinoauricular', 'El sistema somático controla el ritmo cardíaco voluntariamente', 'El sistema entérico regula directamente el corazón'],
        answer: 1
    },
    {
        question: 'Cuando un animal huye de un depredador, su corazón late más rápido y con más fuerza para bombear sangre a los músculos. ¿Qué receptor del corazón es responsable de esta taquicardia?',
        options: ['Alfa-1 (α₁) — causa vasoconstricción', 'Alfa-2 (α₂) — inhibe secreciones', 'Beta-1 (β₁) — aumenta la frecuencia y fuerza de contracción del corazón', 'Beta-2 (β₂) — relaja el útero y los bronquios'],
        answer: 2
    },
    {
        question: 'En el sistema nervioso autónomo, las neuronas están conectadas en cadena: la primera (preganglionar) hace sinapsis en un ganglio con la segunda (posganglionar). ¿Qué neurotransmisor usa la fibra preganglionar en AMBOS sistemas (simpático y parasimpático)?',
        options: ['Noradrenalina (solo el simpático la usa)', 'Acetilcolina (ambas fibras preganglionares son colinérgicas)', 'Serotonina', 'Adrenalina'],
        answer: 1
    },
    {
        question: 'El tracto digestivo de los animales tiene su propio "cerebro intestinal" llamado Sistema Nervioso Entérico. Dentro de este, ¿qué plexo controla específicamente la secreción de jugos gástricos e intestinales?',
        options: ['Plexo mientérico de Auerbach (controla el movimiento muscular)', 'Plexo submucoso de Meissner (controla las secreciones glandulares)', 'Ganglio estrellado', 'Plexo braquial'],
        answer: 1
    },
    {
        question: 'En los trópicos, las vacas lecheras pueden sufrir estrés calórico cuando la temperatura ambiental supera los 28°C. ¿Qué órgano del cerebro actúa como "termostato" del animal, integrando la información térmica y activando respuestas como jadeo o vasodilatación periférica?',
        options: ['El bulbo raquídeo', 'La médula espinal', 'El hipotálamo', 'El cerebelo'],
        answer: 2
    },
    {
        question: 'En el arco reflejo de un animal (por ejemplo, el reflejo de retirada al pisar un clavo), hay cinco componentes. ¿Cuál es el que ejecuta la respuesta final, como contraer el músculo para retirar la pata?',
        options: ['El receptor sensorial (nociceptor en la pata)', 'El centro integrador (médula espinal)', 'La neurona aferente (lleva la señal al sistema nervioso central)', 'El órgano efector (el músculo que contrae la pata o la glándula que secreta)'],
        answer: 3
    },
    {
        question: 'Un bovino adulto en reposo produce grandes cantidades de saliva diaria que contiene bicarbonato, esencial para neutralizar los ácidos del rumen. ¿Cuántos litros de saliva produce un bovino al día bajo tono vagal (parasimpático) normal?',
        options: ['20–40 L/día', '50–90 L/día', '100–180 L/día', 'Más de 250 L/día'],
        answer: 2
    },
    {
        question: 'Cuando un bovino es transportado en camión por varias horas (estrés por el viaje), su saliva cambia de características. ¿Cómo se vuelve la saliva bajo la influencia del sistema nervioso simpático?',
        options: ['Abundante y acuosa, rica en bicarbonato', 'Escasa y viscosa (espesa), con poca capacidad de neutralizar ácidos ruminales', 'Con alto contenido de enzimas digestivas', 'Se detiene completamente la producción de saliva'],
        answer: 1
    },
    {
        question: 'En la reproducción animal, la erección del pene del toro o del padrillo es esencial para la monta natural. ¿Qué rama del sistema nervioso autónomo controla la erección mediante la liberación de óxido nítrico y acetilcolina?',
        options: ['Parasimpática (nervios pélvicos) — relaja los vasos del tejido eréctil', 'Simpática — contrae los vasos para llenar el pene', 'Somática — el animal la controla voluntariamente', 'Entérica — porque se conecta con el plexo pélvico digestivo'],
        answer: 0
    },
    {
        question: 'En la sala de ordeño, después de estimular los pezones de una vaca, una hormona viaja por la sangre y hace que las células alrededor de los alvéolos mamarios se contraigan, expulsando la leche. ¿Qué hormona es?',
        options: ['Prolactina (estimula la producción, no la eyección)', 'Estrógeno (hormona reproductiva)', 'Oxitocina (liberada por la neurohipófisis, contrae las células mioepiteliales)', 'Cortisol (hormona del estrés)'],
        answer: 2
    },
    {
        question: 'Cuando un animal sufre un cólico intestinal (dolor visceral), la señal de dolor viaja lentamente (~0.5 m/s) hacia el cerebro. ¿Por qué tipo de fibras nerviosas viaja esta señal de dolor lento y profundo?',
        options: ['Fibras A-alfa (mielina gruesa, muy rápidas — llevan información de posición muscular)', 'Fibras A-delta (mielina fina — llevan dolor agudo y rápido)', 'Fibras C (sin mielina — llevan dolor visceral sordo, lento y difuso)', 'Fibras motoras somáticas (van del cerebro al músculo, no al revés)'],
        answer: 2
    },
    {
        question: 'Cuando una vaca está echada, rumiando tranquilamente bajo la sombra (dominio parasimpático), el cuerpo dirige la mayor parte de la sangre hacia sus órganos digestivos. ¿Qué porcentaje aproximado del flujo sanguíneo llega al tracto gastrointestinal en ese estado?',
        options: ['5%', '10%', '30% (el parasimpático prioriza la irrigación de vísceras digestivas)', '70%'],
        answer: 2
    },
    {
        question: 'Cuando un lote de animales es sometido a estrés crónico (hacinamiento, malas instalaciones), se activa un eje hormonal que libera cortisol. Este cortisol causa pérdida de músculo, baja inmunidad y menor ganancia de peso. ¿Cuál es ese eje neuroendocrino?',
        options: ['Eje hipotálamo-hipófisis-gonadal (controla la reproducción)', 'Eje hipotálamo-hipófisis-adrenal (HHA): el hipotálamo libera CRH → la hipófisis libera ACTH → la corteza adrenal libera cortisol', 'Eje somatotrófico (hormona de crecimiento → IGF-1)', 'Eje tiroideo (controla la tasa metabólica basal)'],
        answer: 1
    },
    {
        question: 'Una vaca gestante presenta contracciones uterinas prematuras y hay riesgo de aborto. El veterinario administra un fármaco que relaja el útero. ¿Qué tipo de receptor estimula este fármaco (tocolítico) para relajar el músculo liso uterino?',
        options: ['Receptor Beta-2 (β₂) del músculo liso uterino — ejemplo: Clenbuterol (simpaticomimético)', 'Receptor muscarínico M₃ del útero', 'Receptor Alfa-1 (α₁) de los vasos uterinos', 'Receptor nicotínico del ganglio autonómico'],
        answer: 0
    },

    // ═══════════════════════════════════════════════
    // ESTUDIOS DE CASO (26–50)
    // ═══════════════════════════════════════════════
    {
        question: 'ESTUDIO DE CASO: En una granja porcina, un lote de 20 cerdas gestantes (último tercio) es trasladado bruscamente a un corral nuevo con gritos, perros y golpes. A las pocas horas, 3 cerdas abortan. ¿Cuál fue la causa fisiológica primaria de los abortos?',
        options: ['Intoxicación por gases del nuevo corral', 'El parasimpático relajó el cuello uterino permitiendo la expulsión', 'La activación simpática liberó catecolaminas que causaron vasoconstricción uterina, reduciendo el flujo sanguíneo al útero y provocando sufrimiento fetal', 'Una infección bacteriana transmitida durante el traslado'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En la sala de ordeño de una finca lechera, un perro desconocido entra ladrando agresivamente. Una vaca que estaba dando 15 litros deja de soltar leche a pesar de tener la ubre llena. ¿Qué mecanismo fisiológico explica esto?',
        options: ['La adrenalina del susto activó los receptores α₁ de los vasos mamarios, contrayéndolos e impidiendo que la oxitocina circulante llegara a contraer las células mioepiteliales', 'El nervio vago bloqueó los esfínteres de los pezones', 'La acetilcolina causó un espasmo de las cisternas mamarias', 'La leche se reabsorbió instantáneamente hacia la sangre'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted revisa los datos del collar de actividad de un hato lechero y detecta que una vaca de alta producción solo rumia 3 horas al día (lo normal es 8 horas o más). ¿Qué interpretación técnica debe hacer como profesional?',
        options: ['Es normal en vacas de alta producción que comen rápido', 'Es una señal de alarma: indica posible enfermedad, estrés o activación simpática sostenida que inhibe la motilidad ruminal y la rumia', 'La vaca se encuentra en un estado ideal de dominancia parasimpática', 'El sensor del collar probablemente está descalibrado'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una planta de faenamiento de cerdos, se usa la picana eléctrica excesivamente antes del sacrificio. La carne resultante es pálida, blanda y suelta agua (defecto PSE). ¿Qué proceso fisiológico causó esto?',
        options: ['La parálisis del nervio vago detuvo el metabolismo muscular', 'La acetilcolina causó una contracción excesiva del músculo liso intestinal', 'La descarga masiva de catecolaminas (adrenalina) aceleró la glucogenólisis muscular, generando exceso de ácido láctico antes del sacrificio y desnaturalizando las proteínas de la carne', 'La falta de calcio en las terminales nerviosas impidió la contracción normal del músculo'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En un galpón avícola con 5,000 pollos de engorde, un operario deja caer una lámina de zinc que produce un ruido metálico ensordecedor. Decenas de pollos mueren por síncope cardíaco en minutos. Si la FC basal de un pollo es ~275 lpm, ¿qué pasó con su corazón?',
        options: ['La FC bajó a 150 lpm y el corazón se detuvo', 'El parasimpático causó una bradicardia extrema', 'El corazón mantuvo su ritmo normal pero se detuvo la respiración', 'La descarga simpática masiva elevó la FC a más de 420 lpm, causando fibrilación ventricular y muerte súbita'],
        answer: 3,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un ganadero tiene un toro reproductor que no logra montar a las vacas. Al investigar, usted descubre que los operarios lo golpean y le gritan para sacarlo del corral antes de cada monta. ¿Por qué el toro no consigue la erección?',
        options: ['El dolor y el miedo activan el sistema simpático, que bloquea a los nervios pélvicos parasimpáticos responsables de la erección (la erección requiere acetilcolina y óxido nítrico del parasimpático)', 'Los golpes agotan físicamente las reservas de espermatozoides', 'La adrenalina relaja excesivamente el músculo del pene', 'El estrés apaga completamente la glándula adrenal'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted formuló una ración para novillos de engorde con mucho grano (almidón) pero poca fibra larga (pasto picado). A los pocos días, varios novillos presentan acidosis ruminal subaguda con pH ruminal < 5.5. ¿Qué mecanismo autonómico protector falló por la falta de fibra?',
        options: ['El reflejo palpebral que protege los ojos del polvo', 'El reflejo neuroendocrino de bajada de leche', 'El reflejo de la rumia: sin fibra física, no se estimula la masticación prolongada ni la secreción de los 100-180 L/día de saliva alcalina (bicarbonato) que neutraliza los ácidos del rumen', 'El reflejo condicionado de ingesta por horario'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una finca ganadera de doble propósito, una vaca gestante de 7 meses comienza con contracciones uterinas prematuras. El veterinario aplica Clenbuterol intramuscular y las contracciones se detienen. ¿Cuál fue el mecanismo de acción del fármaco?',
        options: ['Bloqueó el nervio vago para reducir los impulsos al útero', 'Actuó como agonista de los receptores Beta-2 (β₂) del músculo liso uterino, causando relajación muscular (efecto tocolítico) y deteniendo las contracciones', 'Aumentó la frecuencia cardíaca del feto para mejorar su supervivencia', 'Contrajo los vasos del útero para reducir la irrigación y "calmar" al músculo'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: El administrador de una finca lechera rediseña las instalaciones: elimina los ángulos rectos de la manga por curvas suaves, instala pisos antideslizantes, y prohíbe los gritos del personal. Después de 3 meses, la producción del hato sube un 12%. ¿Cuál es la explicación fisiológica?',
        options: ['Las vacas hacen más ejercicio al caminar por las curvas', 'Al eliminar los estresores (miedo, dolor), se evita la activación simpática crónica. El parasimpático predomina, manteniendo buen flujo sanguíneo a la ubre y al tracto digestivo, optimizando la acción de la oxitocina y la digestión', 'El diseño curvo aumenta la temperatura del establo', 'Las vacas producen más porque caminan más rápido'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En la costa ecuatoriana, un hato de vacas Holstein sufre estrés calórico severo al mediodía (ITH > 80). El consumo de materia seca cae un 40% y la producción baja. ¿Hacia dónde redirigió el flujo sanguíneo el sistema simpático?',
        options: ['Hacia el rumen y la ubre para mantener la producción', 'Hacia la piel y las vías respiratorias para disipar calor (vasodilatación periférica), restando flujo sanguíneo al tracto digestivo y a la glándula mamaria', 'Exclusivamente hacia el cerebro para protegerlo', 'Hacia los huesos para liberar calcio y prevenir la fiebre de leche'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted recibe un lote de 50 terneros de compra en un feedlot y necesita evaluar rápidamente su nivel de estrés SIN tocarlos ni estresarlos más. ¿Qué herramienta tecnológica no invasiva usaría para detectar activación simpática?',
        options: ['Cámara de Termografía Infrarroja (IR) enfocada en el área periocular: un aumento de temperatura indica mayor flujo simpático', 'Extracción de sangre para medir adrenalina en plasma', 'Biopsia del músculo para determinar glucógeno residual', 'Ecografía abdominal para observar los movimientos del rumen'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En un establo con 60 vacas en ordeño, la incidencia de mastitis es del 25%. Al investigar, usted observa que el personal grita, el ordeño es apresurado (vaciado incompleto) y hay perros sueltos. Tras implementar un protocolo de manejo tranquilo, la mastitis baja al 15% en dos meses. ¿Qué cambió a nivel fisiológico?',
        options: ['Los gritos destruían las bacterias del ambiente', 'Sin estrés, la adrenalina no contrae los vasos mamarios → la oxitocina actúa plenamente → la ubre se vacía completamente → menos leche residual = menos medio de cultivo para bacterias = menos mastitis', 'El parasimpático produjo anticuerpos que esterilizaron la ubre', 'La noradrenalina mejora la inmunidad de las vacas contra la mastitis'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En la rutina de pre-ordeño, el ordeñador lava la ubre de una vaca con agua tibia y la seca con una toalla. Antes de poner las pezoneras, la vaca ya está goteando leche. ¿Qué reflejo se activó?',
        options: ['Un reflejo somático espinal de retirada', 'Un reflejo neuroendocrino: los receptores táctiles del pezón envían señales al hipotálamo → se libera oxitocina al torrente sanguíneo → la oxitocina contrae las células mioepiteliales de los alvéolos → sale la leche', 'Un reflejo condicionado negativo (miedo al ordeñador)', 'Un reflejo simpático que relajó los esfínteres del pezón'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una finca lechera tecnificada, las vacas esperan 15 minutos en un corral tranquilo con sombra y agua antes de entrar a la sala de ordeño. ¿Cuál es el objetivo fisiológico de esta espera?',
        options: ['Que las vacas defequen y orinen para no ensuciar la sala', 'Que la adrenalina generada durante el arreo se degrade del torrente sanguíneo (vida media ~2 minutos) y se restaure la dominancia del parasimpático, permitiendo la acción completa de la oxitocina durante el ordeño', 'Que el nervio vago se apague temporalmente antes de la estimulación', 'Reducir la temperatura corporal antes del ordeño'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Las vacas de un establo escuchan todos los días el sonido del motor de la ordeñadora a las 5:00 AM. Al oír el motor, antes de que nadie las toque, sus pezones ya comienzan a gotear leche. ¿Qué fenómeno neurofisiológico explica esta anticipación?',
        options: ['Condicionamiento clásico (Pavlov): el sonido del motor se convirtió en un estímulo condicionado que el cerebro asocia con el ordeño (experiencia positiva), anticipando la liberación de oxitocina', 'El calor del motor causa vasodilatación mamaria y la leche sale por presión', 'Una hiperpolarización neuronal masiva en la glándula mamaria', 'Un bloqueo de los receptores muscarínicos que relaja los esfínteres'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un lote de 30 novillos es transportado en camión por 8 horas hasta una feria ganadera. Al llegar, los animales tienen saliva espesa, no rumian, no comen y están inquietos. ¿Qué rama del SNA dominó durante el viaje y qué neurotransmisor posganglionar causó estos efectos?',
        options: ['Parasimpático / Acetilcolina (que normalmente activa la digestión)', 'Somático / Glutamato (control voluntario de los músculos)', 'Simpático / Noradrenalina (inhibió la motilidad gastrointestinal, redujo las secreciones serosas y desvió la sangre a los músculos)', 'Entérico / Serotonina (control local del intestino)'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un bovino está echado bajo un árbol a las 2 PM, masticando plácidamente su bolo ruminal. Su frecuencia cardíaca es de 65 latidos por minuto. ¿Qué porcentaje aproximado de su gasto cardíaco está irrigando el tracto gastrointestinal en ese momento?',
        options: ['5% — la mayoría va a los músculos', '10% — solo un poco llega al digestivo', '30% — en reposo parasimpático, el cuerpo prioriza la irrigación de las vísceras digestivas', '70% — casi toda la sangre va al digestivo'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un asesor le recomienda al dueño de un establo aplicar "farmacología barata": instalar pisos de goma antideslizantes, luces LED uniformes (sin sombras), ventiladores y música clásica suave. ¿Cuál es el objetivo de estas medidas sobre el Sistema Nervioso Autónomo?',
        options: ['Aumentar la noradrenalina para que las vacas estén más alertas y produzcan más', 'Crear un ambiente sin estresores que fomente la dominancia parasimpática crónica: digestión óptima, buena rumia, anabolismo (crecimiento/producción) y máximo rendimiento productivo', 'Disminuir las horas de rumia para que las vacas descansen más', 'Activar el sistema somático constantemente para fortalecer los músculos'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En un ensayo experimental, se administra atropina (bloqueador de receptores muscarínicos M₃) a un cerdo de engorde a nivel gástrico. ¿Qué función productiva se afectará directamente?',
        options: ['La capacidad de caminar y moverse (contracción de músculo esquelético)', 'La secreción de ácido clorhídrico (HCl) en el estómago, reduciendo la digestión de proteínas y afectando la conversión alimenticia', 'La dilatación de las pupilas del cerdo', 'La capacidad del cerdo de regular su temperatura por jadeo'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Una vaca lechera de alta producción (30 L/día) sufre un susto fuerte por un perro durante el ordeño de la tarde. La adrenalina reduce el flujo sanguíneo a la ubre en un 50% durante ese ordeño. ¿Cuántos litros de leche se pierden aproximadamente en ese solo evento?',
        options: ['2 litros (pérdida insignificante)', '5 litros (pérdida moderada)', '15 litros (reducción proporcional al flujo sanguíneo mamario: 50% de los 30 L diarios)', '30 litros (pierde toda la producción de ese día)'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted asiste un parto en una vaca de primer servicio. A medida que el ternero avanza por el canal de parto y presiona el cuello del útero, las contracciones se hacen más fuertes en vez de disminuir. ¿Qué mecanismo hormonal y autonómico está operando?',
        options: ['Inhibición simpática progresiva por agotamiento adrenal', 'Retroalimentación positiva (Reflejo de Ferguson): la presión del feto sobre el cérvix → señal al hipotálamo → más oxitocina → más contracción → más presión → más oxitocina, hasta la expulsión', 'Bloqueo total del nervio vago por el dolor', 'Relajación uterina mediada por receptores Beta-2 para facilitar el paso'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un operario de la sala de ordeño tiene la costumbre de golpear las tuberías metálicas cada mañana al entrar. Después de semanas, las vacas se ponen nerviosas solo con verlo llegar, incluso antes de que haga ruido. Si este condicionamiento negativo continúa, ¿qué impacto crónico tendrá en el hato?',
        options: ['Aumento del 8-12% en la producción por mayor estado de alerta', 'Liberación anticipada de adrenalina al ver al operario → vasoconstricción mamaria crónica → caída sostenida de la producción de leche → vaciado incompleto → mayor incidencia de mastitis por leche residual', 'Aumento de la rumia a más de 10 horas diarias por ansiedad', 'Dominancia parasimpática permanente como mecanismo de defensa'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una hacienda ganadera, un caballo de trabajo no parpadea cuando usted acerca la mano rápidamente a su ojo (reflejo de amenaza). Este reflejo normalmente ocurre en menos de 100 milisegundos. ¿Qué tipo de conducción nerviosa probablemente está fallando?',
        options: ['Conducción continua lenta por fibras sin mielina (tipo C)', 'Conducción saltatoria en fibras mielinizadas gruesas (tipo A-alfa), que es la que permite la velocidad necesaria para reflejos rápidos de protección', 'Transmisión química lenta por falta de serotonina', 'Bloqueo de canales de potasio en el músculo del párpado'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted toma muestras de saliva de un lote de bovinos durante un manejo agresivo en la manga y los resultados muestran cortisol salival > 60 ng/mL (lo normal en reposo es 2-10 ng/mL). ¿Qué le indica este hallazgo sobre el estado fisiológico de los animales?',
        options: ['Los animales están en un estado óptimo de relajación parasimpática', 'Hay una activación severa del eje Hipotálamo-Hipófisis-Adrenal (CRH → ACTH → Cortisol), indicando estrés agudo intenso con consecuencias catabólicas (pérdida de músculo), inmunosupresión y menor productividad', 'Los niveles son normales para bovinos en movimiento durante el manejo', 'Indica un exceso de acetilcolina en la sangre'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Después de una jornada de arreo en la finca, usted evalúa al perro de trabajo y nota que su frecuencia cardíaca está muy elevada y sus pupilas están dilatadas. En ese estado de activación simpática, ¿qué neurotransmisor está usando la fibra PREGANGLIONAR simpática para comunicarse con la neurona del ganglio?',
        options: ['Dopamina (neurotransmisor del sistema de recompensa cerebral)', 'Serotonina (regulador del ánimo y el sueño)', 'Acetilcolina (todas las fibras preganglionares, tanto simpáticas como parasimpáticas, son colinérgicas)', 'GABA (neurotransmisor inhibitorio del cerebro)'],
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
