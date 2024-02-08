/*funcion para activar enlaces*/
var lista = document.querySelectorAll(".nav .items");
function activarLink (){
    lista.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

lista.forEach((item) =>
item.addEventListener("mouseover", activarLink));

/*funcion para ocultar/mostar menu*/
 const menu = document.getElementById("menu");
 const barraLateral = document.querySelector(".barra-lateral");
 menu.addEventListener("click", ()=>{
    barraLateral.classList.toggle(".mini-barra-lateral")
 });
