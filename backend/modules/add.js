var addTodo = function (todos, content) {
  var idTodoNew = parseInt(todos[todos.length-1].id) + 1;
  if(content.title != undefined){
    content.id = idTodoNew;
    return todos.push(content);
  } else {
    return false;
  }
};
  
module.exports = {
  addTodo: addTodo
};