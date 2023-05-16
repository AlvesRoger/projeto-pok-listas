/*
Oque preciso fazer ? ao clicar no botao de modo de tema
mudar para o modo escuro, como fazer:

    objetivo 1 - quando clicar de troca, adicionar a classe modo-escuro
    no body para que os estilos do modo escuro sejam aplicados e mudar a img p lua
        passo 1 - pegar no JS o elemtno HMTL correspondente ao botao de troca de tema
        passo 2 - pegar o no HTML o elemento correspondente ao BODY
        passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        passo 4 - adicionar a classe modo-escuro
        passo 5 - trocar a imagem do botão de alterar tema para lua

    objetivo 2 - quando cliclar no botao troca de tema, caso o body já tenha classe
    modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem para o sol.
        passo 6 - verificar se tem o modo-escuro do BODY
        passo 7 - remover modo-escuro do BODY
        passo 8 - trocar a imagem do botão de alterar tema para o sol
*/

const botaoAlterarTema = document.getElementById("alterar-tema");

const body = document.querySelector ("body");

const imgLua = document.querySelector (".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const ModoEscuro = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (ModoEscuro) {
        imgLua.setAttribute("src", "imagens/sun.png")
    } else {

        imgLua.setAttribute("src", "imagens/moon.png");
    }
});