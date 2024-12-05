// 7- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 

// input: 15 , 3, 9
// Output: El 15 es el número más grande

let numero1 = parseInt( prompt("Ingrese un primer numero"))
let numero2 = parseInt( prompt("Ingrese un segundo numero"))
let numero3 = parseInt( prompt("Ingrese un tercer numero"))

if(numero1>numero2 && numero1>numero3){
    document.write("El numero " + numero1 + " es mayor que " + numero2 + " y que " + numero3)
} else{
    if(numero2>numero1 && numero2>numero3){
        document.write("El numero " + numero2 + " es mayor que " + numero1 + " y que " + numero3)
    } if(numero3>numero1 && numero3>numero2){
        document.write("El numero " + numero3 + " es mayor que " + numero1 + " y que " + numero2)
    } else{
        document.write("Los numeros tres numeros ingresados son iguales")
    }
}