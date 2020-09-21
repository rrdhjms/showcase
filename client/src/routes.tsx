import Home from 'views/Home';
import Luhn from 'views/Luhn';
import Acronym from 'views/Acronym';

const routes = [
  {
    path: '/home',
    name: 'Home',
    icon: 'fas fa-home',
    component: Home,
    layout: '/showcase',
    color: 'grey',
    description: 'Home',
  },
  {
    path: '/luhn',
    name: 'Luhn',
    icon: 'far fa-credit-card',
    component: Luhn,
    layout: '/showcase',
    color: 'blue',
    description: 'Luhn Algorithm',
  },
  {
    path: '/acronym',
    name: 'Acronym',
    icon: 'fas fa-spell-check',
    component: Acronym,
    layout: '/showcase',
    color: 'green',
    description: 'Acronym Generator',
  },
  {
    path: '/bob',
    name: 'Bob',
    icon: 'far fa-comments',
    component: Home,
    layout: '/showcase',
    color: 'orange',
    description: 'Chat with Bob',
  },
  {
    path: '/space-age',
    name: 'Space Age',
    icon: 'fas fa-globe-africa',
    component: Home,
    layout: '/showcase',
    color: 'lightblue',
    description: 'See your age on different planets',
  },
  {
    path: '/dnd-character',
    name: 'DnD Character',
    icon: 'fas fa-dungeon',
    component: Home,
    layout: '/showcase',
    color: 'brown',
    description: 'Generate DnD character stats',
  },
  {
    path: '/word-count',
    name: 'Word Count',
    icon: 'far fa-file-word',
    component: Home,
    layout: '/showcase',
    color: 'purple',
    description: 'Word Counter',
  },
];

export default routes;
