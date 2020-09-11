import Home from 'views/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'home',
    component: Home,
    layout: 'App',
    color: 'grey',
    description: 'Home',
  },
  {
    path: '/luhn',
    name: 'Luhn',
    icon: 'credit_card',
    component: Home,
    layout: 'App',
    color: 'blue',
    description: 'Luhn Algorithm',
  },
  {
    path: '/acronym',
    name: 'Acronym',
    icon: 'http',
    component: Home,
    layout: 'App',
    color: 'green',
    description: 'Acronym Generator',
  },
  {
    path: '/bob',
    name: 'Bob',
    icon: 'chat',
    component: Home,
    layout: 'App',
    color: 'orange',
    description: 'Chat with Bob',
  },
  {
    path: '/space-age',
    name: 'Space Age',
    icon: 'public',
    component: Home,
    layout: 'App',
    color: 'green',
    description: 'See your age on different planets',
  },
  {
    path: '/dnd-character',
    name: 'DnD Character',
    icon: 'casino',
    component: Home,
    layout: 'App',
    color: 'red',
    description: 'Generate DnD character stats',
  },
  {
    path: '/word-count',
    name: 'Word Count',
    icon: 'filter_2',
    component: Home,
    layout: 'App',
    color: 'purple',
    description: 'Word Counter',
  },
];

export default routes;
