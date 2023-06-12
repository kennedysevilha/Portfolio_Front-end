function tocaSom (seletorAudio){
const elemento = document.querySelector(seletorAudio);


if (elemento != null && elemento.localName === 'audio'){
    elemento.play();
}

    else{
    console.log('Elemento ou seletor invalido');

    }
 

}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++ ) {

const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = `#som_${instrumento}`; //template string
//console .log(idAudio);
//console .log(instrumento);
tecla.onclick= function() {

    tocaSom(idAudio);
}

tecla.onkeydown = function (evento){
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');}
    
}

tecla.onkeyup = function (){

    tecla.classList.remove('ativa');
}

//console .log(contador);

} 