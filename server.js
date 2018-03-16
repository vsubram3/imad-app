var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
'article-one' : {
  title: 'Article One | Vimalkumar S',
  heading: 'Article One',
  date: '15-MAR-2018',
  content: `
  <p>
             This is my first article and learning new things,  But the errors are too much  Let me try my best
            </p>
          <p>
            Hope things will get improved.
          </p>
        
        <p>
            Let me continue my journey of learning IMAD
        </p>`
},
'article-three' : {
    title: 'Article Three | Vimalkumar S',
  heading: 'Article Three',
  date: '15-MAR-2018',
  content: `
  <p>
             This is my 3rd article and learning new things,  But the errors are too much  Let me try my best
            </p>
          <p>
            Hope things will get improved.
          </p>
        
        <p>
            Let me continue my journey of learning IMAD
        </p>`
},
'article-four' : {
    title: 'Article four | Vimalkumar S',
  heading: 'Article four',
  date: '15-MAR-2018',
  content: `
  <p>
             This is my 4th article and learning new things,  But the errors are too much  Let me try my best
            </p>
          <p>
            Hope things will get improved.
          </p>
        
        <p>
            Let me continue my journey of learning IMAD
        </p>`
}
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
      
    </head>
    <body>
        <div class = 'container'>
        <div>
            <a href = '\'> Home </a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
         <div>
            ${date} 
         </div>
        <div>
        ${content}
      </div>
          </div>
          </body>
</html>
`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName; 
   res.send(createTemplate(articles(articleName)));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
