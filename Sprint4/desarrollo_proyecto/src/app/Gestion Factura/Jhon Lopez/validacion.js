const { Alert } = require("bootstrap");

function mensaje1(){
//console.log("Oprimio el boton");
//alert("Oprimio el boton");
//document.write("Oprinio el boton");

//tipo de dato numerico
//var edad=13;
//alert(edad);

//tipo de dato string
//var nombre="Jhon";
//var apellido="Lopez";
//alert(nombre+" "+apellido);
//alert(nombre+" "+"\""+apellido+"\"");

//tipo de dato boolean
//var nombre = true;
//var nombre1 = false;
//alert(nombre1);

//tipo de dato undefined
//var nombre;
//alert(nombre);

//tipo de dato null
//var numero=10;
//var numero=null;
//alert(numero);

//Tipo de dato Nan
//var texto= "Virtutienda";
//alert(texto*2);

//tipo de dato (arreglo)
var vec=["mary","alex","jesus"];
vec[2]="jhon";
vec[3]="jesus";
//var amigo=[vec.length];
vec.push("katherine","andrea","paola");

//Eliminar el ultimo del arreglo
vec.pop();

//Concatenar dos arreglos
var vec1=["name1","name2","name3"];
//var concatenados = vec + vec1;
var concatenados = vec.concat(vec1);


//concatenados.join(":");
//var ami=vec1.join(":");

//ordenar de la a a la z un vector
//var ordenar=concatenados.sort();
//alert(ordenar);

//revisar si algun dato se encuentra en el vector
//var encontrar=concatenados.includes("andrea");
//alert(encontrar);

//según la condicion me filtra los datos
/*var vec3=[1,2,3];
var filtrar=vec3.filter(number=>number>1);
alert(filtrar);
*/
//da true o false depende si se encontro el filtro
//var vec3=[1,2,3];
//var encontro= vec3.some(num => num>3);
//alert(encontro);
//alert(concatenados)
return concatenados





}