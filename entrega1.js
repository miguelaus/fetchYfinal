
//Funciones constructoras

function Pizza(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la pizza " + this.version + " es de tamaño " + this.size + " y su precio es " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ( "Su plato es: Pizza " + this.version)}
}


const pizzaMargarita = new Pizza("margarita", 4, "mediana", 1, "margarita.jpg")
const pizzaPrimavera = new Pizza("primavera" , 4.5, "mediana",2, "primavera.jpg")
const pizzaCaprese = new Pizza("caprese", 6, "grande",3, "caprese.jpg")

let arrayPizzas =[pizzaCaprese, pizzaPrimavera, pizzaMargarita]


function Pasta(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la pasta " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es:  " + this.version)}
}

const pastaSpaghetti = new Pasta('spaghetti', 3, "grande",4, "spaghetti.jpg");
const pastaRavioles = new Pasta('ravioles', 4, "grande",5, "ravioles.jpg");
const pastaMacarrones = new Pasta('macarrones', 4, "grande",6, "macarrones.jpg");

let arrayPasta = [pastaRavioles, pastaSpaghetti, pastaMacarrones]


function Ensalada(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la Ensalada " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es: Ensalada " + this.version)}
}

const ensaladaTomateLechuga = new Ensalada('tomate y lechuga', 5, "mediana",7,"tomatelechuga.jpg");
const ensaladaCesar = new Ensalada('cesar', 6, "mediana",8,"cesar.jpg");
const ensaladaPapaHuevo = new Ensalada('papa y huevo', 5, "mediana",9,"papahuevo.jpg");

let arrayEnsalada = [ensaladaCesar, ensaladaPapaHuevo, ensaladaTomateLechuga] 


function Carne(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la Carne: " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es: " + this.version)}
}

const carneBife = new Carne('bife', 4, "mediano",10,"bife.jpg");
const carneHamburguesa = new Carne('hamburguesa', 4, "mediana",11,"hamburguesa.jpg");
const carneVacio = new Carne('vacio', 5, "mediano",12,"vacio.jpg");
const carneChorizo = new Carne('chorizo', 4, "mediano",13,"chorizo.jpg");
const carneAsado = new Carne('asado', 6, "mediana",14,"asado.jpg");

let arrayCarne = [carneBife, carneAsado, carneVacio, carneChorizo, carneHamburguesa] 


function Trago(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El trago de " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su trago es: " + this.version)}
}

const tragoVino = new Trago('vino', 4, "copa",15,"vino.jpg");
const tragoCerveza = new Trago('cerveza', 6, "pinta",16,"cerveza.jpg");
const tragoRefresco = new Trago('refresco', 6.5, "vaso",17,"refresco.jpg");

let arrayTragos =  [tragoVino, tragoCerveza, tragoRefresco]



function Postre(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El postre " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio +  " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su postre es: " + this.version)}
}

const postreFlan = new Postre('flan', 4, "chico",18,"flan.jpg");
const postreFruta = new Postre('fruta', 6, "chico",19,"fruta.jpg");
const postreHelado = new Postre('helado', 6, "chico",20,"helado.jpg");

let arrayPostres = [postreFlan, postreFruta, postreHelado]



function Cafe(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su pedido es: " + this.version)}
}

const cafeCafe = new Cafe('cafe', 3, "chico",21,"cafe.jpg");
const cafeTe = new Cafe('te', 2, "chico",22,"te.jpg");
const cafeCapuccino = new Cafe('capuccino', 3.5, "chico",23,"capuccino.jpg");

let arrayCafe = [cafeCafe, cafeTe, cafeCapuccino ]

let arrayMenu = arrayEnsalada.concat(arrayCarne, arrayPasta, arrayPizzas, arrayTragos ,arrayCafe, arrayPostres)

function limpiar() {
	let divPizzas = document.getElementById("pizzas")
	let divPasta = document.getElementById('pasta')
	let divCafe = document.getElementById("cafe")
	let divEnsalada = document.getElementById("ensalada")
	let divTragos = document.getElementById("tragos")
	let divPostres = document.getElementById("postres")
	let divCarne = document.getElementById("carne")
	divPizzas.innerHTML = ""
	divCafe.innerHTML = ""
	divEnsalada.innerHTML = ""
	divTragos.innerHTML = ""
	divPostres.innerHTML = ""
	divCarne.innerHTML = ""
	divPasta.innerHTML = ""
	
}
// carrito y mostrar menues

let productosEnCarrito = []

function mostrarMenuPizzas(array) { 
	limpiar()
	let divPizzas = document.getElementById("pizzas")
	

	arrayPizzas.forEach((pizza)=>  {
		
		let nuevaPizza = document.createElement("div")

		nuevaPizza.innerHTML = `<div class="card fix my-3" style="width: 15rem;">
		                  			<img class="card-img-top " src="images/${pizza.imagen}" alt="pasta">
		                    			<div class=" bg-black card-body">
		                      				<h5 class="card-title">${pizza.version}</h5>
		                      					<p class="card-text">Precio: €${pizza.precio} </p>
		                      					<p class="card-text">Tamaño de producto: ${pizza.size}</p>
		                      				<button id="agregarBtn${pizza.id}" class="btn btn-primary ">Agregar al Carrito </button>
		                    			</div>
	                			</div>`
	        divPizzas.append(nuevaPizza)

	        let btnAgregar = document.getElementById(`agregarBtn${pizza.id}`)

			btnAgregar.addEventListener("click", () => {

				agregarAlCarritoPizza(pizza)

			})


	})



}
function agregarAlCarritoPizza (pizza) {
	productosEnCarrito.push(pizza)
	swal()
}




function swal() {
		Swal.fire({
		  titleText: 'Tu pedido se ha cargado al carrito exitosamente!',
		  confirmButtonText: 'Continuar',
		  background: "black",
		  timer: 2500,
		  color: "white",
		  iconColor: "green",
		  icon: "success",
		})

}

function mostrarMenuPasta(array)  { 
	limpiar()
	let divPasta = document.getElementById('pasta')
	arrayPasta.forEach((pasta)=> {

		let nuevaPasta = document.createElement("div")
		nuevaPasta.innerHTML = `<div class="card my-3" style="width: 15rem;">
		                  			<img class="card-img-top" src="images/${pasta.imagen}" alt="pasta">
		                    			<div class="bg-black card-body py-5">
		                      				<h5 class="card-title">${pasta.version}</h5>
		                      					<p class="card-text">Precio: €${pasta.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${pasta.size}</p>
		                      				<button id="agregarBtn${pasta.id}" class="btn btn-primary">Agregar al Carrito</button>
		                    			</div>
	                			</div>`
	   		 divPasta.append(nuevaPasta)

	   		let btnAgregar = document.getElementById(`agregarBtn${pasta.id}`)
			btnAgregar.addEventListener("click", () => {

				agregarAlCarritoPasta(pasta)

			})




	})

}

function agregarAlCarritoPasta (pasta) {
	productosEnCarrito.push(pasta)
	swal();
	
}


function mostrarMenuEnsalada () { 
	limpiar()
	let divEnsalada = document.getElementById("ensalada")

	arrayEnsalada.forEach((ensalada)=> {

		let nuevaEnsalada = document.createElement("div")

		nuevaEnsalada.innerHTML = `<div class="card my-3" style="width: 15rem; height:400px;">
		                  			<img class="card-img-top" src="images/${ensalada.imagen}" alt="pasta">
		                    			<div class="bg-black card-body">
		                      				<h5 class="card-title">${ensalada.version}</h5>
		                      					<p class="card-text">Precio: €${ensalada.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${ensalada.size}</p>
		                      				<button id="agregarBtn${ensalada.id}" class="btn btn-primary">Agregar al Carrito</button>
		                    			</div>
	                			</div>`
	   		 divEnsalada.append(nuevaEnsalada)
	   		 let btnAgregar = document.getElementById(`agregarBtn${ensalada.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoEnsalada(ensalada)

			})




	})
}

function agregarAlCarritoEnsalada (ensalada) {
	productosEnCarrito.push(ensalada)
	swal();

}



function mostrarMenuCarne () { 
	limpiar()
	let divCarne = document.getElementById("carne")


	arrayCarne.forEach((carne)=> {

		let nuevaCarne = document.createElement("div")

		nuevaCarne.innerHTML = `<div class="card my-3" style="width: 15rem; height: 400px;">
		                  			<img class="card-img-top" src="images/${carne.imagen}" alt="carne">
		                    			<div class="bg-black card-body">
		                      				<h5 class="card-title">${carne.version}</h5>
		                      					<p class="card-text">Precio: €${carne.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${carne.size}</p>
		                      				<button id="agregarBtn${carne.id}" class="btn btn-primary">Agregar al Carrito</button>
		                    			</div>
	                			</div>`
	   		 divCarne.append(nuevaCarne)
	   		 let btnAgregar = document.getElementById(`agregarBtn${carne.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoCarne(carne)

			})


	})

}

function agregarAlCarritoCarne (carne) {
	productosEnCarrito.push(carne)
	swal();

}



function mostrarMenuTragos() { 
	limpiar()
	let divTragos = document.getElementById("tragos")

	arrayTragos.forEach((tragos)=> {

		let nuevaTragos = document.createElement("div")

		nuevaTragos.innerHTML = `<div class="card my-3" style="width: 15rem; height: 500px">
		                  			<img class="card-img-top" src="images/${tragos.imagen}" alt="carne">
		                    			<div class="bg-black card-body">
		                      				<h5 class="card-title">${tragos.version}</h5>
		                      					<p class="card-text">Precio: €${tragos.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${tragos.size}</p>
		                      				<button id="agregarBtn${tragos.id}" class="btn btn-primary">Agregar al Carrito</button>
		                    			</div>
	                			</div>`
	   		 divTragos.append(nuevaTragos)
	   			let btnAgregar = document.getElementById(`agregarBtn${tragos.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoCarne(tragos)

			})

	})

}

function agregarAlCarritoTragos (tragos) {
	productosEnCarrito.push(tragos)
	swal();
}



function mostrarMenuPostres() { 
		limpiar()
		let divPostres = document.getElementById("postres")


		arrayPostres.forEach((postre)=> {

			let nuevaPostre = document.createElement("div")

			nuevaPostre.innerHTML = `<div class="card my-3" style="width: 15rem;">
			                  			<img class="card-img-top" src="images/${postre.imagen}" alt="postre">
			                    			<div class="bg-black card-body">
			                      				<h5 class="card-title">${postre.version}</h5>
			                      					<p class="card-text">Precio: €${postre.precio}</p>
			                      					<p class="card-text">Tamaño de producto: ${postre.size}</p>
		                      					<button id="agregarBtn${postre.id}" class="btn btn-primary">Agregar al Carrito</button>
			                    			</div>
		                			</div>`
		   		 divPostres.append(nuevaPostre)
		   		 let btnAgregar = document.getElementById(`agregarBtn${postre.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoCarne(postre)

			})


		})
}

function agregarAlCarritoPostres (postre) {
	productosEnCarrito.push(postre)
	swal();
}





function mostrarMenuCafe() { 
		limpiar()
		let divCafe = document.getElementById("cafe")

		arrayCafe.forEach((cafe)=> {

			let nuevaCafe = document.createElement("div")

			nuevaCafe.innerHTML = `<div class="card my-3" style="width: 15rem;">
			                  			<img class="card-img-top" src="images/${cafe.imagen}" alt="postre">
			                    			<div class="bg-black card-body">
			                      				<h5 class="card-title">${cafe.version}</h5>
			                      					<p class="card-text">Precio: €${cafe.precio}</p>
			                      					<p class="card-text">Tamaño de producto: ${cafe.size}</p>
		                      					<button id="agregarBtn${cafe.id}" class="btn btn-primary">Agregar al Carrito</button>
			                    			</div>
		                			</div>`
		   		 divCafe.append(nuevaCafe)
		   		let btnAgregar = document.getElementById(`agregarBtn${cafe.id}`)
					btnAgregar.addEventListener("click", () => {

					agregarAlCarritoCarne(cafe)

			})


		})

}





function agregarAlCarritoCafe (cafe) {
	productosEnCarrito.push(cafe)
	swal();
}


//botones del carrito

let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')

botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productosEnCarrito);

})

let compraEnEnvio 

//Funcion de finalizar compra

botonFinalizarCompra.addEventListener ("click", () => { if ( productosEnCarrito == "") { Swal.fire({
					  icon: 'error',
					  title: 'Upa...',
					  text: 'Aún no hay productos en tu carrito!',
					   color: "#FFFFFF",
		  				background: '#000000',
					})} else { 
	
	let productosEnCarritoJSON = JSON.stringify(productosEnCarrito);
	localStorage.setItem("Compra", productosEnCarritoJSON);
	

	compraEnEnvio = JSON.parse(localStorage.getItem("Compra")) || []

		Swal.fire({
		  title: 'Estas a punto de finalizar tu compra',
		  text: "Revisa todos los productos que se encuentren en el carrito antes de confirmar",
		  icon: 'warning',
		  iconColor: "#22F13A",
		  showCancelButton: true,
		  color: "#FFFFFF",
		  background: '#000000',
  		  backdrop: `rgba(0,0,#93FCBD,0.4) left top no-repeat`,
		  confirmButtonColor: '#08B620',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Confirmar'
			}).then((result) => {
		  if (result.isConfirmed) {
		    Swal.fire(
		      'Confirmado',
		      'Tu pedido está en camino, gracias por tu compra!',
		      'success'
		    ); 
		    productosEnCarrito = [];
		    localStorage.removeItem("Compra");
		    modalBody.innerHTML = ""
		    parrafoCompra.innerHTML = `El total de su carrito es € 0`


		  }else{
		  	Swal.fire({
				   title: 'Su compra fue cancelada. Los productos continuan en su carrito',
				   showClass: {
				   popup: 'animate__animated animate__fadeInDown'},
				   hideClass: {
				   popup: 'animate__animated animate__fadeOutUp'},
				   timer: 3000,
				   color: "#FFFFFF",
		  		   background: '#000000',
		  		   icon: "info",
		  		   iconColor: "#7EFBF4",
				})
		  }
		})
	
}})


// incorporacion de setTimeout y asincronìa

setTimeout( () => { Swal.fire({
							  position: 'top-end',
							  icon: 'info',
							  title: 'No olvides registrarte como cliente para obtener tu CODIGO DE CLIENTE y enterarte de nuestras ofertas!',
							  showConfirmButton: false,
							  timer: 7500,
							  toast: true,  	
							  iconcolor: "green",
							  timerProgressBar: true,
							  background: "black",
							  color: "white",

							})}, 500)




setTimeout( () => { Swal.fire({
							  position: 'top-end',
							  icon: 'info',
							  title: 'Si vas a pagar en moneda extranjera revisa el valor de cambio en el boton "$" antes de finalizar tu compra',
							  showConfirmButton: false,
							  timer: 7500,
							  toast: true,  	
							  iconcolor: "green",
							  timerProgressBar: true,
							  background: "black",
							  color: "white",

							})}, 12500)



//incorporacion boton de cambio fetch de cotizacion (API)

let btnCotizacion = document.getElementById("botonCotizacion")

btnCotizacion.addEventListener("click", () => {

const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=1&from=EUR&to=USD`)

  .then(resp => resp.json())
  .then((data) => {
    Swal.fire({
							  position: 'center',
							  icon: 'info',
							  title: `1 EUR = ${data.rates.USD} USD`,
							  showConfirmButton: false,
							  timer: 4500,
							  toast: true,  	
							  iconcolor: "green",
							  timerProgressBar: true,
							  background: "black",
							  color: "white",

							});
  });
} )


// Optimizacion ternario

function cargarProductosCarrito(array){
    modalBody.innerHTML = ""

    array.forEach((productoCarrito)=>{

        modalBody.innerHTML += `

	        <div class="card border-primary mb-3 d-flex flex-wrap" id="productoCarrito${productoCarrito.id}" style="max-width: 200px;">
	            <img class="card-img-top" src="images/${productoCarrito.imagen}" alt="${productoCarrito.version}">
	            <div class="card-body bg-black">
	                    <h4 class="card-title">${productoCarrito.version}</h4>
	                    <p class="card-text"> ${productoCarrito.size}</p>
	                    <p class="card-text">€${productoCarrito.precio}</p> 
	                    <button class="btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
	            </div>    
	        
	        
	        </div>`
	        localStorage.setItem("compra",JSON.stringify(array));


    })
    array.forEach((productoCarrito, indice)=> {
    	document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
    		array.splice(indice,1);
    		localStorage.setItem("compra",JSON.stringify(array));
    		cargarProductosCarrito(array);

    	})
    })

    //calculador del total y aplicacion && para envio gratuito
    function compraTotal(array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio
    },0)
   
    acumulador == 0 ? Swal.fire({
					  icon: 'error',
					  title: 'Upa...',
					  text: 'Aún no hay productos en tu carrito!',
					   color: "#FFFFFF",
		  				background: '#000000',
					}):  
    	acumulador >= 20 && Swal.fire({
							  position: 'top-end',
							  icon: 'success',
							  title: 'Felicidades ! con tu compra superior a €20 obtienes el envio gratuito',
							  showConfirmButton: false,
							  timer: 2500
							});
        parrafoCompra.innerHTML = `El total de su carrito es €${acumulador}`
    	
}

   
    compraTotal(array)
}

//Funcion Compra total 

function compraTotal(array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio
    },0)
    acumulador == 0 ?
					  Swal.fire({
					  icon: 'error',
					  title: 'Upa...',
					  text: 'Something went wrong!',
					}):    
      	
        parrafoCompra.innerHTML = `El total de su carrito es: ${acumulador}`
    
}

//botones de menues


let mostrarMenuPizzasBtn = document.getElementById("mostrarPizzasBtn")

mostrarMenuPizzasBtn.addEventListener("click",mostrarMenuPizzas)


let mostrarMenuPastaBtn = document.getElementById("mostrarPastaBtn")

mostrarMenuPastaBtn.addEventListener("click",mostrarMenuPasta)


let mostrarMenuEnsaladaBtn = document.getElementById("mostrarEnsaladaBtn")

mostrarMenuEnsaladaBtn.addEventListener("click",mostrarMenuEnsalada)



let mostrarMenuCarneBtn = document.getElementById("mostrarCarneBtn")

mostrarMenuCarneBtn.addEventListener("click",mostrarMenuCarne)



let mostrarMenuTragosBtn = document.getElementById("mostrarTragosBtn")

mostrarMenuTragosBtn.addEventListener("click",mostrarMenuTragos)


let mostrarMenuPostresBtn = document.getElementById("mostrarPostresBtn")

mostrarMenuPostresBtn.addEventListener("click",mostrarMenuPostres)



let mostrarMenuCafeBtn = document.getElementById("mostrarCafeBtn")

mostrarMenuCafeBtn.addEventListener("click", mostrarMenuCafe)


let mostrarMenuCompleto = document.getElementById("mostrarMenuBtn")





//boton buscar general

let buttonBuscar = document.getElementById("buttonBuscar")

buttonBuscar.addEventListener("click", buscarPorPlato )



//Buscador de platos

function buscarPorPlato() {
	let buscarPlato = document.getElementById("buscarPlato")

	switch (buscarPlato.value.toLowerCase()) {

	case "pizza":
	mostrarMenuPizzas();
	break;	

	case "margarita":
	mostrarMenuPizzas();
	break;

	case "primavera":
	mostrarMenuPizzas();
	break;

	case "caprese":
	mostrarMenuPizzas();
	break;

	case "pizza":
	mostrarMenuPizzas();
	break;

	case "flan" :
	mostrarMenuPostres();
	break; 

	case "helado":
	mostrarMenuPostres();
	break; 

	case "fruta":
	mostrarMenuPostres();
	break; 

	case "carne":
	mostrarMenuCarne();
	break;

	case "vacio" :
	mostrarMenuCarne();
	break;

	case "hamburguesa":
	mostrarMenuCarne();
	break; 

	case  "bife" :
	mostrarMenuCarne();
	break; 

	case  "chorizo" :
	mostrarMenuCarne();
	break;  

	case "asado" :
	mostrarMenuCarne();
	break; 

	case "pasta":
	mostrarMenuPasta();
	break;

	case "spaghetti":
	mostrarMenuPasta();
	break;

	case "ravioles":
	mostrarMenuPasta();
	break;

	case "macarrones":
	mostrarMenuPasta();
	break;

	case "vino":
	mostrarMenuTragos();
	break;

	case "cerveza":
	mostrarMenuTragos();
	break;

	case "refresco":
	mostrarMenuTragos();
	break;

	case "cesar":
	mostrarMenuEnsalada();
	break;

	case "tomate y lechuga":
	mostrarMenuEnsalada();
	break;

	case "papa y huevo":
	mostrarMenuEnsalada();
	break;

	case "lechuga y tomate":
	mostrarMenuEnsalada();
	break;

	case "cafe":
	mostrarMenuCafe();
	break;

	case "capuccino":
	mostrarMenuCafe();
	break;

	case "te":
	mostrarMenuCafe();
	break;

	default:
	buscarPlato = Toastify({
		  text: "Lo sentimos, el plato que buscas no se encuentra en nuestro Menu",
		  background: "red",
		  offset: {
		    x: 50, 
		    y: 10 },
			}).showToast();
			}
}


//Creacion de clientes 


function Cliente(nombre,apellido,calle,numeracion,telefono) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.calle = calle;
	this.numeracion = numeracion;
	this.telefono = telefono;

}
	let nombreCliente = document.getElementById("nombreCliente")
	let apellidoCliente = document.getElementById("apellidoCliente")
	let calleCliente = document.getElementById("calleCliente")
	let numeracionCliente = document.getElementById("numeracionCliente")
	let telefonoCliente = document.getElementById("telefonoCliente")

let arrayClientes = []

function crearCliente(array) {

	let nombreCliente = document.getElementById("nombreCliente")
	let apellidoCliente = document.getElementById("apellidoCliente")
	let calleCliente = document.getElementById("calleCliente")
	let numeracionCliente = document.getElementById("numeracionCliente")
	let telefonoCliente = document.getElementById("telefonoCliente")

	let nuevoCliente = new Cliente (nombreCliente.value, apellidoCliente.value, calleCliente.value, numeracionCliente.value, telefonoCliente.value)
	array.push(nuevoCliente)

	console.log(array)
}


function alertaClienteNuevo() {
	const Toast = Swal.mixin({
  	toast: true,
  	position: 'top-end',
  	showConfirmButton: false,
  	timer: 6000,
  	iconcolor: "green",
  	timerProgressBar: true,
  	background: "black",
  	color: "white",
  	didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


Toast.fire({
  icon: 'success',
  title: 'Gracias por registrarte, en instantes recibiras un SMS con tu código de cliente.',
})
}

//Almacenamiento cliente en el LocalStorage

let clienteNuevo = document.getElementById("clienteNuevo")

clienteNuevo.addEventListener("click", ()=>{

	if (nombreCliente.value != "" && apellidoCliente.value != "" && calleCliente.value != "" && telefonoCliente.value !="" && numeracionCliente.value !="") 
	{ 
	crearCliente(arrayClientes);
	alertaClienteNuevo();

	let arrayClientesJSON = JSON.stringify(arrayClientes);
	localStorage.setItem("Clientes", arrayClientesJSON) }else{
		Swal.fire({
				  position: 'center',
				  color: "white",
				  background: "black",
				  icon: 'error',
				  title: 'Algunos de los campos para el registro, está incompleto. Verificalos porfavor',
				  showConfirmButton: true,
				  timer: 3500

				  })
	}
})



