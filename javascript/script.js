//DECLARAÇÕES
const conteudo = document.body;
const menu = document.getElementsByTagName('header');

//ADICIONA EVENTO
menu[0].addEventListener('mouseover', abrir)
menu[0].addEventListener('mouseout', ()=>{
    conteudo.removeAttribute('id', 'body')
})

//FUNÇÃO
function abrir(){
    conteudo.setAttribute('id', 'body');
}   