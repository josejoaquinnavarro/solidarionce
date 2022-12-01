let productos = [{
    id: 1,
    marca: 'Samsung',
    nombre: 'TV Smart Glorious 43',
    precio: 85000
  }, {
    id: 2,
    marca: 'Phillips',
    nombre: 'TV Smart Insane 50',
    precio: 92000
  }, {
    id: 3,
    marca: 'Whirlpool',
    nombre: 'Heladera WP320B',
    precio: 157000
  }, {
    id: 4,
    marca: 'Patrick',
    nombre: 'Heladera PTK278SLB',
    precio: 77000
  },
  {
    id: 5,
    marca: 'Patrick',
    nombre: 'Heladera PTK278SLW',
    precio: 71000
  }
  ]
  
  function agregarProducto(producto){
    productos.push(producto)
  }
  
  console.log(productos.length)
  
  agregarProducto({
    id: 6,
    marca: 'Samsung',
    nombre: 'Microondas Helicoptero',
    precio: 15
  })
  
  //productos.forEach(producto => console.log(producto))

//   const eliminarProducto = productos.filter(producto => producto.id !== 1)
//   console.log(eliminarProducto)

function eliminar(id){
    let eliminarProducto = productos.filter(producto => producto.id !== id)
    productos = eliminarProducto
    console.log(productos)
  
}

  eliminar(3)
  eliminar(4)
  