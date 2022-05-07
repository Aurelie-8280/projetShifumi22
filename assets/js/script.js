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
var scorePlayer=0;
var scoreComputer=0;
var playerScore=document.querySelector('.machinScore');
var computerScore=document.querySelector('.computerScore');

// var  timerResult=setTimeout(timerObject,1000);
textGameResult =document.querySelector('.textGameResult');


// écoute du choix de l'utilisateur STONE
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
        scoreComputer++;
        computerScore.innerHTML=scoreComputer;

    } else if (signComputer == 'scissors' ){
        divcomputerChoice.innerHTML='<img src="assets/img/ciseaux.png">'
        textGameResult.innerHTML='Gagné!';
        scorePlayer++;
        playerScore.innerHTML= scorePlayer;


    }
})



// écoute du choix de l'utilisateur PAPER
paper.addEventListener('click', function(){
    machinChoice=document.querySelector('.machinChoice');
    divcomputerChoice=document.querySelector('.computerChoice')
    machinChoice.innerHTML =paper.outerHTML;


    // tableau pour réponse aléatoire
    var computerChoice= ['stone', 'paper', 'scissors'];

    // paramètres rép aléatoire
    var computerChosenSign=Math.floor(Math.random()*computerChoice.length);
    var signComputer=computerChoice[computerChosenSign];

    if(signComputer == 'paper' ){
        divcomputerChoice.innerHTML='<img src="assets/img/feuille.png">'
        textGameResult.innerHTML='Egalité!';
        
    } else if(signComputer == 'stone' ){
        divcomputerChoice.innerHTML='<img src="assets/img/pierre.png">'
        textGameResult.innerHTML='Gagné';
        scorePlayer++;
        playerScore.innerHTML= scorePlayer;

    } else if (signComputer == 'scissors' ){
        divcomputerChoice.innerHTML='<img src="assets/img/ciseaux.png">'
        textGameResult.innerHTML='Perdu!';
        scoreComputer++;
        computerScore.innerHTML=scoreComputer;

    }
})

// écoute du choix de l'utilisateur SCISSORS
scissors.addEventListener('click', function(){
    machinChoice=document.querySelector('.machinChoice');
    divcomputerChoice=document.querySelector('.computerChoice')
    machinChoice.innerHTML =scissors.outerHTML;


    // tableau pour réponse aléatoire
    var computerChoice= ['stone', 'paper', 'scissors'];

    // paramètres rép aléatoire
    var computerChosenSign=Math.floor(Math.random()*computerChoice.length);
    var signComputer=computerChoice[computerChosenSign];

    if(signComputer == 'paper' ){
        divcomputerChoice.innerHTML='<img src="assets/img/feuille.png">'
        textGameResult.innerHTML='Gagné!';
        scorePlayer++;
        playerScore.innerHTML= scorePlayer;
        
    } else if(signComputer == 'stone' ){
        divcomputerChoice.innerHTML='<img src="assets/img/pierre.png">'
        textGameResult.innerHTML='Perdu';
        scoreComputer++;
        computerScore.innerHTML=scoreComputer;

    } else if (signComputer == 'scissors' ){
        divcomputerChoice.innerHTML='<img src="assets/img/ciseaux.png">'
        textGameResult.innerHTML='Egalité!';

    }
})






// Modale règles du jeu

var modal = document.querySelector("#myModal");

// Get the button that opens the modal
var btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



