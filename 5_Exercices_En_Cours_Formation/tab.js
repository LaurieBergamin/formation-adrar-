/*Créer un algorithme qui va demander 3 valeurs numériques (prompt 3 fois) 
ajouter ces valeurs à un tableau vide (1 valeur 1 colonne, 2 éme valeur 2 éme colonne, 3 éme valeur 3 éme colonne),
tester si les valeurs sont dans l'ordre croissant (afficher un message dans la console les valeurs sont triées par ordre croissant),
sinon (afficher un message dans la console valeurs ne sont pas triées dans l'ordre croissant*).*/
/*let tab1= [];
tab[0]= prompt('saisir un nombre');
tab[1]= prompt('saisir un nombre');
tab[2]= prompt('saisir un nombre');

let tabTri= [];
tabTri[0]= tab[0];
tabTri[1]= tab[1];
tabTri[2]= tab[2];

tabTri.sort();
    if (tabTri[0]==tab[0]&&tabTri[1]==tab[1]&&tabTri[2]==tab[2]){
        console.log('Les nombres sont dans l\'ordre croissant');
    }
    else {
        console.log('Les nombres ne sont pas dans l\'ordre');
    }*/
/*Correction
let nbr1 = prompt("Saisir un nombre");
let nbr2 = prompt("Saisir un nombre");
let nbr3 = prompt("Saisir un nombre");
let tab =[];
//version ajout des colonnes par leur index
tab[0] = nbr1;
tab[1] = nbr2;
tab[2] = nbr3;
//version remplacement du contenu du tableau
/* tab = [nbr1,nbr2,nbr3]
//version avec la méthode push ajouter à la fin du tableau
tab.push(nbr1,nbr2,nbr3) 
//test si les nombres sont bien triés
if(tab[0]<=tab[1]&&tab[1]<=tab[2]){
    console.log('Les valeurs sont triées par ordre croissant');
}
//test sinon pas dans l'ordre
else{
    console.log('Les valeurs ne sont pas triées par ordre croissant');
}
*/

/*8) Créer un programme qui va demander 3 valeurs (prompt 3) :
-nom de produit (string),
-prix HT (float),
-quantité (integer),
Ajouter ces informations dans un tableau (chaque valeur dans une nouvelle colonne),
Calculer le prix TTC (prix HT1.20 * quantité) et stocker le prix TTC à la fin du tableau.
Afficher le Prix TTC dans la console (depuis la dernière colonne du tableau)*/
/*let nom= prompt('saisir le nom du produit');
let prixHT= parseFloat(prompt('saisir le prix du produit'));
let quantite= (prompt('saisir la quantité du produit'));

let tab2=[];
tab2[0] = nom;
tab2[1] = quantite;
tab2[2] = prixHT;
tab2[3] = quantite*prixHT*1.20;

console.log("Le prix TTC du produit est égal à:"+tab2[3]);//concaténation*/
/*Correction
//Récupérer les 3 valeurs
let nomProduit = prompt("Saisir le nom du produit");
let prixHt = parseFloat(prompt("Saisir le prix HT du produit"));
let quantite = parseInt(prompt("Saisir quantite du produit"));
//créer un tableau vide
let tab = [];
//ajouter les 3 valeurs 
tab[0] = nomProduit;
tab[1] = prixHt;
tab[2] = quantite;
//création du tableau avec les 3 valeurs
//let tab = [nomProduit,prixHt, quantite];
//ajouter les colonnes au tableau avec la fonction push
//tab.push(nomProduit, prixHt, quantite);
tab.push(prixHt*quantite*1.20);
//version concatenation
console.log("Le prix TTC est égal à : "+Math.round(tab[3],2)+ " €");
//version template string
console.log(`Le prix TTC est égal à : ${Math.round(tab[3],2)} €`);
*/

/*Exercice 9 Tableau et boucle :
Créer un algorithme qui va ajouter à un tableau users (tableau indexé) :
à chaque tours de la boucle : 
-un utilisateur (tableau associatif)  qui va contenir : -> nom, prénom, age et un numéro de téléphone,
(les valeurs seront récupérés avec des prompts)
-La boucle va tourner 5 fois, Afficher dans la console le nom et le prénom de l'utilisateur qui est le plus jeune (tableau users).
Bonus : afficher dans les prompts (le numéro de l'utilisateur que vous ajoutez)*/
let users= [];/*on crée le tableau à l'extérieur de la boucle
for (let i=0; i<5; i++){
    let user={
    'nom': prompt("user" + (i+1)+ "saisir le nom de l\'utilisateur"),
    'prenom': prompt("user" + (i+1)+"saisir le prenom de l\'utilisateur"),
    'age': prompt("user" + (i+1)+"saisir l'age' de l\'utilisateur"),
    'num': prompt("user" + (i+1)+"saisir le numéro de l\'utilisateur"),
    }
users.push(user);
}
let indice=0; 
let minAge= users[0].age;
for (let i=0; i<users.length; i ++){/*on va chercher dans chaque colonne le plus petit âge pour que les valeurs se comparent entre elles
    if (users[i].age<minAge){
        minAge=users[i].minAge;
        indice=i;
    }

console.log("l'utilisateur le plus jeune est: "+users[indice].prenom+""+users[indice].nom);*/

/*Exercice 10 Boucle :
Un enseignant a besoin de saisir les notes de ses élèves.
Il a également besoin depuis ces notes de calculer la moyenne.
Écrire le programme qui permet de saisir la liste des notes (dans un prompt), 
les stocker dans un tableau et retourner la moyenne du devoir (afficher dans la console).
let notes=[];
let somme= 0;
for (let i=0; i<10; i++){
    notes[i]=parseInt(prompt("saisir une note"));
    somme+=notes[i]; 
}
console.log(notes);
console.log(somme/10);
*/
/*Exercice 11 Conditions:
Une boulangerie vend des chocolatines. 
Pour calculer le prix qu'elle va facturer a ses clients elle a besoin d'un programme. 
-Une chocolatine coûte 1€40 a l'unité jusqu'à 10. 
-Les 10 suivantes coûtent 1€30 pièce et 
-Au-delà elles coûtent 1€20 pièce.
Écrire un programme qui calcule le prix à payer en fonction de la quantité (depuis un prompt) 
Afficher dans la console le montant à payer.
let choco= parseInt(prompt("saisir le nombre de chocolatine"));
let total=0;
if(nbrChoco > 0 && nbrChoco <= 0){
    total = nbrChoco * prixChoco[0]; 
}
else if(nbrChoco >= 11 && nbrChoco <= 20){
    total = (10*prixChoco[0])+((nbrChoco-10)*prixChoco[1]);
}
else{
    total = (10*prixChoco[0])+(10*prixChoco[1])+((nbrChoco-20)*prixChoco[2]);
}
//afficher dans la console
console.log("le prix total est égal à : "+total);
//afficher dans un popup
alert("le prix total est égal à : "+total);
*/






