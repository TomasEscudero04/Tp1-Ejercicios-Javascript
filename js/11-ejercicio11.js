// 11- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 

// input: 20
// input: 210

// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.

let numero = parseInt(prompt("Ingrese un numero"));

if(numero % 2 === 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0){
    document.write("El numero ingresado es divisible por 2, por 3, por 5 y por 7")
} else{
    if(numero % 2 === 0 ){
        document.write("El numero ingresado es divisible por 2")
    }
    if(numero % 3 === 0 ){
        document.write("El numero ingresado es divisible por 3")
    }
    if(numero % 5 === 0 ){
        document.write("El numero ingresado es divisible por 5")
    }
    if(numero % 7 === 0 ){
        document.write("El numero ingresado es divisible por 7")
    }
}
