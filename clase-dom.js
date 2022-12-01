//const caja = document.getElementById("caja")
//const cajas = document.getElementsByClassName("cajas")

// const cajas = document.querySelectorAll(".cajas")
// const caja = document.querySelector("#caja")

// for (let index = 0; index < cajas.length; index++) {
//     const element = cajas[index];
//     console.log(element)
// }

// console.log(caja)
// console.log(cajas)

const titulo = document.getElementById("titulo")
titulo.innerText = "Hola Como estan"

const parrafo = document.getElementById("parrafo")
parrafo.style.backgroundColor = "blue"
parrafo.style.padding = "2rem"
parrafo.style.margin = "2rem"
parrafo.style.color = "#fafafa"
parrafo.style.fontSize = "2rem"

const lista = document.getElementById("lista")
const nombre = document.getElementById("nombre")
const precio = document.getElementById("precio")
const descripcion = document.getElementById("descripcion")

nombre.innerHTML = `Televisor led 32 pulgadas`
precio.innerHTML = `40000`
descripcion.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatibus?`

lista.style.backgroundColor = "red"
lista.style.color = "white"
lista.style.width = "400px"
lista.style.padding = "2rem"


// const nombre = prompt("Ingrese un nombre")
// const frase = `Soy una ${nombre}`


 parrafo.innerHTML = `Hola Mundo`