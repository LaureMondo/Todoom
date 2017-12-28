var app = require('express')();
var session = require('express-session');

var addTodo = require('./modules/add.js');
var deleteTodo = require('./modules/delete.js');

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
            },
            {
                id: '2',
                title: 'Finir le Vue',
            },
            {
                id: '3',
                title: 'Nourrir les chats',
            },
            {
                id: '4',
                title: 'Ranger la chambre',
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

    console.log("avant add : ");
    console.log(req.session.todosList);

    addTodo.addTodo(req.session.todosList.todo, req.body);
    console.log(req.body);

    console.log("après add : ");
    console.log(req.session.todosList);

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

app.listen(3000, function(){
    console.log("Todos en session : ");
    console.log(session.todosList);
    console.log('listening on *:3000');
});