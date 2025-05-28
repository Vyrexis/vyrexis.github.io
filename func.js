function crescercard(botao) {
  const card = botao.closest('.card');
  card.classList.toggle('expanded');
  botao.textContent = card.classList.contains('expanded') ? 'Menos' : 'Saber mais';
}

// Função para abrir a tela de login
function abrirLogin() {
  document.querySelector(".contentlogin").style.display = "flex";
}

// Função para enviar os dados e fechar a tela
function enviarDados() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;

  // Verificação simples
  if (!nome || !idade || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  // Mostrar os dados (simulando envio)
  alert(`Dados enviados com sucesso!\n\nNome: ${nome}\nIdade: ${idade}\nEmail: ${email}`);

  // Limpar os campos
  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("email").value = "";

  // Fechar a tela
  document.querySelector(".contentlogin").style.display = "none";
}
