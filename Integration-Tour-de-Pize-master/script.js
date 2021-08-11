
const elt = document.getElementById('testeur2');
window.alert(elt)
elt.addEventListener('click', event => {
    elt.style.backgroundColor= '#ffffff'
})

// function scroolAndClose(id1, id2){
//     let element = document.getElementById(id1);
//     // window.alert(element);
//     // element.style.color = "#151111"
//     var rect = element.getBoundingClientRect();
//     // window.alert(rect.top);
//     windows.scrollTo(0,500)
// }
