
const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')
const peças ={
        "bracos": {
            "forca": 29,
            "poder": 35,
            "energia": -21,
            "velocidade": -5
        },
    
        "blindagem": {
            "forca": 41,
            "poder": 20,
            "energia": 0,
            "velocidade": -20
        },
        "nucleos":{
            "forca": 0,
            "poder": 7,
            "energia": 48,
            "velocidade": -24
        },
        "pernas":{
            "forca": 27,
            "poder": 21,
            "energia": -32,
            "velocidade": 42
        },
         "foguetes":{
            "forca": 0,
            "poder": 28,
            "energia": 0,
            "velocidade": -2
        }
} 

controle.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peça)
    })
})


 
 function manipulaDados(operacao, controle){
    
const peça = controle.querySelector("[data-contador]")
    if( operacao === "-") {
        peça.value = parseInt(peça.value) - 1
    }else{
        peça.value = parseInt(peça.value) + 1
    }
 }

function atualizaEstatistica(peça){
estatistica.forEach( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + peças [peça][elemento.dataset.estatistica]
})
}
 