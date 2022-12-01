const boton = document.getElementById("boton")
const formulario = document.getElementById("formulario")
const productosDom = document.getElementById("productos")
const ocultar = document.getElementById("ocultar")
const mostrar = document.getElementById("mostrar")
const parrafo = document.getElementById("parrafo")
const creadores = document.getElementById("creadores")
const ocultarCreador = document.getElementById("ocultarCreador")
const mostrarCreador = document.getElementById("mostrarCreador")

mostrar.addEventListener("click", ()=> {
    parrafo.style.display = "block"
})
ocultar.addEventListener("click", ()=> {
    parrafo.style.display = "none"
})

ocultarCreador.addEventListener("click", ()=> {
    creadores.style.display = "none"
})
mostrarCreador.addEventListener("click", ()=> {
    creadores.style.display = "block"
})


const productos = [
    {
        nombre:"Samsung",
        precio:"14000",
        imagen:"sarasa"
    }
]

function validadFormulario(e){
    e.preventDefault()
    console.log("Esta funcionando")
    const nombre = document.getElementById("nombre").value
    const precio = document.getElementById("precio").value
    const imagen = document.getElementById("imagen").value

    const nuevoProducto = {
        nombre : nombre,
        precio: precio,
        imagen : imagen
    }


    productos.push(nuevoProducto)
    renderizarProductos(productos)
}

function renderizarProductos(productos){
     let template = "";
     productos.forEach(producto => (
        template += `
        <div class="container"> 
            <h1 class="text-center"> ${producto.nombre} </h1>
            <h2 class="text-center"> ${producto.precio} </h2>
            <div class="container-fluid">
            <img src="${producto.imagen}" alt="">

            </div>
        </div>
        `
     ))
     productosDom.innerHTML = template;
}



formulario.addEventListener("submit", validadFormulario)



// boton.addEventListener("click", ()=> {
//     console.log("Hola")
//     console.log("Como")
//     console.log("Andas?")
// })

function apretar(){
    console.log("Hola ")
}

// boton.addEventListener("click", apretar)

// let input1  = document.getElementById("nombre");
// let input2  = document.getElementById("edad");
// input1.addEventListener("keyup",() => {
// console.log("keyUp");
// });
// input2.addEventListener("keydown",() => {
// console.log("keyDown");
// });
