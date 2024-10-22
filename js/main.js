const lampadinaEl = document.getElementById("lampadina");
const lampadinaAccesaEl = document.getElementById("lampadinaAccesa");
const interruttoreEl = document.getElementById("interruttore");
// const lampadinaAccesaEl= document.createElement("img")
// lampadinaAccesaEl.src = "./img/yellow_lamp.png"

interruttoreEl.addEventListener('click', () => {
    lampadinaAccesaEl.classList.toggle("d-none")
}); 