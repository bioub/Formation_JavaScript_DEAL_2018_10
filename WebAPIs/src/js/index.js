import { Horloge as Clock } from './horloge';
import { addTodo } from './todo';

const divElt = document.querySelector('.horloge');
const clock = new Clock(divElt);
clock.start();

// TodoList
const formElt = document.querySelector('.todo-form');
const inputElt = document.querySelector('.todo-value');
formElt.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = inputElt.value;

  addTodo({
    title: value
  })
});
