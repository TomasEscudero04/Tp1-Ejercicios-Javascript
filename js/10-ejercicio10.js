// 10- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo: 

// input: 20
// Output: El 20 es divisible por 2.

let numero = prompt("Ingrese un numero")
if(numero % 2 === 0 ||
    numero % 3 === 0 ||
    numero % 5 === 0 ||
    numero % 7 === 0
) { 
    document.write("El numero ingresado es divisible");
} else{
    document.write("El numero ingresado no es divisible por 2, 3, 5 o 7")
}