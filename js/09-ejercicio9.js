// 9- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:

// input: Hola mundo
// Output: oauo

let frase = prompt("Escriba una frase") .trim();

frase = frase.toLowerCase();

document.write(frase)
document.write(frase.length)

let vocales = ""; 

for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i);
    if(
        caracter === "a" ||
        caracter === "e" ||
        caracter === "i" ||
        caracter === "o" ||
        caracter === "u" 
    ){
        vocales += caracter
    }
}

document.write(`Cantidad de vocales encontradas: ${vocales.length} (${vocales})`)