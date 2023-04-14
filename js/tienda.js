//script funcionalidad de carrito y tienda


console.log(catalogo);
let carritoCompras=JSON.parse(localStorage.getItem("myCarrito")) || [] 

const productos=document.querySelector(".products")
console.log(productos);
productos.innerHTML="";
catalogo.forEach((Element, index)=>{
    const div=document.createElement("div")
    div.classList.add("carts")
    div.insertAdjacentHTML("beforeend", `
    <img src="${Element.img}">
    <p>${Element.nombre}</p>
    <p>$${Element.valor}</p>
    <a class="añadir" id_producto="${index}">Añadir al carrito</a>
    `)

    productos.appendChild(div)

    

})




const modal = document.getElementById("myModal");
  
const span = document.getElementsByClassName("close")[0];


const content=modal.querySelector(".modal-contentt")
console.log(content);


addEventListener("click", (e)=>{
    if (e.target.classList.contains("añadir")) {
        const id=e.target.getAttribute("id_producto")
        const productoo=catalogo[id];
        carritoCompras.unshift(productoo);
        localStorage.setItem("myCarrito", JSON.stringify(carritoCompras));
        alert("Se ha agregado un producto")
    }
})



  addEventListener("click", (e)=>{
    if (e.target.classList.contains("carrito")) {
        content.innerHTML="";
        modal.style.display="block"
        const div=document.createElement("div");
        carritoCompras.forEach((element)=>{
        div.insertAdjacentHTML("beforeend", `
            <h3>${element.nombre}</h3>
            <img src="${element.img}" width="50%"/>
        `)
        })
        content.appendChild(div);
    }
})


span.addEventListener("click", ()=>{
    modal.style.display = "none";
  })
