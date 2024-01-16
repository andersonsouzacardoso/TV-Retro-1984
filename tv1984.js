//Aqui estão as variaveis que vão armazenar cada gif que representa os canais.
let canal12 = document.getElementById('canal')
let canal10 = document.getElementById('band')
let canal07 = document.getElementById('tve')
let canal05 = document.getElementById('sbt')
let canal04 = document.getElementById('record')
let canalAv = document.getElementById('rbs')
let ligar = document.getElementById('lig')
let desligar = document.getElementById('desl')

//Cada função reperesenta um canal com imagem diferente.
function canalDoze(){
    canal12.src = 'https://i.pinimg.com/originals/f2/42/ba/f242bac4512325947a7284b1afd4d32b.gif'
}

function canalDez(){
    canal12.src = 'https://i.pinimg.com/originals/f5/2d/56/f52d56f8b42ffba35178d969615e07ca.gif'
}

function canalSet(){
    canal12.src = 'https://i.pinimg.com/originals/86/1a/96/861a961d8a934a516de2e7156bc10803.gif'
}

function canalCinco(){
    canal12.src = 'https://i.pinimg.com/originals/7a/85/8f/7a858f33fc7b1c216854d699e0e596e7.gif'
}

function canalQuatro(){
    canal12.src = 'https://media.tenor.com/9eXjRJxrgxkAAAAd/super-mario-world-mario.gif'
}
function botaoLigar(){
    canal12.src = 'https://www.blogderocha.com.br/wp-content/uploads/2017/02/fora-do-ar.gif'
}
function botaoDesligar(){
    canal12.src = ''
}

//Aqui esta o evento de click, responsavel por chamar a função através da variavel que armazenou o gif.
 canalAv.addEventListener('click' , canalDoze)   
canal10.addEventListener('click', canalDez)
canal07.addEventListener('click', canalSet)
canal05.addEventListener('click', canalCinco)
canal04.addEventListener('click', canalQuatro)
ligar.addEventListener('click', botaoLigar)
desligar.addEventListener('click', botaoDesligar)