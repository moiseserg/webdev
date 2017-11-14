function bfs(grafo, origen, ttl){
	console.log("bfs");
	console.log(arguments);

	var visitas= new Map();

	for( var [key, value] of grafo){
		visitas.set(key, 0); //0 no visitado, 1 = visitado
		console.log("clave: " +key + " -> 0");
	}
	visitas.set(origen, 1);

	var cola= new Array();
	cola.push({nodo: origen, ttl: 0});

	console.table(cola);
	var termino=0;

	while(cola.length>0 && termino==0){
		var actual = cola.shift();
		var adj = grafo.get(actual.nodo); //lista de adyacentes a actual.nodo

		adj.forEach(
			function(item){
				if(visitas.get(item)==0){

					if(actual.ttl+1>ttl)
						termino=1;

					if(termino==0){
						console.log("a visitar " + item );
						visitas.set(item, 1);
						cola.push({nodo: item, ttl: actual.ttl+1});
					}
				}		
			});
		console.table(cola);		
	}




}


function ejecutar(){
/*	var datos= document.getElementById("datos").value;
	console.log(datos);

	console.log(datos.split(/[\s,]/));
*/
	var datos= document.getElementById("datos")
			.value
			.split(/[\s,]/)
			.map(function(a){
				return parseInt(a)
			});
	//console.log(datos);

	var num=datos[0]; //numero de parejas
	var grafo= new Map();
	
	for(var i=1, j=1; i<=num; i++, j+=2){
		
		if(grafo.get(datos[j])==undefined)
			grafo.set(datos[j],   [datos[j+1]]);
		else
			grafo.set(datos[j],   grafo.get(datos[j]).concat(datos[j+1]));

		if(grafo.get(datos[j+1])==undefined)
			grafo.set(datos[j+1], [ datos[j]]);	
		else
			grafo.set(datos[j+1], grafo.get(datos[j+1]).concat(datos[j]));

		//console.log(datos[j] +"->"+ datos[j+1]);
		//console.log(datos[j+1] +"->"+ datos[j]);
	}

	for (var [key, value] of grafo) {
	  console.log(key + ' => ' + value);
	}

	for(var j= num*2+1; j< datos.length-2; j+=2){
		bfs(grafo, datos[j], datos[j+1] );
	}




}