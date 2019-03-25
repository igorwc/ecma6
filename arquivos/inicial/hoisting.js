var exibeMensagem = function() {
    var mensagemForaDoIf = 'externo';

    if (true) {
        var mensagemDentroDoIf = 'interno';
        console.log(mensagemDentroDoIf); // interno
    }

    console.log(mensagemForaDoIf); // externo
    console.log(mensagemDentroDoIf); // interno
}
exibeMensagem();
