//counter code
var button = document.getElementbyId("counter");
var counter=0;
button.onclick = function(){
  counter = counter+1; 
 var span = document.getElementbyId("count");
 span.innerHTML=counter.ToString();
};