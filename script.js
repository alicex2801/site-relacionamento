window.onload = function () {
    const container = document.getElementById('baloes-container');
    const emojis = ['❤️', '💖', '💘', '💕', '💗', '💓'];

    for (let i = 0; i < 30; i++) {
        const coracao = document.createElement('div');
        coracao.classList.add('coracao-flutuante');
        coracao.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        const left = Math.random() * 100;
        const size = 20 + Math.random() * 30; // 20px a 50px
        const duration = 5 + Math.random() * 5; // 5s a 10s

        coracao.style.left = `${left}%`;
        coracao.style.fontSize = `${size}px`;
        coracao.style.animationDuration = `${duration}s`;

        container.appendChild(coracao);
    }
};


// Parte do quiz
function verificarRespostas() {
    const respostasCorretas = {
        q1: "c",
        q2: "a",
        q3: "a"
    };

    let acertos = 0;
    const form = document.forms["quizForm"];

    for (let pergunta in respostasCorretas) {
        const selecionado = form[pergunta].value;
        if (selecionado === respostasCorretas[pergunta]) {
            acertos++;
        }
    }

    const resultado = document.getElementById("resultadoQuiz");
    const animacao = document.getElementById("animacaoFinal");

    if (acertos === 3) {
        document.body.style.backgroundColor = "#d4fdd4"; // verde claro
        resultado.innerHTML = "VOCÊ ACERTOU TUDO! 🥹💖";
        animacao.style.display = "block"; // mostra imagem
    } else {
        document.body.style.backgroundColor = "#ffe5e5"; // vermelho claro
        resultado.innerHTML = `Você acertou ${acertos} de 3. 😬 Tenta de novo!`;
        animacao.style.display = "none"; // esconde imagem
    }
}
