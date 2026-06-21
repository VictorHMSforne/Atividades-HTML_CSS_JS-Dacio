function revelar() {
    // 1. Alterar o src da imagem principal
    const imgPrincipal = document.getElementById('img-jogador');
    if (imgPrincipal) {
        imgPrincipal.src = 'img/_vinicius_junior.png';
    }

    // 2. Substituir os spans pelas informações do jogador
    const dados = {
        'nome': 'Vinícius José Paixão de Oliveira Júnior',
        'nascimento': '12/07/2000 (25 anos)',
        'altura': '1,76 m',
        'posicao': 'Ponta-esquerda / Atacante',
        'rank': '9,5'
    };

    // Atualiza cada span pelo ID
    for (const [id, valor] of Object.entries(dados)) {
        const span = document.getElementById(id);
        if (span) {
            span.textContent = valor;
        }
    }

    // 3. Remover classe CSS dos elementos afetados
    const elementos = document.querySelectorAll('.placeholder, #img-jogador, .card-text');
    elementos.forEach(el => {
        el.classList.remove('placeholder');   // remove classe placeholder
        el.classList.add('card-text');        // adiciona classe card-text
    });

    // 4. Alternar classe específica para finalizar estilização
    const cards = document.querySelectorAll('.card-jogador, .info-card');
    cards.forEach(card => {
        card.classList.remove('placeholder');
        card.classList.add('card-text');
    });
}