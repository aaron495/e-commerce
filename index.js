const contenantChoixOrdinateur = document.querySelector('#choixordinateur');
const contenantChoixutilisateur = document.getElementById('choixutilisateur');
const contenantresultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur;
let resultat;
let choixOrdinateur;
console.log(contenantChoixutilisateur);

function generer_choix_ordinateur() {
    random = Math.floor(Math.random() * 3) +1 //generer des nombres compris entre 1 et 3
    if (random === 1) {//si random = a 1
       choixOrdinateur = "pierre"
       
    }
    if (random === 2) {//si random = a 1
       choixOrdinateur = "papier"
       
    }
    if (random === 3) {//si random = a 1
       choixOrdinateur = "ciseaux"
       
    }
    //on ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML =`<img src="${choixOrdinateur}.png"> `
 }

 function verification() {
   //les cas ou le joueur perd
   if(choixUtilisateur == choixOrdinateur){
      resultat = "Egaliter!"
   }
   if(choixUtilisateur == "pierre" && choixOrdinateur =="papier"){
      resultat = "perdu!" 
   }

   if(choixUtilisateur == "papier" && choixOrdinateur =="ciseaux"){
      resultat = "perdu!" 
   }

   if(choixUtilisateur == "ciseaux" && choixOrdinateur =="pierre"){
      resultat = "perdu!" 
   }
   //les cas ou le joueur gagne

   if(choixUtilisateur == "pierre" && choixOrdinateur =="ciseaux"){
      resultat = "Gagner !" 
   }

   if(choixUtilisateur == "ciseaux" && choixOrdinateur =="papier"){
      resultat = "Gagner !" 
   }

   if(choixUtilisateur == "papier" && choixOrdinateur =="pierre"){
      resultat = "Gagner !" 
   }
   contenantresultat.innerHTML = resultat ;
}

//Evenement'Click sur les buttons'
choixPossibles.forEach(choixPossible  => choixPossible.addEventListener('click',(e)=> {

    generer_choix_ordinateur();
   //recuperation de l'ID du button clique 
   choixUtilisateur = e.target.id ;
   //on ajoute l'image qui correspond au choix
   contenantChoixutilisateur.innerHTML =`<img src="${choixUtilisateur}.png"> `;
   verification();
}))

//fonction pour generer le choix de l'ordinateur


//fonction pour verifier si le joueur a gagner ou pas\

