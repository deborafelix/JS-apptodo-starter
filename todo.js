var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    // começa a lista vazia
    listElement.innerHTML='';

    // adiciona as linhas, criando a lista baseado  no array todos
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
    
    // função excluir
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    var linkText = document.createTextNode('Excluir');
    
// posição array
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkElement.appendChild(linkText); //linktext dentro do linkelement
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value='';
    renderTodos();
    saveToStorage();
    }

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}