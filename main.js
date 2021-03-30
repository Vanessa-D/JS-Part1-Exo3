// Création d'une variable result qui affiche un prompt
var result = prompt("Ton prénom:");
// Condition : si la variable result n'est pas un nombre (et apparemment si elle n'est pas vide) --> affiche "..."
if(isNaN(result)){
    alert("Salut " + result + "!");
}
// Sinon, affiche "..."
else {
    alert("Essaie encore!");
}