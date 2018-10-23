//déclaration des variables
var joueur;
var ia;
var win;

//le joueur fait son choix et affiche le résultat

function choixPierre(){
    document.getElementById("x").src="images/pierre.png";
    joueur = 0;
    iaTake();
}
function choixFeuille(){
    document.getElementById("x").src="images/feuille.png";
    joueur = 1;
    iaTake();
}
function choixCiseaux(){
    document.getElementById("x").src="images/ciseaux.png";
    joueur = 2;
    iaTake();
}


//l'ia fait son choix et affiche le résultat
function iaTake() {
    ia = Math.floor(Math.random() *3);
    console.log("ia " +ia);
    console.log("humain " +joueur);
    printIa()
}

function printIa() {
    if (ia == 0) {
        document.getElementById("xIa").src="images/pierre.png";
    }
    else if (ia == 1) {
        document.getElementById("xIa").src="images/feuille.png";
    }
    else {
        document.getElementById("xIa").src="images/ciseaux.png";
    }
    compare();
}
// //comparaison entre les deux choix
function compare() {
    if (joueur == ia) {
        console.log("ÉGALITÉ")
    }
}
//     if((joueur==0) && (ia==2) || (joueur==1) && (ia==0) || (joueur==2) && (ia==1)){
//         alert("test gagné");
//         function result(){
//         document.getElementById("resu").innerHTML="GAGNÉ !"
//         }
//     }
//     else if ((ia==0) && (joueur==2) || (ia==1) && (joueur==0) || (ia==2) && (joueur==2)){
//         alert("test perdu");
//         function result(){
//         document.getElementById("resu").innerHTML="PERDU !"
//     }
// }
//     else if ( ia ={
//         alert("test égalité");
//         function result(){
//         document.getElementById("resu").innerHTML="EGALITÉ !"
//     }
// }
// }
// }
// result();





//nouvelle partie?

