import Home from 'views/Home';
import Luhn from 'views/Luhn';
import Acronym from 'views/Acronym';
import Route from 'types/Route';
import codeThinking from 'assets/images/code-thinking.svg';
import creditCard from 'assets/images/credit-card.svg';
import reading from 'assets/images/reading.svg';
import vrChat from 'assets/images/vr-chat.svg';
import toTheMoon from 'assets/images/to-the-moon.svg';
import map from 'assets/images/map.svg';
import fileAnalysis from 'assets/images/file-analysis.svg';
import Bob from 'views/Bob';
import SpaceAge from 'views/SpaceAge';
import DnDCharacter from 'views/DnDCharacter';
import WordCount from 'views/WordCount';
import Difficulty from 'enums/Difficulty';

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

const routes: Route[] = [
  {
    path: '/showcase',
    project: false,
    name: 'Home',
    icon: 'fas fa-home',
    Component: Home,
    description: 'Home',
    imagePath: codeThinking,
    gitLink: '',
    language: '',
    difficulty: Difficulty.Easy,
  },
  {
    path: '/showcase/luhn',
    project: true,
    name: 'Luhn',
    icon: 'far fa-credit-card',
    Component: Luhn,
    description: 'Luhn Algorithm',
    imagePath: creditCard,
    gitLink: 'https://github.com/rrdhjms/elixir-exercism-io/tree/master/luhn',
    language: 'Elixir',
    difficulty: Difficulty.Medium,
  },
  {
    path: '/showcase/acronym',
    project: true,
    name: 'Acronym',
    icon: 'fas fa-spell-check',
    Component: Acronym,
    description: 'Convert a phrase to its acronym.',
    imagePath: reading,
    gitLink:
      'https://github.com/rrdhjms/elixir-exercism-io/tree/master/acronym',
    language: 'Elixir',
    difficulty: Difficulty.Easy,
  },
  {
    path: '/showcase/bob',
    project: true,
    name: 'Bob',
    icon: 'far fa-comments',
    Component: Bob,
    description: 'Chat with Bob',
    imagePath: vrChat,
    gitLink: 'https://github.com/rrdhjms/elixir-exercism-io/tree/master/bob',
    language: 'Elixir',
    difficulty: Difficulty.Easy,
  },
  {
    path: '/showcase/space-age',
    project: true,
    name: 'Space Age',
    icon: 'fas fa-globe-africa',
    Component: SpaceAge,
    description: 'See your age on different planets',
    imagePath: toTheMoon,
    gitLink:
      'https://github.com/rrdhjms/elixir-exercism-io/tree/master/space-age',
    language: 'Elixir',
    difficulty: Difficulty.Easy,
  },
  {
    path: '/showcase/dnd-character',
    project: true,
    name: 'DnD Character',
    icon: 'fas fa-dungeon',
    Component: DnDCharacter,
    description: 'Generate DnD character stats',
    imagePath: map,
    gitLink:
      'https://github.com/rrdhjms/elixir-exercism-io/tree/master/dnd-character',
    language: 'Elixir',
    difficulty: Difficulty.Easy,
  },
  {
    path: '/showcase/word-count',
    project: true,
    name: 'Word Count',
    icon: 'far fa-file-word',
    Component: WordCount,
    description: 'Word Counter',
    imagePath: fileAnalysis,
    gitLink:
      'https://github.com/rrdhjms/elixir-exercism-io/tree/master/word-count',
    language: 'Elixir',
    difficulty: Difficulty.Easy,
  },
];

export default routes;
