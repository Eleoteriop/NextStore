const parametros = new URLSearchParams(window.location.search);

const idProduto = parametros.get("id");

const produto = produtos.find(function (produto) {
    return produto.id === idProduto;
});

if (!produto) {
    alert("Produto não encontrado.");
    window.location.href = "./produtos.html";
    throw new Error("Produto não encontrado.");
}

console.log(produto);

document.querySelector("#produto-imagem").src =
    "./img/" + produto.time + "/" + produto.imagem;

document.querySelector("#produto-imagem").alt = produto.nome;

document.querySelector("#produto-nome").textContent = produto.nome;

const botaoCarrinho = document.querySelector("#btn-adicionar-carrinho");

botaoCarrinho.addEventListener("click", function () {

    const tamanho = document.querySelector("#produto-tamanho").value;
    const quantidade = Number(document.querySelector("#produto-quantidade").value);

    if (quantidade < 1 || quantidade > 10) {
        alert("A quantidade deve ser somente entre 1 a 10 camisas.");
        return;
    }

    if (tamanho === "") {
        alert("Por favor, escolha um tamanho.");
        return;
    }

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find(function (item) {
        return item.id === produto.id && item.tamanho === tamanho;
    })

    if (produtoExistente) {
        produtoExistente.quantidade = Math.min(
            produtoExistente.quantidade + quantidade, 10
        );
    } else {
        const produtoCarrinho = {
            ...produto,
            tamanho: tamanho,
            quantidade: quantidade
        };

        carrinho.push(produtoCarrinho);
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
});

document.querySelector("#produto-time").textContent = produto.time;

document.querySelector("#produto-descricao").textContent =
    "Cada time tem as suas cores, uma identidade inconfundível que a diferencia do resto da liga. Honrando uma rica herança de basquete, esta camisa do " +
    produto.time +
    ", modelo: " +
    produto.nome +
    ". Ideal para quem é fã de basquete e da história com a franquia. É inspirada no que os profissionais usam na quadra, desde detalhes do time. Enquanto você representa o seu jogador favorito e o jogo que você ama.";

const valorParcela = produto.preco / 3;

document.querySelector("#produto-preco").textContent =
    "Preço R$ " +
    produto.preco.toFixed(2).replace(".", ",") +
    " no Pix ou 3x de R$ " +
    valorParcela.toFixed(2).replace(".", ",") +
    " sem juros";
