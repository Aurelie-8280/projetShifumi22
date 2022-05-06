//déclaration des variables générales
var buttonValidName = document.querySelector('.valid')

var enterName = document.querySelector('#enterName')
var game = document.querySelector('#game')
var resultGame = document.querySelector('#resultGame')
var win = document.querySelector('#win')
var lose = document.querySelector('#lose')
var equality = document.querySelector('#equality')
var score = document.querySelector('#score')
var navbar = document.querySelector('#navbar')
var textWelcome = document.querySelector('.textWelcome')


//écoute du bouton valider pour entrer dans le jeu
buttonValidName.addEventListener('click', function(){
    var getName = document.querySelector('#Pseudo').value;
    // console.log(getName)
    enterName.style.display = 'none'
    navbar.style.display = 'block'
    game.style.display = 'block'
    textWelcome.innerHTML = '<p>Bienvenue</p> ' + getName +' ! <p>pour jouer,</p><p>clique,</p><p>sur un gant</p>';
})

