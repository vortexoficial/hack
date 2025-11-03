document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE SELEÇÃO DE PAGAMENTO (PIX/Cartão) ---
    const pixButton = document.getElementById('pix-button');
    const cardButton = document.getElementById('card-button');
    const pixContent = document.getElementById('pix-content');
    const cardContent = document.getElementById('card-content');
    const paymentMethodInput = document.getElementById('metodo_pagamento');

    pixButton.addEventListener('click', () => {
        pixButton.classList.add('active');
        cardButton.classList.remove('active');
        
        pixContent.classList.add('active');
        cardContent.classList.remove('active');
        
        paymentMethodInput.value = 'pix';
    });

    cardButton.addEventListener('click', () => {
        cardButton.classList.add('active');
        pixButton.classList.remove('active');

        cardContent.classList.add('active');
        pixContent.classList.remove('active');
        
        paymentMethodInput.value = 'card';
    });

    // --- LÓGICA DE SELEÇÃO DE PRODUTO E PREÇO ---
    const kitRadio = document.getElementById('kit-hack');
    const caixaRadio = document.getElementById('caixa-hack');
    
    const productNameEl = document.getElementById('product-name');
    const productPriceEl = document.getElementById('product-price');
    const totalPriceEl = document.getElementById('total-price');
    const productImageEl = document.getElementById('product-image');

    // Preços de exemplo
    const precos = {
        kit: {
            nome: "Kit Lançamento HACK",
            preco: 129.90,
            imagem: "img/hack-kit.png" // Imagem do kit
        },
        caixa: {
            nome: "Caixa Avulsa (12 unid.)",
            preco: 89.90, // Preço de exemplo
            imagem: "img/hack-flavors.png" // Imagem das caixas
        }
    };

    function atualizarResumo() {
        let produtoSelecionado;

        if (kitRadio.checked) {
            produtoSelecionado = precos.kit;
        } else {
            produtoSelecionado = precos.caixa;
        }

        // Atualiza a imagem, nome e preços
        productImageEl.src = produtoSelecionado.imagem;
        productNameEl.innerText = produtoSelecionado.nome;
        
        const precoFormatado = `R$ ${produtoSelecionado.preco.toFixed(2).replace('.', ',')}`;
        productPriceEl.innerText = precoFormatado;
        
        // (Aqui entraria a lógica de frete, por enquanto é 0)
        const frete = 0.00; 
        const total = produtoSelecionado.preco + frete;
        
        totalPriceEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // Adiciona os "escutadores" de eventos
    kitRadio.addEventListener('change', atualizarResumo);
    caixaRadio.addEventListener('change', atualizarResumo);
});