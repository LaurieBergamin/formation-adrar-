/*Exercice 12 Boucles :
Pour son nouveau spectacle, un mentaliste a besoin d'un programme pour s'exercer à deviner un nombre entre 1 et 100.
Pour réussir son tour il doit deviner le nombre en moins de 10 tentatives.
A chaque tour il va demander si le nombre qu’il énonce est plus petit ou plus grand que le nombre choisi.
-S'il réussit à découvrir le nombre en moins de 10 essais 
-> son entrainement acharné a payé, 
Sinon 
-> il est un mauvais mentaliste et il va devoir changer de métier.
Il souhaite savoir en cas de réussite (en moins de 10 essais) 
-> le nombre d'essai qu'il a effectué pour trouver le nombre.*/
let nbr = prompt("trouver un nombre entre 1 et 100");
let nbraTrouver = 60;
let nbrEssais = 9;
while (nbr !=60 && nbrEssais>0){
    nbrEssais--;
    console.log(nbrEssais);
    nbr = prompt("trouver un nombre entre 1 et 100");
if ();
}

//CORRECTION
//nombre random à trouver
let nbrATrouve = numberRandom(100);
console.log(nbrATrouve);
//nombre de tour de jeu
let tour = 1;
//première tentative
let nbrTrouve = prompt("Saisir le nombre à trouver");
//boucle pour le jeu
while(nbrATrouve != nbrTrouve && tour < 10){
    //condition si le nombre est trop grand
    if(nbrTrouve > nbrATrouve){
        alert("Saisir un nombre plus petit");
    }
    //condition si le nombre est trop petit
    if(nbrTrouve < nbrATrouve){
        alert("Saisir un nombre plus Grand");
    }
    //incrémenter le tour
    tour++;
    //redemander la saisie d'un nombre
    nbrTrouve = prompt("Saisir le nombre à trouver");
}
//condition de victoire
if(nbrATrouve==nbrTrouve){
    alert("Bravo tu as gagné en : "+tour+" tours");
}
//condition de défaite
if(tour > 9){
    alert("Vous avez perdu vous pouvez changer de métier !");
}
//fonction qui génére un nombre random
function numberRandom(nbr){
    return Math.floor((Math.random() * nbr) + 1);
}