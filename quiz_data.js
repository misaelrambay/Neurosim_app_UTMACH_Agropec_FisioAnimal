const QUIZ_BANK = [
    {
        question: '¿Qué parte funcional de la neurona es la encargada de recibir las señales de otras células?',
        options: ['Axón', 'Dendritas', 'Nódulo de Ranvier', 'Vaina de mielina'],
        answer: 1
    },
    {
        question: '¿Cuál es el valor del potencial de membrana en reposo en una neurona típica?',
        options: ['+30 mV', '-55 mV', '-70 mV', '-90 mV'],
        answer: 2
    },
    {
        question: 'Durante la fase de despolarización del potencial de acción, ¿qué evento iónico principal ocurre?',
        options: ['Salida masiva de Potasio (K+)', 'Entrada masiva de Sodio (Na+)', 'Entrada de Calcio (Ca2+)', 'Cierre de canales de Sodio'],
        answer: 1
    },
    {
        question: '¿Qué estructura permite que el impulso nervioso alcance velocidades de hasta 120 m/s mediante conducción saltatoria?',
        options: ['El cono axónico', 'La hendidura sináptica', 'La vaina de mielina', 'El soma'],
        answer: 2
    },
    {
        question: 'Si un estímulo sobre el animal es muy fuerte, ¿cómo codifica el sistema nervioso esta intensidad?',
        options: ['Aumentando la amplitud del potencial de acción a +100 mV', 'Aumentando la frecuencia de disparo de los potenciales de acción', 'Disminuyendo el umbral a -90 mV', 'Deteniendo la bomba Sodio/Potasio'],
        answer: 1
    },
    {
        question: '¿Qué ión es indispensable que ingrese al terminal presináptico para que las vesículas liberen su neurotransmisor?',
        options: ['Magnesio (Mg2+)', 'Sodio (Na+)', 'Potasio (K+)', 'Calcio (Ca2+)'],
        answer: 3
    },
    {
        question: '¿Cuál es el neurotransmisor principal liberado por las fibras del sistema nervioso parasimpático en los órganos efectores?',
        options: ['Noradrenalina', 'Adrenalina', 'Acetilcolina', 'Dopamina'],
        answer: 2
    },
    {
        question: '¿Qué sistema nervioso autónomo tiene su origen anatómico en el tronco encefálico y la región sacra?',
        options: ['Simpático', 'Parasimpático', 'Somático', 'Entérico'],
        answer: 1
    },
    {
        question: '¿Qué par craneal es considerado el "nervio de la producción" por inervar el 75% de las vísceras?',
        options: ['III (Oculomotor)', 'VII (Facial)', 'IX (Glosofaríngeo)', 'X (Vago)'],
        answer: 3
    },
    {
        question: '¿Qué estructura anatómica funciona como un "ganglio simpático modificado" liberando hormonas directamente a la sangre?',
        options: ['Plexo de Auerbach', 'Médula suprarrenal', 'Hipotálamo', 'Seno carotídeo'],
        answer: 1
    },
    {
        question: '¿Cuál es el receptor adrenérgico responsable de causar vasoconstricción severa en los vasos sanguíneos y esfínteres?',
        options: ['Alfa-1', 'Alfa-2', 'Beta-1', 'Beta-2'],
        answer: 0
    },
    {
        question: 'En estado de reposo (dominio parasimpático), ¿qué porcentaje del flujo sanguíneo se dirige hacia las vísceras?',
        options: ['10%', '15%', '30%', '50%'],
        answer: 2
    },
    {
        question: 'Durante una respuesta de "lucha o huida" (simpático), ¿qué porcentaje de la sangre se desvía a los músculos esqueléticos?',
        options: ['15%', '30%', '50%', '75%'],
        answer: 2
    },
    {
        question: '¿Qué plexo del Sistema Nervioso Entérico está encargado específicamente de controlar la secreción gastrointestinal?',
        options: ['Plexo mientérico de Auerbach', 'Plexo de Meissner', 'Ganglio estrellado', 'Tronco celíaco'],
        answer: 1
    },
    {
        question: 'Fisiológicamente, ¿cuántos litros de saliva rica en bicarbonato produce un bovino adulto al día bajo un tono vagal normal?',
        options: ['20 - 40 L/día', '50 - 90 L/día', '100 - 180 L/día', 'Más de 250 L/día'],
        answer: 2
    },
    {
        question: '¿Qué hormona es considerada la "antagonista funcional" de la adrenalina en la sala de ordeño?',
        options: ['Prolactina', 'Estrógeno', 'Oxitocina', 'Cortisol'],
        answer: 2
    },
    {
        question: '¿Qué efecto ejerce el sistema nervioso parasimpático sobre la frecuencia cardíaca?',
        options: ['Taquicardia', 'Bradicardia (reducción de FC)', 'Arritmia', 'Ningún efecto'],
        answer: 1
    },
    {
        question: 'En el sistema reproductivo del macho, ¿qué rama del SNA regula la erección mediante óxido nítrico y acetilcolina?',
        options: ['Parasimpática', 'Simpática', 'Somática', 'Entérica'],
        answer: 0
    },
    {
        question: '¿Cuál es el órgano que actúa como centro termorregulador al integrar la información térmica del cuerpo?',
        options: ['Bulbo raquídeo', 'Médula espinal', 'Hipotálamo', 'Cerebelo'],
        answer: 2
    },
    {
        question: '¿Qué nivel de cortisol salival se esperaría encontrar en un bovino bajo estrés agudo de manejo?',
        options: ['2 - 10 ng/mL', '15 - 20 ng/mL', 'Mayor a 60 ng/mL', 'Menor a 1 ng/mL'],
        answer: 2
    },
    {
        question: '¿Qué tipo de reflejo es el parpadeo tras tocar el párpado del animal?',
        options: ['Reflejo visceral', 'Reflejo neuroendocrino', 'Reflejo somático', 'Reflejo condicionado'],
        answer: 2
    },
    {
        question: '¿Cuál es el neurotransmisor liberado por las fibras preganglionares del sistema nervioso simpático?',
        options: ['Noradrenalina', 'Acetilcolina', 'Serotonina', 'Adrenalina'],
        answer: 1
    },
    {
        question: '¿Cómo es la secreción salival bajo la influencia del sistema nervioso simpático?',
        options: ['Abundante y acuosa', 'Escasa y viscosa', 'Rica en bicarbonato', 'Inexistente'],
        answer: 1
    },
    {
        question: '¿Qué tipo de fármacos actúan como agonistas de los receptores Beta-2 para relajar el útero (tocolíticos)?',
        options: ['Simpaticomiméticos', 'Parasimpaticolíticos', 'Vagolíticos', 'Colinérgicos'],
        answer: 0
    },
    {
        question: '¿Qué componente del arco reflejo se encarga de ejecutar la respuesta (ej. músculo o glándula)?',
        options: ['Receptor', 'Centro integrador', 'Nervio aferente', 'Efector'],
        answer: 3
    },
    {
        question: 'ESTUDIO DE CASO: Un lote de cerdas gestantes es trasladado bruscamente a un corral desconocido con gritos y golpes. A las pocas horas, 3 de las 20 cerdas abortan. Fisiológicamente, ¿cuál fue la causa primaria de los abortos?',
        options: ['Intoxicación por amoníaco en el nuevo corral.', 'Activación parasimpática que relajó el cuello uterino.', 'Vasoconstricción uterina por redistribución sanguínea mediada por catecolaminas del sistema simpático.', 'Infección bacteriana súbita.'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Durante el ordeño, un perro entra ladrando agresivamente a la sala. La vaca asustada deja de dar leche inmediatamente a pesar de tener la ubre llena. ¿Qué mecanismo neurofisiológico ocurrió?',
        options: ['La adrenalina contrajo los vasos mamarios (receptores Alfa-1), impidiendo que la oxitocina llegue a las células mioepiteliales.', 'El nervio vago paralizó los esfínteres del pezón.', 'La acetilcolina indujo taquicardia.', 'Se vació la cisterna de la glándula por reflejo somático.'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted revisa el software de los collares de actividad en un establo lechero y nota que una vaca de alta producción registra solo 3 horas de rumia al día. ¿Qué interpretación técnica debe realizar?',
        options: ['Es un parámetro normal de descanso.', 'Es un estado de alarma que indica enfermedad, estrés o activación simpática aguda.', 'La vaca está en un estado óptimo de dominancia parasimpática.', 'Hay un exceso de acetilcolina en su sistema.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En un matadero de cerdos se utiliza excesivamente la picana eléctrica antes del faenamiento. La carne resultante es Pálida, Blanda y Exudativa (PSE). ¿Qué evento autonómico causó esto?',
        options: ['Parálisis del nervio vago.', 'Liberación excesiva de acetilcolina en el músculo liso.', 'Una glucogenólisis muscular acelerada producto de la severa activación del sistema nervioso simpático.', 'Falta de calcio en las vesículas sinápticas.'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una granja avícola, un ruido metálico ensordecedor asusta a los pollos de engorde. Decenas mueren de un síncope. Sabiendo que la FC basal de un ave es de 275 lpm, ¿a qué valor letal llegó por el pico simpático?',
        options: ['150 lpm', '200 lpm', '300 lpm', '420 lpm'],
        answer: 3,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un ganadero se queja de baja fertilidad en su toro reproductor. Al observar el manejo, nota que los operarios golpean al toro antes de entrar a la monta. ¿Por qué el toro no puede lograr la erección?',
        options: ['El dolor activa el simpático, bloqueando los nervios pélvicos parasimpáticos y la liberación de óxido nítrico y acetilcolina.', 'El susto agota las reservas de espermatozoides.', 'La adrenalina causa relajación del conducto deferente.', 'La médula suprarrenal deja de funcionar.'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted formula una ración con exceso de almidón y déficit de fibra efectiva. A los pocos días, los novillos presentan acidosis ruminal y daño papilar. ¿Qué reflejo autonómico falló por falta de estímulo físico?',
        options: ['Reflejo palpebral', 'Reflejo neuroendocrino de eyección', 'Reflejo visceral de la rumia, inhibiendo la secreción de saliva rica en bicarbonato.', 'Reflejo condicionado de Pavlov.'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Una vaca presenta contracciones uterinas prematuras (riesgo de aborto). El veterinario administra Clenbuterol. Como ingeniero, usted sabe que la justificación farmacológica de esto es:',
        options: ['Bloquear el nervio vago.', 'Estimular los receptores Beta-2 para lograr la relajación del músculo liso uterino.', 'Aumentar la frecuencia cardíaca del feto.', 'Contraer los vasos sanguíneos esplácnicos.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En una finca, el administrador rediseña la manga de manejo eliminando ángulos de 90 grados por curvas cerradas y prohíbe los gritos. La producción de leche sube 12%. ¿Por qué ocurre esto a nivel del SNA?',
        options: ['Se elimina el dolor somático.', 'Al evitar el miedo se evita la activación simpática, permitiendo que el parasimpático mantenga el flujo sanguíneo mamario óptimo.', 'El diseño curvo aumenta la temperatura corporal.', 'Las vacas caminan más rápido.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un lote de vacas lecheras sufre estrés calórico extremo al medio día. El consumo de materia seca cae un 40%. ¿Hacia dónde redistribuyó el flujo sanguíneo el sistema simpático selectivo?',
        options: ['Hacia el lecho esplácnico y la ubre.', 'Hacia la piel para intentar disipar calor, restando sangre al tracto GI y la ubre.', 'Exclusivamente hacia el cerebro.', 'Hacia los huesos.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Como ingeniero agropecuario, desea evaluar el bienestar de un lote de terneros recién llegados sin tocarlos. ¿Qué herramienta usaría para detectar un alza simpática?',
        options: ['Termografía Infrarroja (IR) para detectar un aumento en la temperatura ocular.', 'Extracción de sangre para medir adrenalina.', 'Biopsia muscular.', 'Ecografía abdominal.'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un establo lechero presenta un 25% de mastitis clínica. Usted nota que el ordeño dura 7 minutos, hay gritos y vaciado incompleto. Al imponer un manejo tranquilo, la mastitis baja al 15%. Fisiológicamente, ¿qué ocurrió?',
        options: ['Los gritos mataban a la bacteria en el ambiente.', 'El manejo tranquilo evitó la vasoconstricción por adrenalina, logrando un vaciado completo de la ubre por efecto pleno de la oxitocina.', 'El parasimpático esterilizó la glándula mamaria.', 'La noradrenalina aumentó la inmunidad.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Observa que al lavar gentilmente la ubre de una vaca con agua tibia, esta comienza a gotear leche sola antes de colocar las pezoneras. ¿Qué arco reflejo se activó?',
        options: ['Arco reflejo somático espinal.', 'Reflejo neuroendocrino donde los receptores táctiles envían señales al hipotálamo para liberar oxitocina.', 'Reflejo condicionado negativo.', 'Reflejo simpático de huida.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Para optimizar una sala de ordeño, se establece una espera obligatoria de 15 minutos en un corral tranquilo antes de que las vacas ingresen. ¿Cuál es el propósito fisiológico de este tiempo?',
        options: ['Que la vaca defeque antes de entrar.', 'Dar tiempo para que la adrenalina residual del arreo desaparezca del torrente sanguíneo.', 'Que el nervio vago deje de funcionar temporalmente.', 'Disminuir la temperatura ocular.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Al escuchar el ruido del motor de la máquina de ordeño, las vacas tranquilas comienzan a llenar sus pezones de leche. ¿Qué fenómeno neurofisiológico explica esto?',
        options: ['Condicionamiento positivo (reflejo de Pavlov), asociando el sonido con una experiencia tranquila y anticipando la liberación de oxitocina.', 'Estrés calórico por el calor del motor.', 'Hiperpolarización neuronal.', 'Bloqueo de los receptores muscarínicos.'],
        answer: 0,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un bovino en reposo mastica plácidamente. Su frecuencia cardíaca es de 65 latidos por minuto. ¿Qué porcentaje del gasto cardíaco está irrigando su tracto gastrointestinal en ese momento?',
        options: ['5%', '10%', '30%', '50%'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Se le solicita aplicar "farmacología barata" en un establo. Usted decide poner pisos antideslizantes e iluminación uniforme. ¿Cuál es el objetivo final sobre el Sistema Nervioso Autónomo?',
        options: ['Aumentar la noradrenalina.', 'Fomentar el predominio parasimpático para garantizar anabolismo y producción.', 'Disminuir la rumia.', 'Activar el sistema somático constantemente.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: En un experimento, se aplica un fármaco que bloquea los receptores muscarínicos en el estómago de un cerdo. ¿Qué función productiva se verá directamente perjudicada?',
        options: ['La contracción del músculo esquelético de las patas.', 'La secreción de ácido clorhídrico (HCl) mediada por la acetilcolina, afectando la digestión proteica.', 'La dilatación de la pupila.', 'La sudoración en la piel.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Una vaca en plena lactancia (30 L/día) sufre estrés agudo por un perro. El flujo de sangre a su ubre se reduce un 50% durante ese ordeño. ¿Cuántos litros de leche se estiman perdidos económicamente en ese evento?',
        options: ['2 Litros', '5 Litros', '15 Litros', '30 Litros'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted atiende un parto distócico. Al revisar el canal de parto, nota que las contracciones uterinas aumentan su fuerza a medida que el feto presiona el cérvix. ¿Qué tipo de modulación autonómica y hormonal está ocurriendo?',
        options: ['Inhibición simpática por estrés.', 'Retroalimentación positiva (reflejo de Ferguson) mediada por la oxitocina y prostaglandinas.', 'Bloqueo del nervio vago.', 'Relajación por receptores Beta-2.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Al evaluar a un perro de trabajo en la granja tras una corrida exhaustiva, nota que su frecuencia cardíaca es muy alta y sus pupilas están dilatadas. ¿Qué neurotransmisor está inundando sus ganglios simpáticos antes de llegar al órgano diana?',
        options: ['Dopamina', 'Serotonina', 'Acetilcolina (en la fibra preganglionar)', 'GABA'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Se traslada ganado en camión por 8 horas. Al llegar, su saliva es espesa y no tienen motilidad ruminal. ¿Qué rama del SNA está activa y mediante qué neurotransmisor postganglionar?',
        options: ['Parasimpático / Acetilcolina', 'Somático / Glutamato', 'Simpático / Noradrenalina', 'Entérico / Serotonina'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Usted sospecha de un fallo neurológico en un caballo de la finca. Al acercar la mano rápidamente a su ojo, este no parpadea. Sabiendo que este reflejo somático debe ocurrir en menos de 100 milisegundos, ¿qué tipo de conducción axonal está fallando?',
        options: ['Conducción continua en fibras amielínicas.', 'Conducción saltatoria en fibras mielinizadas gruesas.', 'Sinapsis química lenta.', 'Cierre de canales de potasio.'],
        answer: 1,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Si un animal experimenta dolor visceral agudo (ej. un cólico), esta señal de dolor lento viaja a 0,5 m/s. ¿A través de qué tipo de fibras nerviosas aferentes viaja esta señal?',
        options: ['Fibras A-alfa (mielina gruesa)', 'Fibras A-delta (mielina fina)', 'Fibras C (amielínicas)', 'Nervio motor'],
        answer: 2,
        isCase: true
    },
    {
        question: 'ESTUDIO DE CASO: Un operario novato entra a la sala de ordeño golpeando tuberías. Las vacas asocian inmediatamente la sala con miedo. Si este "Condicionamiento Negativo" se mantiene, ¿qué efecto crónico tendrá en el hato?',
        options: ['Aumento del 8-12% en la producción.', 'Adrenalina anticipada que genera vasoconstricción mamaria crónica, caída de la producción y alto riesgo de mastitis.', 'Aumento de las horas de rumia diarias a más de 8 horas.', 'Dominancia parasimpática permanente.'],
        answer: 1,
        isCase: true
    }
];

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function pickRandomQuestions(n) {
    return shuffleArray(QUIZ_BANK).slice(0, n);
}
