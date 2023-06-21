function tocaSom(seletorAuduo) {
    
    const elemento =  document.querySelector(seletorAuduo)

    if(elemento && elemento.localName === 'audio'){
        
        elemento.play()
    }else{
        console.log('Elemento nao encontrado')
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');


// enquento
for(let contador = 0; contador < listaDeTeclas.length;contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];

    // template 
    const idAudio = (`#som_${instrumento}`)
    // console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        console.log(evento.code)

        if(evento.code === 'Space' || evento.code === 'Enter'){
            
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');

    }
    
    // console.log(contador);
}