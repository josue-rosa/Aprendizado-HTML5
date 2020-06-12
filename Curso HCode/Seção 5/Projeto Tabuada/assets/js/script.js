document.getElementById('btn-submit').addEventListener('click', e  => {
    console.log('O botão foi clicado')
} )

document.getElementById('form-login').addEventListener('mouseenter', e =>{
    console.log('O mouse entrou no formulario')
})

document.querySelector('#form-login').addEventListener('mouseleave', e =>{
    console.log('O mouse saiu do formulario')
})

document.querySelector('#form-login').addEventListener('submit', e=>{
    e.preventDefault()
    
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    let json = {
        email,
        password
    }
    if (!json.email){
        console.error('Campo email deve ser preenchido')
    }else if (!json.password){
        console.error('O campo password deve ser preenchido')
    }else{
        console.info('Dados validados com sucesso!')
    }
})

