var modifierTodo = function (todo, index, content) {
    var todoEdit = todo[index -1]
    todoEdit.title = content.title;
    todoEdit.description = content.description;
    return todoEdit;
};
    
module.exports = {
    modifierTodo: modifierTodo
};