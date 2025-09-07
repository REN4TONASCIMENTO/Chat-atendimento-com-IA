function responder() {
    const input = document.getElementById("user-input");
    const mensagens = document.getElementById("chat-mesages");

    const pergunta = input.value.trim();
    if (pergunta === "") return;

    mensagens.innerHTML += `<p><b>Você:</b>${pergunta}</p>`;

    let resposta = "Desculpe, não entendi sua pergunta.";

    if (pergunta.toLowerCase().includes("horário")) {
        resposta = "Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.";

    } else if (pergunta.toLowerCase().includes("preço")) {
        resposta = "Nossos preços variam conforme o produto. Por favor, visite nossa página de produtos para mais informações.";
    } else if (pergunta.toLowerCase().includes("curso")) {
        resposta = "Oferecemos cursos de programação, design gráfico e marketing digital. Visite nossa seção de cursos para mais detalhes.";
    }

    mensagens.innerHTML += `<p><b>ChatBot:</b> ${resposta}</p>`;
    input.value = "";
    mensagens.scrollTop = mensagens.scrollHeight;
}

const input = document.getElementById("user-input");
input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            responder();
            event.preventDefault();
        }
    })