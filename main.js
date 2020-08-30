console.log("Ejercicio 1: Playlist")

let cancion1 = document.getElementById("song1")
let cancion2 = document.getElementById("song2")
let cancion3 = document.getElementById("song3")
let cancion4 = document.getElementById("song4")
let cancion5 = document.getElementById("song5")

// const tuCancion1 = (cancion1) => {
//     cancionUsuario1 = prompt("Escribí el nombre de una de tus canciones favoritas")
//     cancion1.textContent = cancionUsuario1    
//     return cancionUsuario1
// }
// console.log(tuCancion1(cancion1))

// const tuCancion2 = (cancion2) => {
//     cancionUsuario2 = prompt("Escribí el nombre de una de tus canciones favoritas")
//     cancion2.textContent = cancionUsuario2
//     return cancionUsuario2
// }
// console.log(tuCancion2(cancion2))

// const tuCancion3 = (cancion3) => {
//     cancionUsuario3 = prompt("Escribí el nombre de una de tus canciones favoritas")
//     cancion3.textContent = cancionUsuario3    
//     return cancionUsuario3
// }
// console.log(tuCancion3(cancion3))

// const tuCancion4 = (cancion4) => {
//     cancionUsuario4 = prompt("Escribí el nombre de una de tus canciones favoritas")
//     cancion4.textContent = cancionUsuario4    
//     return cancionUsuario4
// }
// console.log(tuCancion4(cancion4))

// const tuCancion5 = (cancion5) => {
//     cancionUsuario5 = prompt("Escribí el nombre de una de tus canciones favoritas")
//     cancion5.textContent = cancionUsuario5    
//     return cancionUsuario5
// }
// console.log(tuCancion5(cancion5))

console.log("Ejercicio 2: Adivinanza")

const boton1 = document.getElementById("unicornio")
const boton2 = document.getElementById("hombre")
const boton3 = document.getElementById("dinosaurio")

let mensajeAlUser = document.getElementById("mensaje")

boton1.onclick = (respuesta) => {
    
    boton1.classList.add("incorrecta")
    boton2.classList.add("correcta")
    boton3.classList.add("incorrecta")
        
    mensajeAlUser.textContent = "Respuesta incorrecta! Volvé a intentarlo..." 

    console.log(respuesta)

}

boton2.onclick = (respuesta) => {
    
    boton2.classList.add("correcta")
            
    mensajeAlUser.textContent = `EXACTO!!! 
    Edipo miró a la Esfinge y le respondió: El hombre.
    En su infancia gatea con sus manos y rodillas, que es como tener cuatro pies.`

    console.log(respuesta)
}

boton3.onclick = (respuesta) => {
    
    boton1.classList.add("incorrecta")
    boton2.classList.add("correcta")
    boton3.classList.add("incorrecta")
        
    mensajeAlUser.textContent = "Respuesta incorrecta! Volvé a intentarlo..." 

    console.log(respuesta)
}

console.log("Ejercicio 3: Instagram by Malena")

const card = document.querySelector(".card")
const img = document.querySelector("img")
const corazon = document.querySelector(".fa.fa-heart")
const likes = document.querySelector("#likes")

img.onclick = () => {
    if (corazon.classList.contains("rojo")) {
        
        corazon.classList.remove("rojo")
        likes.textContent = 0
    }

    else {
        corazon.classList.add("rojo")
        likes.textContent = "1"
    }
}

console.log("Ejercicio 4: Contador")

const numero = document.getElementById("p-numero")
const restaUno = document.getElementById("menos-uno")
const sumaUno = document.getElementById("mas-uno")
const restaCinco = document.getElementById("menos-cinco")
const sumaCinco = document.getElementById("mas-cinco")
const restaDiez = document.getElementById("menos-diez")
const sumaDiez = document.getElementById("mas-diez")
let resultado = 0

restaUno.onclick = () => {
    resultado = resultado - 1
    console.log(resultado)
    numero.textContent = resultado
}

sumaUno.onclick = () => {
    resultado = resultado + 1
    console.log(resultado)
    numero.textContent = resultado
}

restaCinco.onclick = () => {
    resultado = resultado - 5
    console.log(resultado)
    numero.textContent = resultado
}

sumaCinco.onclick = () => {
    resultado = resultado + 5
    console.log(resultado)
    numero.textContent = resultado
}

restaDiez.onclick = () => {
    resultado = resultado - 10
    console.log(resultado)
    numero.textContent = resultado
}

sumaDiez.onclick = () => {
    resultado = resultado + 10
    console.log(resultado)
    numero.textContent = resultado
}

console.log("Ejercicio 5: Paleta")

const naranja = document.getElementById("b-naranja")
const turquesa = document.getElementById("b-turquesa")
const magenta = document.getElementById("b-magenta")
const purpura = document.getElementById("b-purpura")
const gris = document.getElementById("b-gris")
const verde = document.getElementById("b-verde")
const rectangulo = document.getElementById("b-rectangulo")


naranja.onclick = () => {
    rectangulo.classList.toggle("naranja")
    console.log(rectangulo.classList)
}

turquesa.onclick = () => {
    rectangulo.classList.toggle("turquesa")
        
    console.log(rectangulo.classList)
}

magenta.onclick = () => {
    rectangulo.classList.toggle("magenta")
       
    console.log(rectangulo.classList)
}

purpura.onclick = () => {
    rectangulo.classList.toggle("purpura")
        
    console.log(rectangulo.classList)
}

gris.onclick = () => {
    rectangulo.classList.toggle("gris")
    
    console.log(rectangulo.classList)
}

verde.onclick = () => {
    rectangulo.classList.toggle("verde")
    
    console.log(rectangulo.classList)
}

// Male: quería remover la clase agregada a la posición 1 (además de .rectangulo) antes de agregar otra clase, pero no lo logré hacer. Usé toggle para que con el 2do click se saque la clase y se pueda volver a poner y ver! No es la mejor solución pero es la que se me ocurrió.

console.log("Ejercicio 6: ")