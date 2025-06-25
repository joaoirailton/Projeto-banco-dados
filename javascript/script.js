//COLOCAR EVENTOS NOS BOTÕES
const area = window.document.getElementsByTagName('textarea')[0]
const btn = window.document.getElementsByTagName('button')[0]

area.addEventListener('mouseover',acao)
btn.addEventListener('click',salvar)

function salvar(){
    window.alert('ola')
}
function acao(){
    document.body.style.backgroundColor = 'orange'
}