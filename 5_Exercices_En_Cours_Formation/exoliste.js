/*Exercice 18 DOM :
En vous inspirant de l'exemple ci-dessus :
Partie HTML :
-un titre h1 = liste des tâches,
-un input de type text (id= task),
-un bouton (id = add, onclick = addTask()) texte ajouter,
-un bouton (id = delAllTask, onclick = delAllTask()) texte tout supprimer,
-un bouton (id = reload, onclick = reload()) texte recharger la page,
-une div (id = tasks)
Partie JS :
-Créer une fonction addtask qui va ajouter à chaque clic sur le bouton une nouvelle tache à la div (id = task),
-Créer une fonction delAllTask qui va à chaque clic sur le bouton supprimer tous les enfants (child) contenu dans la div (tasks),
-Créer une fonction qui va à chaque clic sur le bouton recharger la page.*/
/*function addTask(){
    const paragraphe = document.createElement('p');
    const liste=document.getElementById('tasks');
    const texte=document.getElementById('task').value;
    paragraphe.textContent=texte;
    liste.appendChild(paragraphe);
}   
function delAllTask(){
    const element = document.getElementById("tasks");
while (element.firstChild) {
element.removeChild(element.firstChild);
}   
}
function refresh(){
    location.reload();
} 
/*Bonus :
-Dans la fonction addTask :
A chaque clic sur la fonction : 
-ajouter une div (class = container),
-> à l'intérieur de la div pour aller ajouter un paragraphe,
-> récupérer le contenu de l'input texte (task) et passer la valeur au paragraphe,
-> ajouter un bouton (id = delete, onclick = deleteTask(this),
-> ajouter un bouton (id = update, onclick = updateTask(this),
->Ajouter une fonction deleteTask qui va :
Supprimer la tache sélectionnée,
-Ajouter une fonction updateTask qui va :
Mettre à jour le nom de la tache depuis l'input du formulaire (id = task)*/
/*
//récup de la div
const container= document.getElementById('container');
//création du parag
paragraphe.textContent=texte;
//ajout du parag dans la div
container.appendChild(paragraphe);
//recup du contenu de l'input
const texte=document.getElementById('task').value;
//recup du bouton delete

//fonction deleteTask
function deleteTask(){
}
//Pour sup un élément : container.firstChild.remove
*/

/*Correction du bonus
//récupération de la div (tasks)
const liste = document.querySelector('#tasks');
//fonction pour ajouter une tâche
function addTask(){
    //récupération de l'input (task)
    const valeur = document.querySelector('#task').value;
    //création du container (container)
    const container = document.createElement('div');
    //ajout de l'attribut class : container (div container)
    container.setAttribute('class', 'container');
    //création du paragraphe
    const paragraphe = document.createElement('p');
    paragraphe.textContent = valeur;
    const btUpdate = document.createElement('button');
    //création du bouton update
    btUpdate.textContent = "Update";
    btUpdate.setAttribute('onclick','updateTask(this)');
    btUpdate.setAttribute('id','update');
    //création du bouton delete
    const btDelete = document.createElement('button');
    btDelete.textContent = "Delete";
    btDelete.setAttribute('onclick','deleteTask(this)');
    //ajouter les enfants à la div (container)
    container.appendChild(paragraphe);
    container.appendChild(btUpdate);
    container.appendChild(btDelete);
    //ajouter la div container à liste
    liste.appendChild(container);
}
//fonction qui va supprimer tous les enfants de tasks
function delAllTask(){
    while(liste.firstChild){
        liste.removeChild(liste.firstChild);
    }
}
//fonction pour recharger la page
function reload(){
    location.reload();
}
//fonction pour supprimer la tache (div container parente)
function deleteTask(e){
    e.parentNode.remove();
}
}
//function pour mettre à jour le texte de la tache courante
function updateTask(e){
    //récupération de l'input (task)
    const valeur = document.querySelector('#task').value;
    //test si valeur est différent de vide
    if(valeur != ""){
        //modifier depuis le parent -> 1 enfant
        e.parentNode.firstChild.textContent = valeur;
        //V2 modifier depuis le parent 1 élément de la nodelist (HTML Collection)
        //e.parentNode[0].textContent = valeur;
        //V3 modifier depuis l'élément frére ou soeur précédent
        //e.previousElementSibling.textContent = valeur;
    }
    //test si valeur est vide (redonne la même valeur)
    else{
        e.parentNode.firstChild.textContent = e.parentNode.firstChild.textContent
    }
}
*/
/*Exercice 19 DOM :
Depuis l'exercice 18 précédent modifier la fonction updateTask :
-Ajouter une variable (let)  statut qui va contenir un boolean => true
elle va effectuer le traitement suivant (updateTask):
-ajouter une condition qui va tester la valeur de la variable statut :
-> si statut est égal à true (if)
                -1 récupérer la valeur du paragraphe,
                -2 créer un input de type texte,
                -3 remplacer le paragraphe par l'input précédemment créé, (replaceChild(nouvel élément, enfant)
                -4 assigner la valeur (1) à l'input,
                -5 passer statut à false,
-> si statut est égal à false (else) :
                -1 récupérer la valeur de l'input (value),
                -2 créer un paragraphe,
                -3 remplacer l'input par le paragraphe replaceChild (paragraphe, enfant (input),
                -4 assigner au paragraphe la valeur (1),
                -5 passer statut à true,*/
function updateTask(e){
let statut = true;
    if(statut){
        //recup valeur parag
    const container =  document.querySelector('p').value; 
        //créer input texte
        const input=document.createElement('input');
        input.setAttribute('type', 'texte');
        //remplacer parag par input qu'on vient de créer
        e.parentNode.replaceChild(input,e.parentNode.firstChild);
        //assigner valeur (1) au parag
        input.textContent=1;

        statut=false;
    }
    else{
        //recup valeur de l'input
        const input= e.parentNode.firstChild.value;
        //créer parag
        const para =  document.createElement('p'); 
        //remplacer l'input par le parag
        e.parentNode.replaceChild(para,e.parentNode.firstChild);
        //assigner la valeur 1 au parag
        para.textContent=1;

        statut=true;
    }
}
/*Correction

*/
