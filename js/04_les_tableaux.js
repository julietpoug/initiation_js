// alert('Okey js');

// --déclarer un tableau indexé:
// a)

var monTableau = []; 
console.log(monTableau);

// b)

var myArray = new Array;
console.log(myArray);
// myArray et monTableau sont des tableaux qui peuvent contenir plusieurs informations 
// Affectar des valeurs au tableau, plusieurs méthode:
// a)
var nosPrenoms = ["Christain", "Phillippe", "Mamadou"];
console.log(nosPrenoms); 
// b)
monTableau[0] = "Christian";
monTableau[1] = "Mamadou";
monTableau[2] = "Philippe";
monTableau[3] = "Sébastien";
monTableau[4] = "Zitouni";
console.log(monTableau);

// --Déclarer et affecter des valeurs à un objet.

var coordonnee = {
    prenom: "Hugo",
    nom: "LIEGEARD",
    age: 82
}; 

console.clear; // permet d'éffacer les lignes de débug qui précède le console.clear()
console.log(coordonnee); // j'affiche toutes les liste du tableau.
console.log(coordonnee['prenom']); // j'affiche que le prenom dans la liste du tableau.
console.log(coordonnee.nom); // j'affiche que le nom dans la liste du tableau.

// -- on va créer 2 tableaux indexés

var listeDePrenom = ["Oussmane", "Cherif", "Hugo"];
var listeNom = ["MAMA", "BANALLAL", "DOUDOU"];
var  Annuaire = ["listeDePrenom", "listeNom"];
console.log(Annuaire);

document.write(); // fonction native de js qui permet d'inscrire un résultat directement sur la page html et non plus sur console

// Ou on écrit tout sur la même ligne
// document.write(Annuaire[0][2])+ " " + (Annuaire[1][2]); 
document.write(Annuaire[0][2]+ " " + Annuaire[1][2]); 
Annuaire[1][2];
document.write("<hr>");
document.write(Annuaire[0][0]);
document.write(" ");
document.write(Annuaire[1][1]);

// Tableau à 2 dimensions non indexé

var contact = [
    {prenom: "Hugo", nom: "LIEGEARD", Tel:"0720 97 15 15"},
    {prenom: "Salin", nom: "SOUMARE", Tel:"0720 97 11 11"},
    {prenom: "Pransun", nom: "BALASUBRA", Tel:"0720 97 05 05"}
]; 
console.log(contact);

/* 
              EXERCICE
créez un tableau à 2 dimensions appelé "AnnuaireDesStagiaires" qui contiendra toutes les coordonnées pour chaque stagiaire.
EX. Nom, Prénom; Tel
 */

var AnnuaireDesStagiaires = [
    {Prenom: "juliette", Prenom: "POUGOM", Tel:"0750 26 31 81"},
    {prenom: "Hugo", nom: "LIEGEARD", Tel:"0720 97 15 15"},
    {prenom: "Pransun", nom: "BALASUBRA", Tel:"0720 97 05 05"}
  
]; 
console.log(AnnuaireDesStagiaires);


// --exemple à 3 dimensions

var Array3Dimension =[
    {
        prenom:"Hugo",
        nom: "LIEGEARD",
        coordonnées:{
            email : "hugo.liegeard@lepoles.com",
            Tel:{
                fixe: "0122 12 32 25",
                fax: "0210 12 12 30",
                port:{
                    prive: "0720 20 12 25",
                    pro : "0630 20 20 10"
                }
            },
            adresse:{
                ville: "Ducos",
                cp: "97221",
                region: "Martinique",
                pays:{
                    code: "FR",
                    nom:"FRANCE"
                }
            }

        } // fermeture 1er{
    } 
]; //fin array3Dimension

console.log(Array3Dimension);
console.log(Array3Dimension[0].coordonnées.email);

/* 
AJOUTER UN ELEMENT
 */

 var couleur =['Rouge', 'Jaune', 'Vert'];
 console.clear();
 console.log(couleur);
 console.log(couleur.length); // .length me permet d'afficher sur ma console le nombre d'élément que contient mon tableau
//  pour ajouter un élément dans mon tableau , je fais appel à la fonction push()
var nbElementsDeMonTableau = couleur.push('violet');
console.log(couleur);
console.log(nbElementsDeMonTableau);

// pour ajouter un élément au debut de mon tableau, je vais faire appel à la fonction unshift()
var nbElementsDeMonTableau = couleur.unshift('Bisque', 'Orange');
console.log(couleur);
console.log(nbElementsDeMonTableau);

// pour supprimer le dernier élément de mon tableau, je vais faire appel à la fonction pop()
couleur.pop();
console.log(couleur);
console.log(nbElementsDeMonTableau);

// pour supprimer le premier élément de mon tableau, je vais faire appel à la fonction shift()
couleur.shift();
console.log(couleur);
console.log(nbElementsDeMonTableau);






