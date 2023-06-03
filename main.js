let randomnumber = Math.floor(Math.random() * 100 + 1);
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let txt = document.getElementById("txt");
let wins = document.getElementById("wins");
let numero_wins = document.getElementById("numero_wins");

btn.addEventListener("click", function(){
    if(input.value > randomnumber) {
        txt.innerHTML = "Muy Grande"
        txt.style.display = "block"
        txt.style.color = "red"
        setTimeout(ocultar,2000)
    }
});

btn.addEventListener("click", function(){
    if(input.value < randomnumber) {
        txt.innerHTML = "Muy Pequeño"
        txt.style.display = "block"
        txt.style.color = "red"
        setTimeout(ocultar,2000)
    }
});

btn.addEventListener("click", function(){
    if(input.value == randomnumber) {
        txt.style.display = "block"
        txt.innerHTML = "Acertaste"
        txt.style.color = "Green"
        numero_wins.textContent++
        setTimeout(ocultar,5000)
        randomnumber = Math.floor(Math.random() * 100 + 1)
    }
});


function ocultar() {
    txt.style.display = "none"
};


btn.addEventListener("click", function(){
    if(input.value == "") {
        txt.innerHTML = "Debes de agregar un Numero"
    }
});


