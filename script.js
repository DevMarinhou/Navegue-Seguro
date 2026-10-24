:root {
    --tamanho-fonte: 18px;
    --cor-fundo: #f0f4f8; /* Fundo ligeiramente mais cinza-azulado para não cansar a vista */
    --cor-texto: #1a202c;
    --cor-dica: #2b6cb0;    /* Azul mais moderno */
    --cor-alerta: #c53030;  /* Vermelho de alerta suave */
    --cor-ajuda: #2f855a;   /* Verde acolhedor */
    --cor-cartao: #ffffff;
}

body {
    /* Utiliza fontes modernas e arredondadas dependendo do computador/telemóvel */
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: var(--tamanho-fonte);
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    margin: 0;
    padding: 0;
    line-height: 1.7; /* Espaçamento maior entre as linhas para facilitar a leitura */
}

header {
    background: linear-gradient(135deg, #2b6cb0, #4299e1); /* Efeito de gradiente */
    color: white;
    padding: 30px 20px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

header h1 {
    margin: 0 0 10px 0;
    font-size: 2.2em;
    font-weight: 800;
}

header p {
    font-size: 1.1em;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.9;
}

.acessibilidade {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 15px; /* Espaço entre os botões */
}

.acessibilidade button {
    font-size: 1.2em;
    padding: 10px 25px;
    cursor: pointer;
    background-color: white;
    color: var(--cor-dica);
    border: none;
    border-radius: 25px; /* Botões em formato de "pílula" */
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    transition: transform 0.2s, background-color 0.2s;
}

.acessibilidade button:hover {
    transform: scale(1.05); /* Cresce ligeiramente ao passar o rato */
    background-color: #f8f9fa;
}

main {
    max-width: 800px;
    margin: 30px auto;
    padding: 0 20px;
}

.titulo-secao {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 1.6em;
    color: #2d3748;
    position: relative;
    padding-bottom: 15px;
}

/* Linha decorativa por baixo dos títulos das secções */
.titulo-secao::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: var(--cor-dica);
    border-radius: 2px;
}

/* Estilo padrão para todos os cartões */
.cartao {
    background-color: var(--cor-cartao);
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 12px; /* Cantos arredondados */
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cartao:hover {
    transform: translateY(-3px); /* Levanta ligeiramente o cartão */
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.cartao h3 {
    margin-top: 0;
    font-size: 1.3em;
    display: flex;
    align-items: center;
    gap: 10px; /* Espaço entre o emoji e o texto */
}

.cartao ul {
    padding-left: 20px;
}

.cartao li {
    margin-bottom: 12px;
}

/* Variações de cores dos cartões */
.dica {
    border-left: 8px solid var(--cor-dica);
}
.dica h3 { color: var(--cor-dica); }

.alerta {
    border-left: 8px solid var(--cor-alerta);
}
.alerta h3 { color: var(--cor-alerta); }

.ajuda {
    border-left: 8px solid var(--cor-ajuda);
}
.ajuda h3 { color: var(--cor-ajuda); }

/* Teste Interativo */
.teste-seguranca {
    background-color: #edf2f7;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    margin-top: 50px;
    border: 2px dashed #cbd5e0; /* Borda tracejada */
}

.teste-seguranca h2 {
    color: var(--cor-dica);
    margin-top: 0;
}

.teste-seguranca button {
    display: block;
    width: 100%;
    margin: 15px 0;
    padding: 18px;
    font-size: 1.1em;
    cursor: pointer;
    background-color: var(--cor-dica);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.2s, transform 0.1s;
}

.teste-seguranca button:hover {
    background-color: #1a4a7e;
    transform: translateY(-2px);
}

#resultado-teste {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.2em;
    padding: 10px;
    border-radius: 5px;
}

footer {
    text-align: center;
    padding: 25px;
    background-color: #2d3748;
    color: #e2e8f0;
    margin-top: 50px;
}
