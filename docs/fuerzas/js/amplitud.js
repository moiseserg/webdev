var kte = 400;
var lte = 0.95;
var mte = 0.0121;


function fuerza10(){

    for(var i=0; i<10; i++)
        fuerza();
    s.refresh();
}

function fuerza(){

    s.graph.nodes()
        .forEach(function(node){

            console.log("current node " + node.id);

            node.forceX=0;
            node.forceY=0;
            node.velocityX=0;
            node.velocityY=0;

            //calculate force of others versus node

            s.graph.nodes().forEach(
                function(otherNode){
                    if(otherNode.id != node.id){
                        //console.log(otherNode.id + " vs " +node.id);
                        var r = (node.x-otherNode.x)*(node.x-otherNode.x)+(node.y-otherNode.y)*(node.y-otherNode.y);
                        node.forceX += kte*(node.x-otherNode.x)/r;
                        node.forceY += kte*(node.y-otherNode.y)/r;
                    }
                }
            );

            s.graph.edges().forEach(
                function (edge) {
                    //console.log(edge.target +  " <-> "+ edge.source);

                    //arcos donde node es el origen (vecinos de node)
                    if(edge.source == node.id){

                        var tt = s.graph.nodes().find(
                                    function(t){
                                            return  t.id  == edge.target;
                                        }
                                );

                        //console.log("tt " + tt.id + " " +  tt.x + " , " + tt.y );

                        node.forceX += mte * (tt.x - node.x );
                        node.forceY += mte * (tt.y - node.y );
                    }

                    node.velocityX = (node.velocityX+node.forceX)*lte;
                    node.velocityY = (node.velocityY+node.forceY)*lte;
                }
            );

            console.log(node.id + ":  velX = "+node.velocityX + " velY= "+ node.velocityY+ "\n\n");
            node.x += Math.round(node.velocityX);
            node.y += Math.round(node.velocityY);

        });

    //return s;
}

function dibujarSigma() {

    // Let's first initialize sigma:
    s.graph.clear();

    coords = getCoords(grafo);

    coords.forEach(
        function (valor, clave) {
            s.graph.addNode({
                id: clave.toString(),
                label: clave.toString(),
                x: valor.x,
                y: valor.y,
                size: 10,
                color: '#abf'
            });
            console.log("nodo "+ clave + " (" +valor.x + ", " +valor.y +")");
        }
    );

    grafo.forEach(
        function (valor, clave) {
            //valor es un vector
            valor.forEach(function(dest){

                //if(dest<clave)
                {
                    s.graph.addEdge({
                            id: "" + clave.toString() + dest.toString(),
                            source: clave.toString(),
                            target: dest.toString()
                        }
                    );
                    console.log("edge " + clave.toString() + dest.toString());
                }
            });
        }
    );


    /*for(var i=0; i<250; i++){
        s = fuerza(s);
    }*/
    s.refresh();

}

function test(){


    // Then, let's add some data to display:
    s.graph.addNode({
        // Main attributes:
        id: 'n0',
        label: 'Hello',
        // Display attributes:
        x: 0,
        y: 0,
        size: 1,
        color: '#f00'
    }).addNode({
        // Main attributes:
        id: 'n1',
        label: 'World !',
        // Display attributes:
        x: 1,
        y: 1,
        size: 1,
        color: '#00f'
    }).addEdge({
        id: 'e0',
        // Reference extremities:
        source: 'n0',
        target: 'n1'
    });

    // Finally, let's ask our sigma instance to refresh:
    s.refresh();
}

function getCoords(grafo) {

    var cx = 600 / 2;
    var cy = 600 / 2;

    console.log(" long " + grafo.size);
    var coords = new Map();


    if (grafo.size > 0) {
        var angInc = Math.PI * 2 / grafo.size;
        var angActual = 0;
        var radioGrafo = 180;

        grafo.forEach(
            function (value, key) {
                coords.set(key, {
                    x: parseInt(cx + Math.cos(angActual) * radioGrafo),
                    y: parseInt(cy + Math.sin(angActual) * radioGrafo)
                });
                angActual += angInc;
            });
    }
    return coords;
}



function cargar() {
    /*	var datos= document.getElementById("datos").value;
        console.log(datos);

        console.log(datos.split(/[\s,]/));
    */

    grafo.clear();

    var datos = document.getElementById("datos")
        .value
        .split(/[\s,]/)
        .map(function (a) {
            return parseInt(a)
        });
    //console.log(datos);

    var num = datos[0]; //numero de parejas


    for (var i = 1, j = 1; i <= num; i++, j += 2) {

        if (grafo.get(datos[j]) == undefined)
            grafo.set(datos[j], [datos[j + 1]]);
        else
            grafo.set(datos[j], grafo.get(datos[j]).concat(datos[j + 1]));

        if (grafo.get(datos[j + 1]) == undefined)
            grafo.set(datos[j + 1], [datos[j]]);
        else
            grafo.set(datos[j + 1], grafo.get(datos[j + 1]).concat(datos[j]));

        //console.log(datos[j] +"->"+ datos[j+1]);
        //console.log(datos[j+1] +"->"+ datos[j]);
    }

    grafo.forEach(function (value, key) {
        console.log(key + ' => ' + value);
    });


    alert('Grafo con ' + (grafo.size)+ ' nodos cargado exitosamente');

    coords = getCoords(grafo);

}


function atlas() {
    s.startForceAtlas2({worker: true,
        barnesHutOptimize: false,
        iterationsPerRender: 5,
        slowDown: 15
    });
}
function atlasStop(){

    s.stopForceAtlas2();
}


var grafo = new Map();
var coords = getCoords(grafo);


var s = new sigma('container');
var c = s.camera;

//test();
