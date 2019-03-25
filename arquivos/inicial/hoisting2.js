var exibeMensagem2 = function() {
    var mensagemForaDoIf = 'externo';
  
    if(true) {
      let mensagemDentroDoIf = 'interno';
      console.log(mensagemDentroDoIf); // interno
    }
  
    console.log(mensagemForaDoIf); // externo
    console.log(mensagemDentroDoIf); // interno
}
exibeMensagem2();
