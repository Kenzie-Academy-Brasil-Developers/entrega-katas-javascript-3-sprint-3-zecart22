function showResults(resultado){
    //criar variavel que seleciona uma ul e crie nela li
    const lista = document.querySelector('ul');
    console.log(lista);
    //criar a li dentro da "lista (ul) "
    const itemLista = document.createElement('li');
    console.log(itemLista);
    //injetar o valor de "i" na li 
    itemLista.innerText = resultado ;
    //injetar eles o itens no html 
    lista.appendChild(itemLista)
    return itemLista;
  }

//showResults();

function nomeKatas(whatKata){
   const lista = document.querySelector('ul')
   const nomeK = document.createElement('h2')
   nomeK.innerText = whatKata;
   lista.appendChild(nomeK)
   return nomeK;
}
  //nomeKatas();

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
  
  function kata1() {
    const nkata = 'kata 1';
    nomeKatas(nkata)
    let resultado = 0;
    for(let i = 1 ; i <= 25; i++){
    resultado = i;
    //console.log(resultado);
    showResults(resultado);
    }
      return resultado;
  }

  kata1();
    
  function kata2() {
    const nkata = 'kata 2';
    nomeKatas(nkata)
    let resultado = 0;
    for(let i = 25 ; i > 0; i--){
    resultado = i;
    //console.log(resultado);
    showResults(resultado);
    }
      return resultado;
  }
  
  kata2();
  
  function kata3() {
    const nkata = 'kata 3';
    nomeKatas(nkata)
    let resultado = 0;
    for(let i = 1 ; i <= 25; i++){
    resultado = i*-1;
    //console.log(resultado);
    showResults(resultado);
    }
      return resultado;
  }
  
  kata3();
  
  function kata4() {
    const nkata = 'kata 4';
    nomeKatas(nkata)
    let resultado = 0;
    for(let i = 25 ; i > 0; i--){
    resultado = i*-1;
    //console.log(resultado);
    showResults(resultado);
    }
      return resultado;
  }
  
  kata4();

  function kata5() {
    const nkata = 'kata 5';
    nomeKatas(nkata)
    let resultado = 0;
    for(let i = 25; i > 25*-1 + -1; i--){
    resultado = i;
    if(resultado % 2 !== 0){
    //console.log(resultado);
    showResults(resultado);    
      }
    }
        return resultado;
  }
  
  kata5()
  
  function kata6() {
    const nkata = 'kata 6';
    nomeKatas(nkata)
    let resultado = 0;
    for(let i = 1; i < 100; i++ ){
    resultado = i;
    if(resultado % 3 === 0){
    //console.log(resultado);
    showResults(resultado)
        
      }
      
    }
      return resultado;
  }
  
  kata6();

  function kata7() {
    const nkata = 'kata 7';
    nomeKatas(nkata)
    let resultado = 0;
    for(let i = 1; i < 100; i++ ){
    resultado = i;
    if(resultado % 7 === 0){
    //console.log(resultado);
    showResults(resultado)
        
      }
      
    }
      return resultado;
  }
  
  kata7();
  
  function kata8() {
    const nkata = 'kata 8';
    nomeKatas(nkata)
    let resultado = 0;
    for(let i = 100; i > 0; i-- ){
    resultado = i;
    if(resultado % 3 === 0 || resultado % 7 === 0){
    //console.log(resultado);
    showResults(resultado)
        
      }
      
    }
      return resultado;
  }

  kata8();
  
  function kata9() {
    const nkata = 'kata 9';
    nomeKatas(nkata)
    let resultado = 0;
    for(let i = 5; i < 100; i++ ){
    resultado = i;
    if((!resultado % 2 === 0) && (resultado % 5 === 0)){
    //console.log(resultado);
    showResults(resultado)
        
      }
      
    }
      return resultado;
  }

  kata9();
  
  function kata10() {
    const nkata = 'kata 10';
    nomeKatas(nkata)
    let resultado = 0 ; 
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    resultado = sampleArray;
    //console.log(resultado);
    showResults(resultado) ;
    return resultado;
  }
  
  kata10();
  
  function kata11() {
    const nkata = 'kata 11';
    nomeKatas(nkata)
    let resultado = 0;
    let numberPosition = 0;
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    for(let i = 0; i < sampleArray.length; i++){
    numberPosition = sampleArray[i];
    if( numberPosition % 2 === 0 ){
    resultado = numberPosition;
    //console.log(resultado);
    showResults(resultado)
      } 
    }
    return resultado
  }

  kata11();
  
  function kata12() {
    const nkata = 'kata 12';
    nomeKatas(nkata)
    let resultado = 0;
    let numberPosition = 0;
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    for(let i = 0; i < sampleArray.length; i++){
    numberPosition = sampleArray[i];
    if( numberPosition % 2 !== 0 ){
    resultado = numberPosition;
     //console.log(resultado);
    showResults(resultado)
      } 
    }
    return resultado
  }
  
  kata12();

  function kata13() {
      const nkata = 'kata 13';
      nomeKatas(nkata)
      let resultado = 0;
      let numberPosition = 0;
      const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
      for(let i = 0; i < sampleArray.length; i++){
      numberPosition = sampleArray[i];
      if( numberPosition % 8 === 0 ){
      resultado = numberPosition;
      //console.log(resultado);
      showResults(resultado);
      } 
    }
    return resultado
  }

  kata13();
  
  function kata14() {
      const nkata = 'kata 14';
      nomeKatas(nkata)
      let resultado = 0;
      let numberQuad = 0;
      let numberArray = 0;
      const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
      for(let i = 0; i < sampleArray.length; i++){
      numberArray = sampleArray[i];
      numberQuad = numberArray*numberArray;
      resultado = numberQuad;
      //console.log(resultado);
      showResults(resultado);
    }
    return resultado
  }

  kata14();
  
  function kata15() {
     const nkata = 'kata 15';
     nomeKatas(nkata) 
     let resultado = 0 ;
     for(i = 1; i <= 20; i++){
     resultado = resultado + i;
     //console.log(resultado)
     showResults(resultado)
   }
      return resultado;
  }

  kata15();

function kata16() {
     const nkata = 'kata 16';
     nomeKatas(nkata)
     let resultado = 0;
     let numberSomaArray = 0;
     let numberArray = 0;
     const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
     for(let i = 0; i < sampleArray.length; i++){
     numberArray = sampleArray[i];
     numberSomaArray = numberSomaArray+numberArray
     resultado = numberSomaArray;
    //console.log(resultado);
     showResults(resultado);
}
  return resultado
}

kata16();

function kata17() {
    const nkata = 'kata 17';
    nomeKatas(nkata)
    let resultado = 0;
    let numberMenorArray = 0;
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    for(let i = 0; i < sampleArray.length; i++){
    numberMenorArray = sampleArray[i];
    if(numberMenorArray === 20){
    resultado = numberMenorArray;
    //console.log(resultado);
    showResults(resultado);
  }
}
  return resultado;
}

kata17();

function kata18() {
    const nkata = 'kata 18';
    nomeKatas(nkata)
    let resultado = 0;
    let numberMaiorArray = 0;
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    for(let i = 0; i < sampleArray.length; i++){
    numberMaiorArray = sampleArray[i];
    if(numberMaiorArray === 940){
    resultado = numberMaiorArray;
    //console.log(resultado);
    showResults(resultado);
  }
}
  return resultado;
}

kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
