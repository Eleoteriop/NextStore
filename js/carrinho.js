const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const listaCarrinho = document.querySelector("#lista-carrinho");

function mostrarCarrinho() {

    listaCarrinho.innerHTML = "";

    let totalGeral = 0;

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
        document.querySelector("#total-geral").textContent = "0.00";
        return;
    }

    function nomeTamanho(tamanho) {
        const tamanhos = {
            pequeno: "P",
            medio: "M",
            grande: "G",
            "extra-grande": "GG",
            "duplo-extra-grande": "2GG"
        };
        return tamanhos[tamanho] || tamanho;
    }

    carrinho.forEach(function (produto, indice) {

        let quantidade = produto.quantidade || 1;

        totalGeral += produto.preco * quantidade;

        listaCarrinho.innerHTML += ` 
        
        <div class="card-produto">

        <img src="./img/${produto.time}/${produto.imagem}" alt="${produto.nome}">

        <div class="info-produto">

            <h2>${produto.nome}</h2>

            <p>${produto.time}</p>

            <p>Tamanho: ${nomeTamanho(produto.tamanho)}</p>

            <p>Total: R$ <span id="total-${indice}">
                ${(produto.preco * quantidade).toFixed(2)}
            </span></p>

            <p>Quantidade: <span id="quantidade-${indice}">
                ${quantidade}
            </span></p>

            <div class="botoes-produto">
                <button onclick="diminuir(${indice})">-</button>
                <button onclick="aumentar(${indice})">+</button>
                <button onclick="remover(${indice})">Remover</button>
            </div>

        </div>

    </div>`;
    });

    document.querySelector("#total-geral").textContent = totalGeral.toFixed(2);
}


function aumentar(indice) {

    let quantidade = carrinho[indice].quantidade || 1;

    if (quantidade < 10) {
        carrinho[indice].quantidade = quantidade + 1;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}


function diminuir(indice) {

    let quantidade = carrinho[indice].quantidade || 1;

    if (quantidade > 1) {
        carrinho[indice].quantidade = quantidade - 1;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}

function remover(indice) {

    carrinho.splice(indice, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}

mostrarCarrinho();