import { Horloge as Clock } from './horloge';

const divElt = document.querySelector('.horloge');
const clock = new Clock(divElt);
clock.start();
