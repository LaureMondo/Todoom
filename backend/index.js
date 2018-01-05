var app = require('express')();
var session = require('express-session');

var addTodo = require('./modules/add.js');
var deleteTodo = require('./modules/delete.js');
var detailTodo = require('./modules/detail.js');

var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });


// session
app.use(session({ secret: 'mysecrettoken'}));

/*
* middleware d'entête, sans celui-ci on ne peut pas faire communiquer vue et le serveur node
*/
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/*
* Si le json des Todos n'est pas initialisé alors on le crée en session
*/
app.use(function (req, res, next) {
    if (req.session.todosList == undefined) {
        todos = {
            "todo": [
            {
                id: '1',
                title: 'Finir le Node',
                description: 'Une description de qualité'
            },
            {
                id: '2',
                title: 'Finir le Vue',
                description: 'Une description de qualité'
            },
            {
                id: '3',
                title: 'Nourrir les chats',
                description: 'Une description de qualité'
            },
            {
                id: '4',
                title: 'Ranger la maison',
                description: 'Une description de qualité'
            }],
        };
        req.session.todosList = todos;
    }
    next();
});

/* 
* @route / accueil, liste les todos
*/
app.get('/', function(req, res){
    res.send(req.session.todosList);
});

/* 
* @route /add permet d'ajouter des Todos grace au form
*/
app.post('/add', urlEncodedParser, function(req, res){
    addTodo.addTodo(req.session.todosList.todo, req.body);
    res.send(req.session.todosList);
});

/* 
* @route /delete/:id permet de supprimer une Todos d'id donnée
*/
app.get('/delete', function(req, res){
    var indexTodo = parseInt(req.query.id);
    deleteTodo.deleteTodo(req.session.todosList.todo, indexTodo);
    res.send(req.session.todosList);
});

/* 
* @route /detail/:id permet de voir le détail d'une Todos d'id donnée
*/
app.get('/detail', function(req, res){
    var indexTodo = parseInt(req.query.id);
    var detail = detailTodo.detailTodo(req.session.todosList.todo, indexTodo);
    res.send(detail);
});

app.listen(3000, function(){
    console.log("Todos en session : ");
    console.log(session.todosList);
    console.log('listening on *:3000');
});