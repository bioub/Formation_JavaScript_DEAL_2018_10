/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
function addTodo(todo) {
  const listElt = document.querySelector('.todo-list');

  const divElt = document.createElement('div');
  divElt.innerText = todo.title;

  if (listElt.childElementCount) {
    listElt.insertBefore(divElt, listElt.firstElementChild);
  } else {
    listElt.appendChild(divElt);
  }
}

export { addTodo };
