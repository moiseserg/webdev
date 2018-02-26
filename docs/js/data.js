function addCard(item,hBefore, hAfter, index, bBefore ){
    item.innerHTML +=hBefore + "Pregunta " + (index+1).toString() +  hAfter + bBefore + hAfter;
}


var examen = document.getElementById("contenido");
examen.innerHTML = "";

var data=new Array();

data.push(
    {
        question:  "Es lo que se comnemora el día 24 de febrero <br> ",
        options: [
            "Día del bombero",
            "Día de la bandera",
            "Día de la constitución de los Estados Unidos Mexicanos"
        ],
        answer: 1
    },
    {
        question:  "La conmemoración de la promulgación de nuestra constitución política se celebra el día <p align='center'><img src='./imgs/constitucion.jpeg' width='250'></p>",
        options: [
            "16 de septiembre",
            "1 de mayo",
            "5 de febrero",
            "24 de febrero"
        ],
        answer: 2
    },

    {
        question:  "Es el día en que se celebra  al ejercito y las fuerzas armadas de nuestro país.  Institución conformada por las fuerzas militares terrestres y aéreas, encargada de salvaguardar la soberanía del Estado mexicano y la paz nacional. <p align='center'><img src='./imgs/ejercitoMexicano.png' width='250'></p>",
        options: [
            "16 de septiembre",
            "1 de mayo",
            "19 de febrero",
            "24 de febrero"
        ],
        answer: 2
    },


    {
        question:  "Es una estrofa con cuatro versos que riman y casi siempre se cantan",
        options: [
            "Copla",
            "Poesía",
            "Soneto",
            "Sinfonía"
        ],
        answer: 0
    },

    {
        question:  "En la siguiente copla: <blockquote class='sombra'><p>Huitzi Huitzi araña <br> subió a su <b>telaraña</b> <br>vino la lluvia<br> y se la llevó</p></blockquote> la palabra que está resaltada rima con:",
        options: [
            "araña",
            "lluvia",
            "subió ",
            "Huitzi"
        ],
        answer: 0
    },

    {
        question:  "En la siguiente copla: <blockquote class='sombra'><p>Huitzi Huitzi araña <br> subió a su telaraña <br>vino la lluvia<br> y se la <b>llevó</b></p></blockquote> la palabra que está resaltada rima con:",
        options: [
            "araña",
            "lluvia",
            "subió ",
            "Huitzi"
        ],
        answer: 2
    },

    {
        question:  "La siguiente palabra rima con <b>coche</b>",
        options: [
            "veinte",
            "noche",
            "versos ",
            "araña"
        ],
        answer: 1
    },

    {
        question:  "La siguiente palabra rima con <b>dorado</b>",
        options: [
            "morado",
            "noche",
            "versos ",
            "goma"
        ],
        answer: 0
    },

    {
        question:  "La siguiente palabra rima con <b>planta</b>",
        options: [
            "morado",
            "noche",
            "rata",
            "goma"
        ],
        answer: 2
    },

    {
        question:  "Cambiando una letra en la palabra <b>pesa</b> puedes formar la palabra.<p align='center'> <img src='imgs/mesa.jpeg'> <br> </p>",
        options: [
            "mesa",
            "teza",
            "meza",
            "goma"
        ],
        answer: 0
    },

    {
        question:  "Cambiando una letra en la palabra <b>loma</b> puedes formar la palabra.<p align='center'> <img src='imgs/goma.jpeg'> <br> </p>",
        options: [
            "mesa",
            "joma",
            "luna",
            "goma"
        ],
        answer: 3
    },

    {
        question:  "Cambiando una letra en la palabra <b>pato</b> puedes formar la  palabra.<p align='center'> <img src='imgs/gato.jpeg'> <br> </p>",
        options: [
            "marro",
            "gato",
            "jato",
            "marte"
        ],
        answer: 1   
    },

    {
        question:  "Es el sujeto en la siguiente expresión:<p align='center' class='sombra'> El niño tira la basura en el bote correcto.</p <p align='center'> <img src='imgs/nino.png'> <br> </p>",
        options: [
            "la basura",
            "El niño",
            "correcto",
            "bote"
        ],
        answer: 1   
    },

    {
        question:  "Es el sujeto en la siguiente expresión:<p align='center' class='sombra'> Mientras la mamá prepara la comida, el papá juega con sus hijos.</p <p align='center'> <img src='imgs/familia.jpeg'> <br> </p>",
        options: [
            "sus hijos",
            "El papá",
            "Mientras la mamá",
            "juega"
        ],
        answer: 1   
    },

    {
        question:  "Es un juego de palabras difíciles de decir. Sirve como ejercicio para mejorar la pronunciación",
        options: [
            "Rima",
            "Copla",
            "Trabalenguas",
            "Verso"
        ],
        answer: 2  
    },

    {
        question:  "Selecciona la palabra escrita correctamente: ",
        options: [
            "Hormiguita",
            "Merengüe",
            "Sinverguenza"
        ],
        answer: 0
    },

    {
        question:  "Selecciona la palabra escrita correctamente: ",
        options: [
            "Hormigüita",
            "Sinverguenza",
            "Merengue"
        ],
        answer: 2
    },

    {
        question:  "Selecciona la palabra escrita correctamente: ",
        options: [
            "Hormigüita",
            "Paraguas",
            "Merengüe"
        ],
        answer: 1
    },

    {
        question:  "Selecciona la palabra escrita incorrectamente: ",
        options: [
            "Güiar",
            "Jaguar",
            "Cigüeña"
        ],
        answer: 0
    },

    {
        question:  "Es un mensaje qie se dice en voz alta para dar a conocer un asunto de interés o para anunciar algún producto. ",
        options: [
            "Mensaje",
            "Pregón",
            "Rima"
        ],
        answer: 1
    },

    {
        question:  "Es un  ejemplo de un fragmento de un  <i>Pregón</i> ",
        options: [
            "Había una vez un hada ...",
            "Tres tristes tigres <br> tragaban trigo en un trigal ... ",
            "Los faroles de las calles<br>yo me encargo de encender ..."
        ],
        answer: 2
    },

    {
        question:  "Está formada por sílabas unidas",
        options: [
            "Expresión",
            "Palabra",
            "Oración"
        ],
        answer: 1
    },

    {
        question:  "Está formada por palabras, separadas por espacios, sirve para expresar una idea completa. ",
        options: [
            "Expresión",
            "Palabra",
            "Oración"
        ],
        answer: 2
    },

    {
        question:  "La palabra <b>mañana</b> tiene:",
        options: [
            "2 sílabas",
            "3 sílabas",
            "4 sílabas"
        ],
        answer: 1
    },

    {
        question:  "La palabra <b>vivir</b> tiene:",
        options: [
            "2 sílabas",
            "3 sílabas",
            "4 sílabas"
        ],
        answer: 0
    },

    {
        question:  "La palabra <b>Mercurio</b> tiene:",
        options: [
            "2 sílabas",
            "3 sílabas",
            "4 sílabas"
        ],
        answer: 1
    },

    {
        question:  "La oración <b>Mi bebé tiene hambre</b> tiene:",
        options: [
            "2 palabras",
            "3 palabras",
            "4 palabras"
        ],
        answer: 2
    },

    {
        question:  "Las frases que tienen un significado similar se llaman <b>frases sinónimas</b>, indica la frase es sinónima de: <p align='center'  class='sombra'>El doctor me curó rápidamente</p>",
        options: [
            "El médico me alivió de manera  veloz.",
            "Los niños juegan en el parque",
            "El medico no me curó en absoluto."
        ],
        answer: 0
    },

    {
        question:  "Las frases que tienen un significado similar se llaman <b>frases sinónimas</b>, indica la  frase  sinónima de: <p align='center' class='sombra'>A la señora le dieron varios obsequios.</p>",
        options: [
            "El médico me alivió de manera  veloz.",
            "La mujer recibió muchos regalos",
            "El medico no me curó rapidamente."
        ],
        answer: 1
    },

    {
        question:  "Las frases que tienen un significado contrario  se llaman <b>frases antónimas</b>, indica la frase es antónima de: <p align='center'  class='sombra'>Ayer hice ejercicio por la noche.</p>",
        options: [
            "Ayer fui al doctor.",
            "Ayer descansé por la noche.",
            "Mi amigo descansó por la noche."
        ],
        answer: 1
    },

    {
        question:  "Indica la palabra que es sinónima de <b>Mejorar</b>",
        options: [
            "Cantar",
            "Perfeccionar",
            "Descansar"
        ],
        answer: 1
    },

    {
        question:  "Indica la palabra que es sinónima de <b>Rápido</b>",
        options: [
            "Veloz",
            "Lento",
            "Cansado"
        ],
        answer: 0
    },

    {
        question:  "Indica la palabra que es antónima de <b>Rápido</b>",
        options: [
            "Veloz",
            "Lento",
            "Cansado"
        ],
        answer: 1
    },

    {
        question:  "Indica la palabra que es antónima de <b>Bonito</b>",
        options: [
            "Veloz",
            "Lento",
            "Feo"
        ],
        answer: 2
    },

    {
        question:  "Es un texto que una persona escribe a otra. Debe tener lugar y fecha, destinatario, saludo, mensaje, despedida y emisor.",
        options: [
            "Canción",
            "Trabalenguas",
            "Carta"
        ],
        answer: 2
    },

    {
        question:  "En la siguiente carta, <blockquote class='sombra'> <p align='right'>Guadalajara a 14 de agosto de 2015</p><br><br><p align='left'>Sra. Carmen Cárdenas Cataño<br>Encargada del Centro de vacunación:<br>Presente:<br></p><br><br><p align='justify'>Sra. Directora, me dirijo a usted en calidad de representante legal del Rogelio Martínez quien es el niño titular de la cartilla de vacunación 23456, el cual no recibirá su vacuna correspondiente a esta campaña de vacunación debido a que se encuentra en tratamiento médico de otra índole.</p><br><br><p align='justify'>Le ruego su comprensión y fije en su momento una fecha adecuada para cumplir con este trámite.</p><br><br><p align='justify'>Reiterando mis respetos,</p><br><br><p align='center'>María de la Luz Martínez Núñez</p></blockquote> El emisor es:",
        options: [
            "María de la Luz Martínez Núñez",
            "Reiterando mis respetos",
            "Sra. Carmen Cárdenas Cataño"
        ],
        answer: 0
    },

    {
        question:  "En la siguiente carta, <blockquote class='sombra'> <p align='right'>Guadalajara a 14 de agosto de 2015</p><br><br><p align='left'>Sra. Carmen Cárdenas Cataño<br>Encargada del Centro de vacunación:<br>Presente:<br></p><br><br><p align='justify'>Sra. Directora, me dirijo a usted en calidad de representante legal del Rogelio Martínez quien es el niño titular de la cartilla de vacunación 23456, el cual no recibirá su vacuna correspondiente a esta campaña de vacunación debido a que se encuentra en tratamiento médico de otra índole.</p><br><br><p align='justify'>Le ruego su comprensión y fije en su momento una fecha adecuada para cumplir con este trámite.</p><br><br><p align='justify'>Reiterando mis respetos,</p><br><br><p align='center'>María de la Luz Martínez Núñez</p></blockquote> El destinatario es:",
        options: [
            "María de la Luz Martínez Núñez",
            "Reiterando mis respetos",
            "Sra. Carmen Cárdenas Cataño"
        ],
        answer: 2
    },

    {
        question:  "En la siguiente carta, <blockquote class='sombra'> <p align='right'>Guadalajara a 14 de agosto de 2015</p><br><br><p align='left'>Sra. Carmen Cárdenas Cataño<br>Encargada del Centro de vacunación:<br>Presente:<br></p><br><br><p align='justify'>Sra. Directora, me dirijo a usted en calidad de representante legal del Rogelio Martínez quien es el niño titular de la cartilla de vacunación 23456, el cual no recibirá su vacuna correspondiente a esta campaña de vacunación debido a que se encuentra en tratamiento médico de otra índole.</p><br><br><p align='justify'>Le ruego su comprensión y fije en su momento una fecha adecuada para cumplir con este trámite.</p><br><br><p align='justify'>Reiterando mis respetos,</p><br><br><p align='center'>María de la Luz Martínez Núñez</p></blockquote> La despedida es:",
        options: [
            "María de la Luz Martínez Núñez",
            "Reiterando mis respetos",
            "Sra. Carmen Cárdenas Cataño"
        ],
        answer: 1
    },

    {
        question:  "En la siguiente carta, <blockquote class='sombra'> <p align='right'>Guadalajara a 14 de agosto de 2015</p><br><br><p align='left'>Sra. Carmen Cárdenas Cataño<br>Encargada del Centro de vacunación:<br>Presente:<br></p><br><br><p align='justify'>Sra. Directora, me dirijo a usted en calidad de representante legal del Rogelio Martínez quien es el niño titular de la cartilla de vacunación 23456, el cual no recibirá su vacuna correspondiente a esta campaña de vacunación debido a que se encuentra en tratamiento médico de otra índole.</p><br><br><p align='justify'>Le ruego su comprensión y fije en su momento una fecha adecuada para cumplir con este trámite.</p><br><br><p align='justify'>Reiterando mis respetos,</p><br><br><p align='center'>María de la Luz Martínez Núñez</p></blockquote> El mensaje es:",
        options: [
            "Sra. Directora, me dirijo a usted en calidad de ",
            "Reiterando mis respetos",
            "Guadalajara a 14 de agosto de 2015"
        ],
        answer: 0
    },

    {
        question:  "En la siguiente carta, <blockquote class='sombra'> <p align='right'>Guadalajara a 14 de agosto de 2015</p><br><br><p align='left'>Sra. Carmen Cárdenas Cataño<br>Encargada del Centro de vacunación:<br>Presente:<br></p><br><br><p align='justify'>Sra. Directora, me dirijo a usted en calidad de representante legal del Rogelio Martínez quien es el niño titular de la cartilla de vacunación 23456, el cual no recibirá su vacuna correspondiente a esta campaña de vacunación debido a que se encuentra en tratamiento médico de otra índole.</p><br><br><p align='justify'>Le ruego su comprensión y fije en su momento una fecha adecuada para cumplir con este trámite.</p><br><br><p align='justify'>Reiterando mis respetos,</p><br><br><p align='center'>María de la Luz Martínez Núñez</p></blockquote> Lugar y fecha es:",
        options: [
            "Sra. Directora, me dirijo a usted en calidad de ",
            "Reiterando mis respetos",
            "Guadalajara a 14 de agosto de 2015"
        ],
        answer: 2
    }

);


var scrollBar = document.getElementById('progreso');


/*Barra animada en medio arco*/
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

        var bar = new ProgressBar.SemiCircle(results, {
            strokeWidth: 6,
            color: '#F00',
            trailColor: '#eee',
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            svgStyle: null,
            text: {
                value: '',
                alignToBottom: false
            },
            from: {color: '#F00'},
            to: {color: '#11ff11'},
            // Set default step function for all animate calls
            step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
            bar.setText('');
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
        }
        });
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '2rem';
/*Barra animada en medio arco*/


var answers = new Map();

function showScore() {

    var totalR=0;

    console.log("tamaño de answers " +answers.size);
    data.forEach(
        function (value, index) {
            //respuesta usando el indice de la pregunta.

            var an = answers.get((index).toString());
            //console.log(an);

            if(an != undefined){

                an  = parseInt(an.substr( an.search('i')+1));

                if(value.answer == an)
                    totalR++;



            }
        }
    );




    bar.animate(totalR /  data.length);  // Number from 0.0 to 1.0

}


function showResults(){

/*
    answers.forEach(function (value, key) {
        console.log(key + " -> " + value);
        console.log(key + " -> " + value.substr( value.search('i')+1 ));

    });
*/
    scrollBar.style.width= (answers.size*100/data.length).toString()+"%";

}

data.forEach(
    function (value, index) {
        var card = document.createElement("div");
        card.classList.add("card");
            var cardHeader= document.createElement("div");
            cardHeader.classList.add("card-header");
            cardHeader.setAttribute("role", "tab");
            cardHeader.setAttribute("id", "h"+index.toString());

                var link= document.createElement("a");
                link.setAttribute("data-toggle", "collapse");
                link.setAttribute("href","#c"+index.toString() );
                link.setAttribute("aria-expanded","true" );
                link.setAttribute("aria-controls","c"+index.toString());
                link.innerHTML = "Pregunta " + (index+1).toString();
                cardHeader.appendChild(link);

                //console.log(link);
            card.appendChild(cardHeader);


            var cardRef=document.createElement("div");
                cardRef.classList.add("collapse");
                //cardRef.classList.add("show");
                cardRef.setAttribute("id", "c"+index.toString() );

                cardRef.setAttribute("role", "tabpanel");
                cardRef.setAttribute("aria-labelledby", "h"+index.toString());
                cardRef.setAttribute("data-parent","#accordion");


                var cardBody=document.createElement("div");
                    cardBody.classList.add("card-body");

                    var text = document.createElement("p");
                    text.innerHTML= value.question;

                    cardBody.appendChild(text);

                    var questions = document.createElement("div");
                        questions.classList.add("btn-group");
                        questions.setAttribute("data-toggle", "buttons");

                        var uList = document.createElement("ul");

                        //Itera sobre todos los elementos de las posibles respuestas
                        value.options.forEach(
                            function (q, indx) {
                                var li = document.createElement("li");
                                li.style.listStyle="none";

                                var label= document.createElement("label");
                                label.classList.add("btn");
                                label.classList.add("btn-outline-secondary");
                                label.setAttribute("id",  "q"+index+"i"+indx);
                                label.setAttribute("numQ", index.toString());

                                    var button = document.createElement("input");
                                    button.type="radio";
                                    //button.setAttribute("name", "options");
                                    //button.setAttribute("id", "i"+index+"i"+indx);
                                    button.setAttribute("name", "i"+index);


                                label.appendChild(button);

                                label.innerHTML = label.innerHTML + " "+  q;


                                label.addEventListener("click", function () {
//                                    console.log(this);
//                                    console.log(this.classList);
//                                    console.log(this.id);

                                    answers.set(this.getAttribute("numQ"), this.id );
                                    showResults();
                                });

                                //console.log(label);

                                li.appendChild(label);
                                uList.appendChild(li);
                            }
                        );


                        questions.appendChild(uList);
                    cardBody.appendChild(questions);


                //console.log(cardBody);

                cardRef.appendChild(cardBody);

            card.appendChild(cardRef);
        examen.appendChild(card);


        //console.log(examen );
    }
);

//console.log(examen.innerHTML);

