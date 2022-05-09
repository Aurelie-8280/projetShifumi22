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
var pourcentagePlayer = document.querySelector('.pourcentagePlayer');
var pourcentageComputer = document.querySelector('.pourcentageComputer');

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
        textGameResult.innerHTML="<div style='color:blue'>Egalité!</div>";
        
    } else if(signComputer == 'paper' ){
        divcomputerChoice.innerHTML='<img src="assets/img/feuille.png">'
        textGameResult.innerHTML="<div style='color:red'>Perdu!</div>";
        scoreComputer++;
        computerScore.innerHTML="Score ordinateur : " + scoreComputer;
        pourcentageComputer.innerHTML = Math.round(scoreComputer / (scorePlayer + scoreComputer) * 100) + '%';

    } else if (signComputer == 'scissors' ){
        divcomputerChoice.innerHTML='<img src="assets/img/ciseaux.png">'
        textGameResult.innerHTML="<div style='color:yellow'>Gagné!</div>";
        scorePlayer++;
        playerScore.innerHTML= "Score utilisateur : " + scorePlayer;
        pourcentagePlayer.innerHTML = Math.round(scorePlayer / (scorePlayer + scoreComputer) * 100) + '%';


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
        textGameResult.innerHTML="<div style='color:blue'>Egalité!</div>";
        
        
    } else if(signComputer == 'stone' ){
        divcomputerChoice.innerHTML='<img src="assets/img/pierre.png">'
        textGameResult.innerHTML= "<div style='color:yellow'>Gagné!</div>";
        scorePlayer++;
        playerScore.innerHTML= "Score utilisateur : " + scorePlayer;
        pourcentagePlayer.innerHTML = Math.round(scorePlayer / (scorePlayer + scoreComputer) * 100) + '%';

    } else if (signComputer == 'scissors' ){
        divcomputerChoice.innerHTML='<img src="assets/img/ciseaux.png">'
        textGameResult.innerHTML="<div style='color:red'>Perdu!</div>";
        scoreComputer++;
        computerScore.innerHTML="Score ordinateur : " + scoreComputer;
        pourcentageComputer.innerHTML = Math.round(scoreComputer / (scorePlayer + scoreComputer) * 100) + '%';

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
        textGameResult.innerHTML="<div style='color:yellow'>Gagné!</div>";
        scorePlayer++;
        playerScore.innerHTML= "Score utilisateur : " + scorePlayer;
        pourcentagePlayer.innerHTML = Math.round(scorePlayer / (scorePlayer + scoreComputer) * 100) + '%';
        
    } else if(signComputer == 'stone' ){
        divcomputerChoice.innerHTML='<img src="assets/img/pierre.png">'
        textGameResult.innerHTML="<div style='color:red'>Perdu!</div>";
        scoreComputer++;
        computerScore.innerHTML="Score ordinateur : " + scoreComputer;
        pourcentageComputer.innerHTML = Math.round(scoreComputer / (scorePlayer + scoreComputer) * 100) + '%';

    } else if (signComputer == 'scissors' ){
        divcomputerChoice.innerHTML='<img src="assets/img/ciseaux.png">'
        textGameResult.innerHTML="<div style='color:blue'>Egalité!</div>";

    }


    // function pourcentage() {
    //     var scorePlayer = parseInt(document.querySelector('.scorePlayer').textContent);
    //     var scoreComputer = parseInt(document.querySelector('.scoreComputer').textContent);
      
      
      
        
        
  

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




