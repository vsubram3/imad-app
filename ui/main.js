console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerText = "New value";
var img = document.getElementById('img');
img.onclick = function(){
    img.style.marginleft='100px';
};