// 6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 

// input: 15 , 3
// Output: El 15 es el número más grande

let numero1 = parseInt( prompt("Ingrese un numero"))
let numero2 = parseInt( prompt("Ingrese otro numero"))

if(numero1>numero2){
    document.write("El numero " + numero1 + " es mayor que " + numero2)
} else{
    if(numero1<numero2){
        document.write("El numero " + numero1 + " es menor que " + numero2)
    }
    else{
        document.write("Los numeros ingresados son iguales")
    }
}