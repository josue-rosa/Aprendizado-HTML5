const meuCabecalho = document.querySelector('h1')
meuCabecalho.textContent = 'Olá, Mundo!'

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
let meuCabecalho = document.querySelector('h1')