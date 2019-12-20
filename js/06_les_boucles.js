// alert('ok js');

/* 
LES BOUCLES
*/

// Il y a différents types de boucles, les plus utilisées sont la boucle "FOR" et la boucle "WHITE"

// a) BOUCLE FOR

for(let i = 0; i<=5; i++){
    document.write('<p>Nombre de tour(s) de boucle(s): <em style="background:yellow;">'+ i +'</em></p>'); 
}
document.write("<hr>");

/* 
pour i = 0; => j'initialise le départ de ma boucle à 0
pour i<= 5; => tant que la valeur de i est inférieur ou égale à 5
i++; => j'incrémente (j'ajoute) un tour de boucle

En gros je donne l'intruction de faire un tour de boucle supplémentaire tant que la valeur de i n'est pas égaleou supérieur à 5
 */
//for(let i = 0; i<=5; ++i){
    // document.write('<p>Nombre de tour(s) de boucle(s): <em style="background:yellow;">'+ i +'</em></p>');


// La boucle WHILE

var j = 0;
while(j <=5){
    document.write('<p>Nombre de tour(s) de boucle(s): <em style="background:yellow;">'+ j +'</em></p>'); 
     // ATTENTION A NE PAS OUBLIER L'INCREMENTATION
    j++;
}
document.write("<hr>");

    /* -----------------------------
            EXERCICE
    ----------------------------- */
// -- Supposons le tableau suivant :

var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];
    /*
    * CONSIGNE : Grâce à une boucle FOR
    * affichez la liste des prénoms
    * du tableau ci-dessus dans la console 
    * ou sur votre page.
    */

    //  correction

console.log(Prenoms);
for(let i = 0; i <Prenoms.length; i++){
    console.log(Prenoms[i]);
    document.write(Prenoms[i]);
    document.write(" / ");
}

