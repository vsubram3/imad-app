//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    var request = new XMLHttpRequest();
    
  request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE){
          if(request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
  };
  request.open('GET','http://vimalnetworkengg.imad.hasura-app.io/counter', true);
  request.send(null);
};
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submi_btn');
submit.onclick = function(){
    
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for (var i=0; i<names.length; i++) {
        list += 'li' + names[i] + '<\li>';
    }
    var url = document.getElementById('namelist');
    ul.inerHTML = 'list';
};