var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles =  {
    'article-one': {
        title: 'Article One | Harish Raju',
        heading: 'Article One',
        date: 'Sep 18, 2017',
        content:`
            <p>
                This is the content that is going to be displayed when I call it . YO!
            </p>
            <p>
                This is the content that is going to be displayed when I call it . YO!
            </p>
            <p>
                This is the content that is going to be displayed when I call it . YO!
            </p>`
},
    'article-two': {
    title: 'Article Two | Harish Raju',
    heading: 'Article Two',
    date: 'Sep 18, 2017',
    content:`
        <p>
            This is the content that is going to be displayed when I call it . YO!
        </p>
        <p>
            This is the content that is going to be displayed when I call it . YO!
        </p>
        <p>
            This is the content that is going to be displayed when I call it . YO!
        </p>`
},
    'article-three': {
    title: 'Article Three | Harish Raju',
    heading: 'Artcile Three',
    date: 'Sep 18, 2017',
    content:`
        <p>
            This is the content that is going to be displayed when I call it . YO!
        </p>
        <p>
            This is the content that is going to be displayed when I call it . YO!
        </p>
        <p>
            This is the content that is going to be displayed when I call it . YO!
        </p>`
} 
};

function createTemplate (data) { 
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href = "/"> Home </a>
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
    </html> `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//counter code
var counter = 0;
app.get('/counter', function(req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var content = '';
app.get('/comment', function(req, res) {
    var comment = req.query.comment;
    content.push(comment);
    res.send(JSON.stringify(content)); 
});

var names = [];
app.get('/submit-name', function(req,res) {
    //Get the name from the request object
    var name = req.query.name;
    names.push(name);
    //JSON = JavaScript Object Notation
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
  //using the express's req function 
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
