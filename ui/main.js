//counter code
var button = document.getElementbyId("counter");
var counter=0;
button.onclick = function(){
  counter = counter+1; 
 var span = documnet.getElementbyId("count");
 span.innerHTML=counter.ToString();
};