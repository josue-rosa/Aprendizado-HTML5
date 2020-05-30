//const meuCabecalho = document.querySelector('h1')
//meuCabecalho.textContent = 'Olá, Mundo!'

/*
document.querySelector('html').onclick = function(){
    alert('pare de me cutucar!')
}
*/

let minhaImagem = document.querySelector('img')
minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src')
        if(meuSrc === 'imagens/firefox512.png'){
            minhaImagem.setAttribute ('src', 'imagens/hcode512.png')
        }else{
            minhaImagem.setAttribute ('src','imagens/firefox512.png')
        }
}

let meuBotao = document.querySelector('button')
let meuCabecalho2 = document.querySelector('h1')

function defineNomeUsuario(){
    let meuNome = prompt('por favor, digite seu nome')
        if(!meuNome || meuNome === null){
            defineNomeUsuario()
        }else{
            localStorage.setItem('nome', meuNome)
            meuCabecalho2.innerHTML = 'Mozilla é legal, ' + meuNome
        }
}

if(!localStorage.getItem('nome')){
    defineNomeUsuario()
}else{
    let nomeGuardado = localStorage.getItem('nome')
    meuCabecalho2.textContent = 'Mozilla é legal, ' + nomeGuardado
}

meuBotao.onclick = function(){defineNomeUsuario()}

