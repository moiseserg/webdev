function addCard(item,hBefore, hAfter, index, bBefore ){
    item.innerHTML +=hBefore + "Pregunta " + (index+1).toString() +  hAfter + bBefore + hAfter;
}


var examen = document.getElementById("contenido");
examen.innerHTML = "";

var data=new Array();

data.push(
    {
        question:   "En un juego de matatena, las fichas <b class='rojo'>rojas</b> tenían un valor de <b class='rojo'>100 puntos</b>; "+
                    " las <b class='verde'>verdes de 10</b> y las <b class='azul'>azules de 1</b>. "+
                    "<br> ¿Cuántos puntos obtuvo Juan ?" +
                    "<table class='table table-hover'><tr><th>Rojas</th><th>Verdes</th><th>Azules</th></tr>"+
                    "<tr><td><b class='rojo'>O O O</b> </td><td><b class='verde'>O O</b></td><td><b class='azul'>O O O O</b></td></tr>",
        options: [
            "234",
            "324",
            "432"
        ],
        answer: 1
    },
    {
        question:   "En un juego de matatena, las fichas <b class='rojo'>rojas</b> tenían un valor de <b class='rojo'>100 puntos</b>; "+
                    " las <b class='verde'>verdes de 10</b> y las <b class='azul'>azules de 1</b>. "+
                    "<br> ¿Cuántos puntos obtuvo Laura ?" +
                    "<table class='table table-hover'><tr><th>Rojas</th><th>Verdes</th><th>Azules</th></tr>"+
                    "<tr><td><b class='rojo'>O O  &nbsp; &nbsp; O O</b> </td><td><b class='verde'>O O O  &nbsp; &nbsp; O O O  &nbsp; &nbsp; O </b></td><td><b class='azul'>O O O &nbsp; &nbsp; O O O  &nbsp; &nbsp; O O O  &nbsp; &nbsp; O O O </b></td></tr>",
        options: [
            "429",
            "479",
            "482"
        ],
        answer: 2
    },
    {
        question:   "En un juego de matatena, las fichas <b class='rojo'>rojas</b> tenían un valor de <b class='rojo'>100 puntos</b>; "+
                    " las <b class='verde'>verdes de 10</b> y las <b class='azul'>azules de 1</b>. "+
                    "<br> ¿Cuántos puntos obtuvo Marcos ?" +
                    "<table class='table table-hover'><tr><th>Rojas</th><th>Verdes</th><th>Azules</th></tr>"+
                    "<tr><td><b class='rojo'>O O</b> </td><td><b class='verde'>O O O O &nbsp; &nbsp; O O O O &nbsp; &nbsp; O O O  </b></td><td><b class='azul'>O O O &nbsp; &nbsp; O O O  </b></td></tr>",
        options: [
            "316",
            "416",
            "206"
        ],
        answer: 0
    },
    {
        question:   "En un juego de matatena, las fichas <b class='rojo'>rojas</b> tenían un valor de <b class='rojo'>100 puntos</b>; "+
                    " las <b class='verde'>verdes de 10</b> y las <b class='azul'>azules de 1</b>. "+
                    "<br> ¿Quién ganó el juego?" +
                    "<table class='table table-hover'><tr><th>Jugador</th><th>Rojas</th><th>Verdes</th><th>Azules</th></tr>"+
                    "<tr><td>Lalo</td><td><b class='rojo'>X X X X X</b> </td><td><b class='verde'>X X X</b></td><td><b class='azul'>X X X X X X </b></td></tr>"+
                    "<tr><td>Quique</td><td><b class='rojo'>X X X X</b> </td><td><b class='verde'>X X X</b></td><td><b class='azul'>X X X X X </b></td></tr>"+
                    "<tr><td>Poncho</td><td><b class='rojo'> X X X</b> </td><td><b class='verde'>X X X X  X X  X X </b></td><td><b class='azul'>X X X X X X X X</b></td></tr>",
        options: [
            "Lalo",
            "Quique",
            "Poncho"
        ],
        answer: 0
    },
    {
        question:   "En un juego de matatena, las fichas <b class='rojo'>rojas</b> tenían un valor de <b class='rojo'>100 puntos</b>; "+
                    " las <b class='verde'>verdes de 10</b> y las <b class='azul'>azules de 1</b>. "+
                    "<br> ¿Cuántos puntos hizo el jugador que quedó en último lugar?" +
                    "<table class='table table-hover'><tr><th>Jugador</th><th>Rojas</th><th>Verdes</th><th>Azules</th></tr>"+
                    "<tr><td>Lalo</td><td><b class='rojo'>X X X X X</b> </td><td><b class='verde'>X X X</b></td><td><b class='azul'>X X X X X X </b></td></tr>"+
                    "<tr><td>Quique</td><td><b class='rojo'>X X X X</b> </td><td><b class='verde'>X X X</b></td><td><b class='azul'>X X X X X </b></td></tr>"+
                    "<tr><td>Poncho</td><td><b class='rojo'> X X X</b> </td><td><b class='verde'>X X X X  X X  X X </b></td><td><b class='azul'>X X X X X X X X</b></td></tr>",
        options: [
            "536",
            "386",
            "435"
        ],
        answer: 1
    },
    {
        question:   "Al puesto de doña Tere llegó un cargamento de naranjas. Cada costal tiene 100 piezas, cada caja 10, "+
                    " cada bolsa 5 y algunas frutas llegaron sueltas. ¿Cuántas naranjas hay en total? <br><br>"+
                    "<img src='imgs/naranjas.png' width='500'>",
        options: [
            "329",
            "324",
            "328",
            "330"
        ],
        answer: 0
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
                //habilitar si se desea mostrar desde el inicio 
                //comentar para que estén ocultas
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

