/************** 
    lLES VARIABLES
    
***************/

// alert("coucou");

/* 
Lorque l'on a besoin de stocker une information on utilise une variable. Une variable peut être inteerprétée comme une boite dans laquelle nous allons stocker une information

 IL EXISTE PLUSIEURS TYPE DE VARIABLE

 */


//  pour declarer une variable (la créer ):
var prenom;

// pour lui affecter une valeur: 
var prenom ='carine';

// afficher la valeur d'une variable 
// a- pour tester une valeur on ouvre la console du navigateur(f12) puis on écrit le nom de la variable à droite des ">>" puis ENTER

// b- Afficher une alert avec la variable (NE PAS METTRE DE GUILLEMETS)
alert(prenom); 

// c- On écrit dans le script (code)
console.log(prenom); 

// Il est possible d'écrire plusieurs variables sur une seule ligne:
var nb1, nb2, nb3;

// & d'y affecter des valeurs: 

nb1= 1;
nb2 = 50;
nb3 = 220;

// Une instruction se termine TOUJOURS par un point virgule. 

// le nom d'une variable peut comporter des lettres et des chriffres mais exclut les signes de ponctuation (espace, accent...).

// attention /!\ LE JS EST SENSIBLE A LA CASSE /!\ 
/* 
mavariable different de maVariable ou ma_variable
*/
// écriture snake case => ma_variable 
// écriture camelCase => maVariable 


/*************************
 LES TYPES DE VARIABLES

 ***********************/
// --typeof, me permet de connaitre le type de ma variable:

console.log(typeof prenom); 

// --Déclaration et affectation d'un nombre:
var Age = 40
console.log(typeof Age);

// --Les variables de type FLOAT
var uneDecimal = -2.984
console.log(typeof uneDecimal); // la console retourne "number" donc un /  des chiffres

// -- Les variables de type BOOLéens (boolean)
// --le boolean permet de vérifier si c'est vrai et faux
var unBoolean = false; // true
console.log(unBoolean); // retourne false
console.log(typeof unBoolean); // retourne  boolean

// --LES CONSTANTES

// La déclaration CONST permet de créer une constante accéssible UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifiée par des réaffectations ultérieures. Une constance ne peut pas être déclarée à nouveau.

const HOST ="localhost";
const USER = "root";
const PASSWORD = "mysql";
/* 
Donc il est impossible de faire cela:
const USER= "Alpha";
la console me retournera => syntaxError: redeclaration of const USER
*/

var unNombre = "24";
console.log(unNombre); // affiche 24
console.log(typeof unNombre); // retourne string (chaine de caractère)

// pour convertir le string (chaine de caractère) "24" en nombre:
var unNombre = parseFloat(unNombre);
console.log(unNombre); // affiche 24
console.log(typeof unNombre); //retourne nombre

// pour convertir un chriffre en string
var nb4 = 93;
console.log(nb4);
console.log(typeof nb4); // la console interprète le nb4 comme un chriffre
nb4 = nb4.toString(); // toString() permet de convertir un nombre entier ou décimal en chaine de caractère (string)
console.log(typeof nb4);







