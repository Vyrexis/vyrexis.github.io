function crescercard(botao) {
  const card = botao.closest('.card');
  card.classList.toggle('expanded');
  botao.textContent = card.classList.contains('expanded') ? 'Menos' : 'Saber mais';
}

// Exibe o formulário ao clicar no botão "Sugerir Produto"
document.addEventListener('DOMContentLoaded', () => {
    const botaoSugerir = document.querySelector('.botaosugerir');
    const formSugestao = document.getElementById('formSugestao');

    botaoSugerir.addEventListener('click', () => {
        formSugestao.style.display = 'flex';
    });

    // Sugestões automáticas de produtos ao digitar
    const produtos = ['iPhone 14', 'iPhone 13', 'Galaxy S23', 'Galaxy A54', 'Redmi Note 12', 'Moto G82', 'Poco X5', 'Asus ROG Phone'];

    const inputProduto = document.getElementById('inputProduto');
    inputProduto.addEventListener('input', () => {
        const valor = inputProduto.value.toLowerCase();
        const sugestao = produtos.find(prod => prod.toLowerCase().startsWith(valor));
        if (sugestao && valor) {
            inputProduto.value = sugestao;
        }
    });
});

// Envia as informações preenchidas
function enviarSugestao() {
    const produto = document.getElementById('inputProduto').value;
    const marca = document.getElementById('inputMarca').value;
    const tipo = document.getElementById('inputTipo').value;

    if (!produto || !marca || !tipo) {
        alert('Preencha todos os campos.');
        return;
    }

    const dados = `
📦 Sugestão de Produto:
- Produto: ${produto}
- Marca: ${marca}
- Tipo: ${tipo}
`;

    // Aqui você pode enviar para o WhatsApp, API, ou salvar localmente
    alert(dados); // Exibe como exemplo
}
