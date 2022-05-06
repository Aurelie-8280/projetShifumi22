//déclaration des variables générales
var buttonValidName = document.querySelector('.valid')
var enterName = document.querySelector('#enterName')
var resultGame = document.querySelector('#resultGame')
var navbar = document.querySelector('#navbar')



//écoute du bouton valider pour entrer dans le jeu
buttonValidName.addEventListener('click', function(){
    var getName = document.querySelector('#Pseudo').value;
    // console.log(getName)
    enterName.style.display = 'none'
    navbar.style.display = 'block'
    resultGame.style.display = 'block'
    // textWelcome.innerHTML = '<p>Bienvenue</p> ' + getName +' ! <p>pour jouer,</p><p>clique,</p><p>sur un gant</p>';
})

// variable des gants


var stone=document.querySelector('.stoneImg')
var paper=document.querySelector('.paperImg')
var scissors=document.querySelector('.scissorsImg')
var choiceResult=document.querySelector('.choiceResult');
// var  timerResult=setTimeout(timerObject,1000);
textGameResult =document.querySelector('.textGameResult');


// écoute du choix de l'utilisateur
stone.addEventListener('click', function(){
    machinChoice=document.querySelector('.machinChoice');
    divcomputerChoice=document.querySelector('.computerChoice')
    machinChoice.innerHTML =stone.outerHTML;
    // function timerObject(){

    // }

    // tableau pour réponse aléatoire
    var computerChoice= ['stone', 'paper', 'scissors'];

    // paramètres rép aléatoire
    var computerChosenSign=Math.floor(Math.random()*computerChoice.length);
    var signComputer=computerChoice[computerChosenSign];
    console.log(signComputer)
    if(signComputer == 'stone' ){
        divcomputerChoice.innerHTML='<img src="assets/img/pierre.png">'
        textGameResult.innerHTML='Egalité!';
        
    } else if(signComputer == 'paper' ){
        divcomputerChoice.innerHTML='<img src="assets/img/feuille.png">'
        textGameResult.innerHTML='Perdu!';

    } else if (signComputer == 'scissors' ){
        divcomputerChoice.innerHTML='<img src="assets/img/ciseaux.png">'
        textGameResult.innerHTML='Gagné!';

    }
})



