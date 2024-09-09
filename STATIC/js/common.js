let vh = window.innerHeight * 0.01;
document.oncontextmenu = function(){return false;}
document.documentElement.style.setProperty('--vh', vh + 'px');
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
});

function siblingsRemove(target, className){
    const children = target.parentElement.children;
    for (let i = 0; i < children.length; i++) {    
        children[i].classList.remove('active');
    } 
    target.classList.add(className); 
}
function getElementIndex(element) {
  return [].indexOf.call(element.parentNode.children, element);
}
