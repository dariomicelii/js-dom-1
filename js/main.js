const lampadinaEl = document.getElementById("lampadina");
const interruttoreEl = document.getElementById("interruttore");
// const lampadinaAccesaEl= document.createElement("img")
// lampadinaAccesaEl.src = "./img/yellow_lamp.png"

interruttoreEl.addEventListener('click', () => {
    lampadinaEl.classList.toggle("d-none")
}); 