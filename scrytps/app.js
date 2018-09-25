/*
var numero1 = 10;
var numero2 = 5;
var resultado = numero1*numero2;

console.log(resultado);

var nombre = "andres ballesteros";
var profesion = "futbolista millonarios fc";

console.log(nombre + profesion);
}

 var tienen_mascota = true;

console.log(tienen_mascota);

 var datos=["andres",19,falso,25,78,"Desarrollador"];

 console.log(datos[0]);
*/
/*
var edad = 25;
 if(edad>17 && edad<=40){
 	console.log("eres un adulto joven");
 }else{
 console.log("no eres un adulto joven");

}

var dias= ['lunes','martes','miercoles','jueves','sabado'];

for(var a=0;a<7;a++){
	console.log(dias[a]);

}
*/
/*
function suma(numero1,numero2){
	var resultado= numero1+numero2;
	return resultado;
}

 var res=suma(88,55);
 console.log(res);
 */
 /*
 function iva(numero1){
 	var resultado= numero1*0.19;
 	return resultado;

 }


var rest=iva(100);
console.log(rest);
*/
/*
var titulos = document.getelemntsbytagname('h1');

console.log(titulos[0]);

var clasetexto= document.getelemntsbyclassname('texto');
console.log(clasetexto);

var sede= document.getelemntsbyid('sede');
console.log(sede);
*/
function iva(precio_producto,porcentaje,iva){
	var iva_producto=precio_producto*(porcentaje_iva/100);
	return iva_producto;
}
function calcular_iva(){
	var precio=parceint(document.getelemntsbyid(´precio').value);
	var porcentaje_iva=parceint(document.getelemntsbyid('precio').value);
	var resultado=iva(precio,porcentaje,iva);
	var salida=document.getelemntsbyid('resultado');
		


console.log(precio.value);
console.log(porcentaje_iva.value);
}