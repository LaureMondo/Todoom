var detailTodo = function (todos, indexTodo) {
    for(i in todos){
      if(indexTodo == todos[i].id){
        return todos[i];
      }
    }
    return false;
  };
    
  module.exports = {
    detailTodo: detailTodo
  };