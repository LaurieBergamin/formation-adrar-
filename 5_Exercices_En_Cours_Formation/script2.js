//Ecrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si le produit est négatif ou positif 
//(on inclut cette fois le traitement du cas où le produit peut-être nul). 
//Attention toutefois, on ne doit pas calculer le produit !
//NB : si on multiplie 2 nombres négatif le résultat est un nombre positif.
/*let n1 = prompt("saisir le nombre -4");
let n2 = prompt("saisir le nombre 6");
    if (n1 > 0 && n2 > 0){
        console.log("le produit est positif");
    }else if (n1 < 0 && n2 < 0){
        console.log("le produit est positif");
    }else{
        console.log("le produit est négatif");
    }
*/
//Ecrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie : 
//"Poussin" de 6 à 7 ans
//"Pupille" de 8 à 9 ans
//"Minime" de 10 à 11 ans
//"Cadet" après 12 ans
//NB : on peut utiliser un switch case à la place.
/*
let age = prompt("entrez votre âge");
    switch(true){
    case age>=6 && age<=7:
        console.log("Poussin");
        break;
    case age>=8 && age<=9:
        console.log("Pupille");
        break;
    case age>=10 && age<=11:
        console.log('Minime');
        break;
    case age>=12:
        console.log('Cadet');
        break;
    }
*/
//Ecrire un algorithme qui demande 3 mots et affiche dans la console si ils sont triés dans l'ordre alphabétiques.
let alpha = prompt("ordre");
    switch(true){
    case mot1<=b :
        console.log("Babouin");
        break;
    case mot2<=h:
        console.log("Hibou");
        break;
    case mot3<=i:
        console.log("Iguane");
        break;
    }
//Correction 
//version avec des variables (string)
let mot1 = prompt('Veuillez saisir un mot');
let mot2 = prompt('Veuillez saisir un mot');
let mot3 = prompt('Veuillez saisir un mot');
if(mot1<=mot2 && mot2<=mot3){
    console.log('Les mots sont dans l\'ordre alphabétique');
}
else {
    console.log('Les mots ne sont pas dans l\'ordre alphabétique');
}
//version avec un tableau
let mots = [];
mots[0] = prompt('Saisir un mot');
mots[1] = prompt('Saisir un mot');
mots[2] = prompt('Saisir un mot');

let tabTri = [];
tabTri[0]= mots[0];
tabTri[1]= mots[1];
tabTri[2]= mots[2];

tabTri.sort();
if(tabTri[0]==mots[0]&&tabTri[1]==mots[1]&&tabTri[2]==mots[2]){
    console.log('Les mots sont dans l\'ordre alphabétique');
}
else {
    console.log('Les mots ne sont pas triés dans l\'ordre');
}