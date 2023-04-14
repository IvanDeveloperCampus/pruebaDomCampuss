// script llenado dinamico

console.log(servicios);

const cards=document.querySelector(".cards");
cards.innerHTML="";
servicios.forEach((Element, index)=>{
  const {titulo, img, detalles, disponibilidad} = Element;
    const div=document.createElement("div");
    div.classList.add("tarjetas")
    div.classList.add("card")
    div.insertAdjacentHTML("beforeend", `
        <p>${titulo}</p>
        <img src="${img}"/>
        <button class="modall" id="myBtn" id_servicio="${index}">Ver datos</button>
    `)

    cards.appendChild(div)





})

const modal = document.getElementById("myModal");
  
const span = document.getElementsByClassName("close")[0];

const tbody=modal.querySelector(".tablee")

addEventListener("click", (e)=>{
  if (e.target.classList.contains("modall")) {
    const id=e.target.getAttribute("id_servicio")
    console.log(id);
    const servicio=servicios[id]
    tbody.innerHTML="";
    modal.style.display = "block";
    const tr=document.createElement("tr")
    tr.insertAdjacentHTML("beforeend", `
        <td>${servicio.titulo}</td>
        <td>${servicio.detalles}</td>
        <td>${servicio.disponibilidad}</td>
    `)
   
    tbody.appendChild(tr);
  }
  
})
span.addEventListener("click", ()=>{
  modal.style.display = "none";
})

