<?php
/*
-----------------------------------------------------------------
 ESTE É UM ARQUIVO DE EXEMPLO E NÃO FUNCIONAL.
-----------------------------------------------------------------
 Este script apenas simula a recepção dos dados do formulário.
 Para um checkout real, você DEVE usar um gateway de pagamento 
 (ex: Mercado Pago, Pagar.me, Stripe) e uma API de frete (ex: Correios).
 
 NÃO USE ISSO EM PRODUÇÃO SEM UM GATEWAY SEGURO.
-----------------------------------------------------------------
*/

// Verifica se os dados vieram do formulário (POST)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. OBTER DADOS DO FORMULÁRIO
    // (É importante validar e limpar esses dados antes de usar!)
    $email = $_POST['email'];
    $nome = $_POST['nome'];
    $cep = $_POST['cep'];
    $metodo_pagamento = $_POST['metodo_pagamento'];
    
    // (Você pegaria todos os outros campos: cpf, rua, numero, etc.)

    
    // 2. LÓGICA DE FRETE (Exemplo)
    /*
    $frete = 0;
    if ($cep) {
        // $frete = chamar_api_correios($cep);
        // $frete = 25.00; // Valor simulado
    }
    */
    
    // 3. LÓGICA DE PAGAMENTO (Exemplo)
    
    if ($metodo_pagamento == 'pix') {
        
        // --------------- ONDE O DESENVOLVEDOR COLOCA O CÓDIGO DA API DE PIX ---------------
        // Ex: $resultado_pix = API_MercadoPago::gerarPix($valor_total, $email, $nome);
        // Se o PIX for gerado com sucesso, redireciona para a página de sucesso.
        // ---------------------------------------------------------------------------------
        
        // Simulação:
        $pagamento_sucesso = true; 

    } 
    elseif ($metodo_pagamento == 'card') {
        
        $numero_cartao = $_POST['card-number'];
        $validade_cartao = $_POST['card-expiry'];
        // ... etc ...
        
        // --------------- ONDE O DESENVOLVEDOR COLOCA O CÓDIGO DA API DE CARTÃO ---------------
        // Ex: $resultado_cartao = API_Stripe::processarCartao($valor_total, $numero_cartao, ...);
        // ------------------------------------------------------------------------------------
        
        // Simulação:
        $pagamento_sucesso = true; 
    }

    
    // 4. REDIRECIONAR APÓS O PROCESSAMENTO
    
    if ($pagamento_sucesso) {
        // 5. (Opcional) Salvar pedido no banco de dados.
        
        // Redireciona para a página de "Obrigado"
        header("Location: obrigado.html");
        exit();
    } else {
        // Se o pagamento falhar, volta ao checkout com uma msg de erro
        header("Location: checkout.html?erro=pagamento");
        exit();
    }

} else {
    // Se alguém tentar acessar o PHP diretamente, redireciona de volta
    header("Location: index.html");
    exit();
}
?>