let numero=prompt("Com quantas cartas você quer jogar?")
parseInt(numero)
while(numero%2!==0||numero>14||numero<4){
    numero=prompt("Com quantas cartas você quer jogar?")
    parseInt(numero)
}
let randomizar=["bobross","explody","fiesta","metal","revertit","triplets","unicorn"]
randomizar.sort(comparador);
for (let i=0; i<numero/2; i++){
    let cartas=document.querySelector(".primeira")
    cartas.innerHTML+=`
    <div class="carta" onclick="flip(this)">
        <div class="frente">
            <img src="images/front.png">
        </div>
        <div class="verso">
            <img src="/images/${randomizar[i]}.gif">
        </div>
    </div>
            `
}
let randomizar2=[]
copiaerandomiza()
for (let i=0; i<numero/2; i++){
    let cartas=document.querySelector(".segunda")
    cartas.innerHTML+=`
        <div class="carta" onclick="flip(this)">
            <div class="frente">
                <img src="images/front.png">
            </div>
            <div class="verso">
                <img src="/images/${randomizar2[i]}.gif">
            </div>
        </div>
            `
}
function comparador() { 
	return Math.random() - 0.5; 
}
function copiaerandomiza(){
    for (i=0;i<numero/2;i++)
    {
        randomizar2[i]=randomizar[i]
    }
    randomizar2.sort(comparador);
}
function flip(elemento) {
    elemento.classList.toggle("flipada");
  }
  card.style.order