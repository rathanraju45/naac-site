window.onload = function (){
    const menu_btn = document.querySelector('.hamburger');
    const menu = document.getElementsByClassName('nav')[0];
    menu_btn.addEventListener('click',function (){
    menu_btn.classList.toggle('is-active');
    menu.classList.toggle('visibility');
   }
)}
var criteriaList = document.querySelectorAll('.criteria');
var criteriaMain = document.querySelectorAll('.criteria-main');
function criteriaClicked(criteriaNumber){
    var activeCriteria = document.querySelector('.criteria-'+criteriaNumber);
    var displayCriteria = document.querySelectorAll('.criteria'+criteriaNumber);
    for (let index = 0; index < criteriaList.length; index++) {
        var element = criteriaList[index];
        element.classList.add('blue');
    }
    activeCriteria.classList.remove('blue');
    activeCriteria.classList.add('red');
    for (let index = 0; index < criteriaMain.length; index++) {
        const element1 = criteriaMain[index];
        element1.style.display='none';
    }
    for (let index = 0; index < displayCriteria.length; index++) {
        var temp_element = displayCriteria[index];
        temp_element.style.display='block';
    }
}