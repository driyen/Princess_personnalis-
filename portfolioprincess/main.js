function Afficher_cacher(id)
{
    var doc=document.getElementById(id);
    if(doc.style.visibility=="hidden")
    {
        doc.style.visibility="visible";
        document.getElementById('bouton_'+id).innerHTML='Cacher le texte';
    }
    else
    {
        doc.style.visibility="hidden";
        document.getElementById('bouton_'+id).innerHTML='Afficher le texte';
    }
    return true;
}


 function Change_style() {

    
    var debutScroll = window.innerHeight ;
    var menu = document.getElementById('onglets');
    var princess = document.getElementById('princess');
    var TONYLEBOUTTON = document.getElementById('burger');

    if (window.scrollY >= debutScroll) {
        princess.classList.add('classforjs');
        menu.classList.add('classforjs');
        TONYLEBOUTTON.classList.add('classforjs');
    } 
    else {
        princess.classList.remove('classforjs');
        menu.classList.remove('classforjs');
        TONYLEBOUTTON.classList.remove('classforjs');
    }
    

}


//window.onscroll = function(){

//    stickMenu()
// };
 //recupere mes onglets
 //var onglets = document.getElementById('onglets');
 
 
 
 //recupere la distance de ma sec1
 //var startStick = window.innerHeight;
 
 
 
 // j'ajoute mon menu a mes autres sections des qu'il depasse la taille de mon header
 
// function stickMenu(){
 
    // if(window.scrollY >= startStick){
        // menu.classList.add('classforjs');}
        
    // else {
        // menu.classList.remove('classforjs');}
// }
