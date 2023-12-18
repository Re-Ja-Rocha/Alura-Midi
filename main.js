function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
     
    

    if(elemento && elemento.localName === "audio"){ 
        elemento.play();
    }
    else {
            alert('Elemento OU seletor não localizado');
         }
}


const listaDeTeclas = document.querySelectorAll('.tecla');


for( let contador = 0 ; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];  
    const idAudio= `#som_${instrumento}`    
    tecla.onclick = function(){
        tocaSom(idAudio);
    } 
    
    // Inserindo classe na referência tecla. OnKeyDown = "Quando a tecla esta abaixada". Criei um evento quando atecla estiver abaixada
    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code ==="Space"){

        
        tecla.classList.add('ativa');
    }
}

    // Novo evento quando a tecla não estiver mais apertada:
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    } 


};
