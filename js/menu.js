const botaoMenu =  document.querySelector("#menu");
const menuLateral =  document.querySelector("#menu-lateral");
const botaFechar =  document.querySelector("#fechar-menu");


botaoMenu.addEventListener("click", function (event) {
    event.preventDefault();

    menuLateral.classList.add("aberto");
});

botaFechar.addEventListener("click", function () {
    menuLateral.classList.remove("aberto");
});