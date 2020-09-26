import Difficulty from 'enums/Difficulty';

type Route = {
  path: string;
  name: string;
  icon: string;
  Component: React.ReactType;
  description: string;
  imagePath: string;
  project: boolean;
  gitLink: string;
  difficulty: Difficulty;
  language: string;
};

export default Route;
