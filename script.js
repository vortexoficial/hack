// --- SCRIPT DO LOADER ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => {
                if (loader) loader.remove();
            }, 400);
        }
    }, 2500); // Tempo do loader
});

// --- SCRIPT DE ANIMAÇÃO ON SCROLL (FADE-IN) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));


// --- SCRIPT DE TROCA DO KIT (MASCULINO/FEMININO) ---

// Espera o documento carregar para rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Defina os caminhos das suas imagens
    const imagemMasculina = 'img/kitmasc.png'; // <- MANTENHA A IMAGEM ATUAL AQUI
    const imagemFeminina = 'img/kitfem.png'; // <- COLOQUE O NOME DA SUA NOVA IMAGEM FEMININA

    // 2. Defina o HTML das listas de itens (SEM BOLD)
    const listaMasculinaHTML = `
        <li><i class="ph-thin ph-package"></i> Sachezão HACK</li>
        <li><i class="ph-thin ph-cube"></i> Caixa de Gel com 12 sachês</li>
        <li><i class="ph-thin ph-t-shirt"></i> Camisa Exclusiva</li>
        <li><i class="ph-thin ph-baseball-cap"></i> Boné Exclusivo</li>
        <li><i class="ph-thin ph-flask"></i> Garrafa Dobrável</li>
        <li><i class="ph-thin ph-sticker"></i> Adesivos Oficiais HACK</li>
    `;

    const listaFemininaHTML = `
        <li><i class="ph-thin ph-package"></i> Sachezão HACK</li>
        <li><i class="ph-thin ph-cube"></i> Caixa de Gel com 12 sachês</li>
        <li><i class="ph-thin ph-t-shirt"></i> Top e Short</li>
        <li><i class="ph-thin ph-baseball-cap"></i> Boné Exclusivo</li>
        <li><i class="ph-thin ph-flask"></i> Garrafa Dobrável</li>
        <li><i class="ph-thin ph-sticker"></i> Adesivos Oficiais HACK</li>
    `;

    // 3. Pegue os elementos da página
    const radioMasculino = document.getElementById('kit-masculino');
    const radioFeminino = document.getElementById('kit-feminino');
    
    const kitImage = document.getElementById('kit-dynamic-image');
    const kitList = document.getElementById('kit-dynamic-list');

    // 4. Função para atualizar o conteúdo
    function atualizarKit(opcao) {
        // Adiciona a classe para dar o efeito de fade-out
        kitImage.classList.add('kit-content-updating');
        kitList.classList.add('kit-content-updating');

        // Espera o fade-out terminar (metade do tempo da transição do CSS)
        setTimeout(() => {
            if (opcao === 'mas') {
                kitImage.src = imagemMasculina;
                kitList.innerHTML = listaMasculinaHTML;
            } else if (opcao === 'fem') {
                kitImage.src = imagemFeminina;
                kitList.innerHTML = listaFemininaHTML;
            }

            // Remove a classe para dar o efeito de fade-in
            kitImage.classList.remove('kit-content-updating');
            kitList.classList.remove('kit-content-updating');
        }, 150); // 150ms (metade de 0.3s da transição)
    }

    // 5. Adiciona os "escutadores" de clique
    // Verifica se os elementos existem antes de adicionar os 'listeners'
    // (Isso evita erros caso o script rode em outra página, como a de checkout)
    if (radioMasculino && radioFeminino && kitImage && kitList) {
        radioMasculino.addEventListener('change', () => {
            if (radioMasculino.checked) {
                atualizarKit('mas');
            }
        });

        radioFeminino.addEventListener('change', () => {
            if (radioFeminino.checked) {
                atualizarKit('fem');
            }
        });
    }

});