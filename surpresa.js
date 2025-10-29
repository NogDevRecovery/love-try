// Espera tudo carregar
document.addEventListener("DOMContentLoaded", () => {
    
    const vaquinhaContainer = document.getElementById("vaquinha-container");
    const vaquinhaImg = vaquinhaContainer.querySelector('img'); // Pega a tag <img> dentro do container

    let currentRotation = 0; // Para controlar a rotação

    // Função para mover a vaquinha
    function moverVaquinha() {
        const telaLargura = window.innerWidth;
        const telaAltura = window.innerHeight;

        // Pega o tamanho da vaquinha (do container)
        const vaquinhaLargura = vaquinhaContainer.offsetWidth;
        const vaquinhaAltura = vaquinhaContainer.offsetHeight;

        let novoX = Math.random() * (telaLargura - vaquinhaLargura);
        let novoY = Math.random() * (telaAltura - vaquinhaAltura);

        // Gera uma nova rotação aleatória (pequena, para não virar de cabeça para baixo)
        currentRotation += (Math.random() - 0.5) * 40; // Rotação entre -20 e +20 graus
        if (currentRotation > 360) currentRotation -= 360;
        if (currentRotation < 0) currentRotation += 360;

        // Aplica a nova posição e rotação
        vaquinhaContainer.style.transform = `translate(${novoX}px, ${novoY}px) rotate(${currentRotation}deg)`;
    }

    // 1. Move a vaquinha para uma posição inicial
    setTimeout(moverVaquinha, 500); // Meio segundo de espera

    // 2. A CADA 8 SEGUNDOS, move a vaquinha novamente
    setInterval(moverVaquinha, 8000);

});