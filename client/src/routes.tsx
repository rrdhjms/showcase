import Home from 'views/Home';
import Luhn from 'views/Luhn';
import Acronym from 'views/Acronym';

/**
 * Create the breadcrumbs from the current url route
 * @param props The standard props param passed through with React, must include the match param
 */
export const breadcrumbs = (props: any) => {
  return (
    routes
      // Get all routes that contain the current one.
      .filter(({ path }) => props.match.path.includes(path))
      // Swap out any dynamic routes with their param values.
      // E.g. "/pizza/:pizzaId" will become "/pizza/1"
      .map(({ path, ...rest }) => ({
        path: Object.keys(props.match.params).length
          ? Object.keys(props.match.params).reduce(
              (path, param) =>
                path.replace(`:${param}`, props.match.params[param]),
              path
            )
          : path,
        ...rest,
      }))
  );
};

const routes = [
  {
    path: '/showcase',
    name: 'Home',
    icon: 'fas fa-home',
    Component: Home,
    color: 'grey',
    description: 'Home',
  },
  {
    path: '/showcase/luhn',
    name: 'Luhn',
    icon: 'far fa-credit-card',
    Component: Luhn,
    color: 'blue',
    description: 'Luhn Algorithm',
  },
  {
    path: '/showcase/acronym',
    name: 'Acronym',
    icon: 'fas fa-spell-check',
    Component: Acronym,
    color: 'green',
    description: 'Acronym Generator',
  },
  {
    path: '/showcase/bob',
    name: 'Bob',
    icon: 'far fa-comments',
    Component: Home,
    color: 'orange',
    description: 'Chat with Bob',
  },
  {
    path: '/showcase/space-age',
    name: 'Space Age',
    icon: 'fas fa-globe-africa',
    Component: Home,
    color: 'lightblue',
    description: 'See your age on different planets',
  },
  {
    path: '/showcase/dnd-character',
    name: 'DnD Character',
    icon: 'fas fa-dungeon',
    Component: Home,
    color: 'brown',
    description: 'Generate DnD character stats',
  },
  {
    path: '/showcase/word-count',
    name: 'Word Count',
    icon: 'far fa-file-word',
    Component: Home,
    color: 'purple',
    description: 'Word Counter',
  },
];

export default routes;
