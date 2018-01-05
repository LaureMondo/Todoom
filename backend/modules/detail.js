var detailTodo = function (todos, indexTodo) {
    for(i in todos){
      if(indexTodo == todos[i].id){
          console.log('dans le if du for');
        return todos[i];
      }
    }
    return false;
  };
    
  module.exports = {
    detailTodo: detailTodo
  };