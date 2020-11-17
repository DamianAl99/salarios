
var nombre;
var salario = 0;
var total = 0;
var cont = 0;

nombre = prompt("ingresa el nombre del Empleado o parar si deseas parar");
while(nombre!="parar"){
    salario = parseInt(prompt("ingresa el salario"));
    total = total + salario;
    cont = cont+1;
    nombre = prompt("ingresa el nombre del Empleado o parar si deseas parar");
}

console.log(total);
console.log('el numero total de empleados es: '+cont);
