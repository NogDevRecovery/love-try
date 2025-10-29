// Espera o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {

    const infoBox = document.getElementById("info-box");

    // Descrições para cada parte (títulos ajustados para bater com a imagem)
    const descricoes = {
        'cabeca': {
            titulo: 'Cabeça',
            texto: 'Inclui o cérebro, olhos, orelhas, nariz e boca. Essencial para alimentação e sentidos.'
        },
        'pescoco': {
            titulo: 'Pescoço',
            texto: 'Conecta a cabeça ao tronco, contendo a traqueia, esôfago e importantes vasos sanguíneos.'
        },
        'dorso': {
            titulo: 'Dorso',
            texto: 'Região superior do tronco, composta pelas vértebras torácicas e musculatura associada.'
        },
        'cauda': {
            titulo: 'Cauda',
            texto: 'Extensão da coluna vertebral, usada para equilíbrio e para espantar insetos.'
        },
        'flanco': {
            titulo: 'Flanco',
            texto: 'Região lateral do abdômen, entre as costelas e a pelve. Importante para avaliar a condição corporal e o rúmen.'
        },
        'anca': {
            titulo: 'Anca',
            texto: 'Região posterior do dorso, sobre os ossos da pelve. Importante na locomoção e no parto.'
        },
        'membro-toracico': {
            titulo: 'Membro Torácico',
            texto: 'Suporta a maior parte do peso do animal. Composto por escápula, úmero, rádio, ulna, carpo, metacarpo e falanges.'
        },
        'membro-pelvico': {
            // Note que a imagem tem "Membro Pélvico" E "Hindlimb"
            titulo: 'Membro Pélvico (Hindlimb)',
            texto: 'Principal fonte de propulsão. Composto por fêmur, tíbia, fíbula, tarso, metatarso e falanges.'
        },
        'ubere': {
            titulo: 'Úbere',
            texto: 'A glândula mamária em fêmeas, responsável pela produção de leite.'
        }
        // O 'coracao' é tratado separadamente
    };

    // Pega TODAS as partes clicáveis do SVG
    const todasAsPartes = document.querySelectorAll(".parte-corpo");

    // Adiciona um "ouvinte" de clique para CADA parte
    todasAsPartes.forEach(parte => {
        
        parte.addEventListener("click", (e) => {
            
            // Impede que o clique "vaze" para a imagem (se houver links)
            e.stopPropagation(); 
            
            const idDaParte = parte.id;

            // --- AÇÃO ESPECIAL PARA O CORAÇÃO ---
            if (idDaParte === 'coracao') {
                // Redireciona para a sua outra página
                window.location.href = 'surpresa.html'; 
            } else {
                // Ação normal para as outras partes
                const info = descricoes[idDaParte];

                if (info) {
                    infoBox.innerHTML = `
                        <h2>${info.titulo}</h2>
                        <p>${info.texto}</p>
                    `;
                } else {
                    infoBox.innerHTML = `
                        <h2>${info.titulo || idDaParte}</h2>
                        <p>Descrição não encontrada.</p>
                    `;
                }
            }
        });
    });
});