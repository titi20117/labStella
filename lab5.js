var cellTittle = document.getElementsByTagName("th");
var cellEls = document.getElementsByTagName("td");

//appelle de la fonction setColor aux cellules du tableau
setColor(cellEls);
setColor(cellTittle);

//fonction permettant de choisir la couleur a saisir de mon choix
function setColor(element){
    for (var i=0;  i<element.length; i++) {
        element[i].addEventListener("mouseover",function(){
            var chooseColor = prompt("Выбирите цвет, напишите по английскому и нажать кноку 'OK'!");
            this.style.backgroundColor = chooseColor.toLowerCase();
        });
    }
}