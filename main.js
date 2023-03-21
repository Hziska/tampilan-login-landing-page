const tmplLogin = document.getElementById('container_login')
const page = document.getElementById('page')
const dark = document.getElementById('dark')

let username = document.getElementById('username')
let password = document.getElementById('password')
let body = document.body

let nama = document.getElementById('userr');
let logo = document.getElementById('label')

let userr = localStorage.getItem('username')
page.style.display='none'

function masuk(){
    localStorage.setItem('username' , username.value)

    if(password.value == 0 ){
        alert('tolong isi password')
        return
    }  
    
    tmplLogin.classList.remove('d-flex')
    tmplLogin.classList.add('d-none')

    location.reload()

    page.style.display='block'
}
if(localStorage.getItem('username')){
    logo.textContent=userr
    nama.textContent=userr
    page.style.display='block'
    tmplLogin.classList.remove('d-flex')
    tmplLogin.classList.add('d-none')
}


function logout(){
    localStorage.clear()
    location.reload()
}


function mode(){
    dark.classList.toggle('putih')
    body.classList.toggle('dark')
}
 
