let numero=prompt("Com quantas cartas você quer jogar?")
parseInt(numero)
while(numero%2!==0||numero>14||numero<4){
    numero=prompt("Com quantas cartas você quer jogar?")
    parseInt(numero)
}
let animacoes=["bobross","explody","fiesta","metal","revertit","triplets","unicorn"]
animacoes.sort(comparador);
let randomizacaofinal=[]
randomizador();

for (let i=0; i<numero/2; i++){
    let cartas=document.querySelector(".primeira")
    cartas.innerHTML+=`
    <div class="carta" onclick="flip(this)">
        <div class="frente">
            <img src="images/front.png">
        </div>
        <div class="verso">
            <img src="/images/${randomizacaofinal[i]}.gif">
        </div>
    </div>
            `
}
for (let i=numero/2; i<numero; i++){
    let cartas=document.querySelector(".segunda")
    cartas.innerHTML+=`
        <div class="carta" onclick="flip(this)">
            <div class="frente">
                <img src="images/front.png">
            </div>
            <div class="verso">
                <img src="/images/${randomizacaofinal[i]}.gif">
            </div>
        </div>
            `
}
function comparador() { 
	return Math.random() - 0.5; 
}
function randomizador(){
    let randomizar=[]
    for (let i=0;i<numero/2;i++)
    {
        randomizar[i]=animacoes[i]
    }
    randomizacaofinal=randomizar.concat(randomizar)
    randomizacaofinal.sort(comparador);
}
function flip(elemento) {
    elemento.classList.toggle("flipada");
  }
  card.style.order