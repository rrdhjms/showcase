import Home from 'views/Home';
import Luhn from 'views/Luhn';
import Acronym from 'views/Acronym';
import route from 'types/route';
import codeThinking from 'assets/images/code-thinking.svg';
import creditCard from 'assets/images/credit-card.svg';
import reading from 'assets/images/reading.svg';
import chatBot from 'assets/images/chat-bot.svg';
import toTheMoon from 'assets/images/to-the-moon.svg';
import map from 'assets/images/map.svg';
import fileAnalysis from 'assets/images/file-analysis.svg';
import Bob from 'views/Bob';
import SpaceAge from 'views/SpaceAge';
import DnDCharacter from 'views/DnDCharacter';
import WordCount from 'views/WordCount';

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

const routes: route[] = [
  {
    path: '/showcase',
    name: 'Home',
    icon: 'fas fa-home',
    Component: Home,
    color: '#6C63FF',
    description: 'Home',
    imagePath: codeThinking,
  },
  {
    path: '/showcase/luhn',
    name: 'Luhn',
    icon: 'far fa-credit-card',
    Component: Luhn,
    color: '#6C63FF',
    description: 'Luhn Algorithm',
    imagePath: creditCard,
  },
  {
    path: '/showcase/acronym',
    name: 'Acronym',
    icon: 'fas fa-spell-check',
    Component: Acronym,
    color: '#6C63FF',
    description: 'Acronym Generator',
    imagePath: reading,
  },
  {
    path: '/showcase/bob',
    name: 'Bob',
    icon: 'far fa-comments',
    Component: Bob,
    color: '#6C63FF',
    description: 'Chat with Bob',
    imagePath: chatBot,
  },
  {
    path: '/showcase/space-age',
    name: 'Space Age',
    icon: 'fas fa-globe-africa',
    Component: SpaceAge,
    color: '#6C63FF',
    description: 'See your age on different planets',
    imagePath: toTheMoon,
  },
  {
    path: '/showcase/dnd-character',
    name: 'DnD Character',
    icon: 'fas fa-dungeon',
    Component: DnDCharacter,
    color: '#6C63FF',
    description: 'Generate DnD character stats',
    imagePath: map,
  },
  {
    path: '/showcase/word-count',
    name: 'Word Count',
    icon: 'far fa-file-word',
    Component: WordCount,
    color: '#6C63FF',
    description: 'Word Counter',
    imagePath: fileAnalysis,
  },
];

export default routes;
