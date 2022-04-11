
let numero;
iniciarJogo()

function iniciarJogo(){
    numero=Number(prompt("Com quantas cartas você quer jogar?"))
    while(numero%2!==0||numero>14||numero<4){
        numero=prompt("Com quantas cartas você quer jogar?")
        parseInt(numero)
        }
}
let segundos=0
let minutos=0
cronometro()

function cronometro(){
    let j=0
    let reloginho=document.querySelector(".relogio")
    reloginho.innerHTML=`0${minutos}:0${segundos}`
    idInterval=setInterval(acrescentar, 1000)
    function acrescentar(){
        j++
        segundos=j%60
        if(j>59){
            minutos++
            j=0
            }
        if(segundos>9){
            reloginho.innerHTML=`0${minutos}:${segundos}`
        }
        else{
            reloginho.innerHTML=`0${minutos}:0${segundos}`
        }
    } 
}

let randomizacaofinal=[]
randomizador();

function randomizador(){
    let animacoes=["bobross","explody","fiesta","metal","revertit","triplets","unicorn"]
    animacoes.sort(comparador);
    let randomizar=[]
    for (let i=0;i<numero/2;i++)
    {
        randomizar[i]=animacoes[i]
    }
    randomizacaofinal=randomizar.concat(randomizar)
    randomizacaofinal.sort(comparador);
    randomizacaofinal.sort(comparador);
}
function comparador() { 
	return Math.random() - 0.5; 
}

adicionarCartas();

function adicionarCartas() {
    for (let i=0; i<numero/2; i++){
        let cartas=document.querySelector(".primeira")
        cartas.innerHTML+=`
        <div class="carta" data-framework="${randomizacaofinal[i]}" onclick="contarjogadas();flip(this)">
            <div class="frente">
                <img src="images/front.png">
            </div>
            <div class="verso">
                <img src="images/${randomizacaofinal[i]}.gif">
            </div>
        </div>
                `
    }
    for (let i=numero/2; i<numero; i++){
        let cartas=document.querySelector(".segunda")
        cartas.innerHTML+=`
            <div class="carta" data-framework="${randomizacaofinal[i]}" onclick="contarjogadas();flip(this);">
                <div class="frente">
                    <img src="images/front.png">
                </div>
                <div class="verso">
                    <img src="images/${randomizacaofinal[i]}.gif">
                </div>
            </div>
                `
    }
}

let primeiracarta
let segundacarta
function flip(elemento) {
    elemento.classList.add("flipada")
    if(document.querySelector(".primeiradopar")===null){
    primeiracarta=elemento
    primeiracarta.classList.add("primeiradopar")
    }
    else{
    segundacarta=elemento
    travamento()
    conferircartas()
    }
}

function travamento(){
let elemento=document.querySelectorAll(".carta").forEach(elemento=>elemento.classList.toggle("travada"))
}

function conferircartas(){
    primeiracarta.classList.remove("primeiradopar")
    if (primeiracarta.dataset.framework === segundacarta.dataset.framework && primeiracarta!==segundacarta) {
        primeiracarta.removeAttribute("onclick")
        segundacarta.removeAttribute("onclick")
        conferirFimdoJogo()
        setTimeout (travamento,300)
    }
    else{
        setTimeout (desvirarcartas,1000)
        setTimeout (travamento,1700)
    }
}

function desvirarcartas(){
    primeiracarta.classList.remove("flipada")
    segundacarta.classList.remove("flipada")
}

function conferirFimdoJogo(){
    let elemento=document.querySelectorAll(".carta")
    elemento=Array.from(elemento)
    let check = elemento.every((elemento) => elemento.classList.contains("flipada"))
    if(check===true){
        setTimeout(fimdoJogo,700)
    }
}

let contador=0
function contarjogadas(){
    contador++
}
function fimdoJogo(){
    clearInterval(idInterval)
    alert(`Você ganhou em ${contador} jogadas e 0${minutos}:${segundos} segundos!`)
    reiniciar()
}
function reiniciar(){
let reset=prompt("Deseja reiniciar o jogo?")
   if(reset==="sim"){
    window.location.reload();} 
}
