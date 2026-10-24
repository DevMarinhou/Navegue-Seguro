// Funcionalidade de aumentar e diminuir a letra
const btnAumentar = document.getElementById('aumentar-texto');
const btnDiminuir = document.getElementById('diminuir-texto');
const rootElement = document.documentElement;

let tamanhoAtual = 18;

btnAumentar.addEventListener('click', () => {
    if (tamanhoAtual < 30) { 
        tamanhoAtual += 2;
        rootElement.style.setProperty('--tamanho-fonte', `${tamanhoAtual}px`);
    }
});

btnDiminuir.addEventListener('click', () => {
    if (tamanhoAtual > 14) { 
        tamanhoAtual -= 2;
        rootElement.style.setProperty('--tamanho-fonte', `${tamanhoAtual}px`);
    }
});

// Funcionalidade do teste de segurança
function verificarResposta(correta) {
    const resultado = document.getElementById('resultado-teste');
    
    if (correta) {
        resultado.style.color = 'green';
        resultado.innerText = 'Parabéns! Você agiu certo. Bancos não pedem para clicar em links assim.';
    } else {
        resultado.style.color = '#d9534f';
        resultado.innerText = 'Cuidado! Isso é um golpe. Nunca clique em links enviados por mensagens de celular.';
    }
}