//Ecrivez un algorithme qui va interchanger la valeur de 2 variables nb1 et nb2
let nb1 = "12";
let nb2 = "6";
let nb3 = "12";//on aurait pu l'appeller "temp" pour temporaire
nb3 = nb1;
nb1 = nb2;
nb2 = nb3;

//Exercice 2 : Les tests :
//Ecrire un algorithme qui prend un nombre (variable nbr1) en entrée affiche dans la console si le nombre est positif ou négatif.
//let nbr1 = 15
    if (nbr1 > 0){
        console.log("positif");
    }else{
        console.log("négatif");
    }
//Correction
/*
    Variables 
*/
let nbr1 = prompt("Saisir un nombre");
/* 
    Logique 
*/
//test si nbr1 est positif
if(nbr1 > 0){
    console.log("Positif");
}
//test sinon si nbr 1 est égal à 0
else if(nbr1 == 0){
    console.log("Egale 0");
}
//test sinon si nbr1 n'est pas un nombre
else if(isNaN(nbr1)){
    console.log("Ce n'est pas un nombre");
}
//test sinon nbr1 est négatif
else{
    console.log("Négatif");
}
//Exercice 3 : Les tests :
//Ecrire un algorithme qui prend deux nombres en entrée (variable nbr1 et nbr2) affiche dans la console si la somme des deux nombres est positive ou négative.
//Correction
/*
    Variables 
*/
//let nbr1 = parseInt(prompt("Saisir le nombre 1"));
let nbr2 = parseInt(prompt("Saisir le nombre 2"));
/* 
    Logique 
*/
//test si nbr1 + nbr 2est positif
if(nbr1 + nbr2 > 0){
    console.log("Positif");
}
//test sinon si nbr 1 + nbr2 est égal à 0
else if(nbr1 + nbr2 == 0){
    console.log("Egale 0");
}
//test sinon si nbr1 + nbr 1 n'est pas un nombre
else if(isNaN(nbr1+nbr2)){
    console.log("Ce n'est pas un nombre");
}
//test sinon nbr1 + nbr2 est négatif
else{
    console.log("Négatif");
}

