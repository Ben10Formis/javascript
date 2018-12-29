//1)Crear una lista desordenada con 10 elementos dentro usando un bucle for. Tener en cuenta que solo se le puede hacer un único appendChild al ul creado, asi minimizamos el tiempo de modificaciones en el DOM.
console.log("Ejercicio 1)");
let ul = document.createElement("ul");
let fragmento = document.createDocumentFragment();
for (var i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.innerText = "valor "+i;
    fragmento.appendChild(li);
    console.log(li);
}
ul.appendChild(fragmento);
console.log(ul);


//2)Hacer que el <article> con id "movil" solamente se vea si la pagina se carga a menos de 500px.
console.log("Ejercicio 2)");
if (window.outerWidth > 500) {
    document.querySelector("#movil").style.display = 'none';
}
console.log(movil);



//3)Realizar la misma operacion que en el punto uno, pero ahora para el <ul> que ya se encuentra en el <body>. Recordar que no se puede hacer multiples appendChild a un nodo.
console.log("Ejercicio 3)");
let fragmento1 = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
    var item = document.createElement("li")
    item.innerText = "Item "+i
    fragmento1.appendChild(item)
}
document.querySelector("#estatico").appendChild(fragmento1)
console.log(estatico);



/*
//4)Intercambiar las URLs de los links de la barra de navegacion. El que dice Google! tiene que redirigir a educacionit.com y viceversa.
let links = document.querySelectorAll("a")
let temp_url = links[0].href
links[0].href = links[1].href
links[1].href = temp_url





//5)Cambiarle el color del fondo al <header> por alguna tonalidad de azul oscuro y al <h1> por alguna tonalidad de blanco para que contraste.
document.querySelector("header").style.backgroundColor = 'rgba(0,50,150,0.3)'
document.querySelector("h1").style.backgroundColor = 'rgba(200,200,200,0.8)'





//Bonus:
//6)Realizar un efecto marquesina en un nodo <p> que diga "Mi primer programa en JS" que muestre de a una letra a la vez cada medio segundo por letra
let texto = "Mi primer programa en JS"
let p = document.createElement("p")
p.innerText = ""
document.querySelector("header").appendChild(p)
let counter = 0
let intervalo = setInterval(()=>{
    if(counter < texto.length){
        p.innerText+=texto[counter] 
        counter++  
    }else{
        p.innerText = ""
        counter = 0
    }
},300)





//7)Crear un <div> de 200px de ancho por 200px de alto con el color de fondo a eleccion. El elemento tiene que poder ir hasta el final de la pantalla sin pasarse de mas.
// let div = document.createElement("div")
// div.style.position = 'relative'
// div.style.width = '200px'
// div.style.height = '200px'
// div.style.backgroundColor = 'red'
// let left = 0
// document.querySelector("main").appendChild(div)
// let avanzar = setInterval(()=>{
//     if ((left+200) == window.innerWidth) {
//         clearInterval(avanzar);
//     }
//     div.style.left = left+"px"
//     left++
// },0.3)




//8)Al <div> del punto anterior transformarlo en circulo cuando se aproxime al centro de la pantalla y que vuelva a cuadrado cuando se aproxime a los extremos. 
let div = document.createElement("div")
div.style.position = 'relative'
div.style.width = '200px'
div.style.height = '200px'
div.style.backgroundColor = 'red'
let left = 0
let radius = 0
let final_radius = 50
document.querySelector("main").appendChild(div)
let avanzar = setInterval(()=>{
    if ((left+200) == window.innerWidth) {
        clearInterval(avanzar);
    }
    div.style.left = left+"px"
    div.style.borderRadius = radius+"%"
    let mitad_pantalla = window.innerWidth / 2
    let mitad_izq = mitad_pantalla / 2
    let mitad_der = mitad_pantalla + (mitad_pantalla / 2)

    if (left >= mitad_izq && left <= mitad_pantalla) {
        let porcentaje = (left * 100) / mitad_pantalla
        let porcentaje_radius = (porcentaje * final_radius) / 100
        radius = porcentaje_radius
    }

    if (left > mitad_pantalla && left <= mitad_der ) {
        let porcentaje = (left * 100) / mitad_der
        let porcentaje_radius = 100 - porcentaje
        radius = porcentaje_radius
    }

    left++
},0.3)
*/