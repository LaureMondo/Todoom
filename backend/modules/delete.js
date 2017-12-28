var deleteTodo = function (todos, indexTodo) {
  for(i in todos){
    if(indexTodo == todos[i].id){
      return todos.splice(i, 1);
    }
  }
  return false;
};
  
module.exports = {
  deleteTodo: deleteTodo
};