//déclaration des variables
var joueur;
var ia;


//le joueur fait son choix

function choixPierre(){
     document.getElementById("x").src="images/pierre.png"
}
function choixFeuille(){
    document.getElementById("x").src="images/feuille.png"
}
function choixCiseaux(){
    document.getElementById("x").src="images/ciseaux.png"
}

// function choixPierre() {
//     var pierre = document.getElementsByClassName("playerChoice");
//     pierre[0].innerHTML = pPierre;
// }









// document.getElementsByClassName("pierre").onclick = pierre;
// function pierre() {
//    document.getElementsByClassName("playerChoice").innerHTML = "0";
// }
// document.getElementsByClassName("feuille").onclick = feuille;
// function pierre() {
//    document.getElementsByClassName("playerChoice").innerHTML = "0";
// }


//l'ia fait son choix
function iaTake() {
    ia = Math.floor(Math.random() *2)+1;
    console.log(ia);
}



//function playerTake(){


//}

//affichage des choix sur la page

//comparaison entre les deux choix


//afficher le resultat


//résultat de l'IA
// function printIaResult() {
//     document.getElementById("iaChoice").innetHTML = ia;
//     console.log(ia);
//     // document.write(ia);
// }


//nouvelle partie?

