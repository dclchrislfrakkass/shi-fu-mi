//déclaration des variables
var joueur;
var ia;

//le joueur fait son choix et affiche le résultat

function choixPierre(){
    document.getElementById("x").src="images/pierre.png";
    joueur = 0;
}
function choixFeuille(){
    document.getElementById("x").src="images/feuille.png";
    joueur = 1;
}
function choixCiseaux(){
    document.getElementById("x").src="images/ciseaux.png";
    joueur = 2;
}


//l'ia fait son choix et affiche le résultat
function iaTake() {
    ia = Math.floor(Math.random() *3);
    console.log("ia " +ia);
    console.log("humain " +joueur);
    if (ia ==0) {
        document.getElementById("xIa").src="images/pierre.png";
    }
    else if (ia == 1) {
        document.getElementById("xIa").src="images/feuille.png";
    }
    else {
        document.getElementById("xIa").src="images/ciseaux.png";
    }
}

//comparaison entre les deux choix
window.addEventListener("click", function compare() {
    if (ia == joueur) {
        console.log("Match Nul !");
            function result(){
            document.getElementsById("div#resu").style.color="blue";
            document.getElementsById("div#resu").innerHTML="EGALITÉ !";
        }
    }
    else if (ia == 0 && joueur >0 || joueur !==1){
        console.log("L'IA gagne !");
    }
    else if (ia == 2 && joueur <2 || joueur >0){
        console.log("L'IA Gagne !");
    }
    else if (ia == 1 && joueur == 1){
        console.log("L'IA Gagne!");
    }
    else {
        console.log("l'humain Gagne!");
    }
}
);



//afficher le resultat en texte




//nouvelle partie?

