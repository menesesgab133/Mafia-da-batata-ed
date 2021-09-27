const img = document.querySelector("img");
const icons = document.querySelector(".icons");

img.onclick = function(){
    this.classList.toggle("active");
    icons.classList.toggle("active");
}

function abrirJanela(pagina, largura, altura) {
    var esquerda = (screen.width - largura)/2;
    var topo = (screen.height - altura)/2;
        minhaJanela = window.open(pagina,'','height=' + altura + ', width=' + largura + ', top=' + topo + ', left=' + esquerda);
}