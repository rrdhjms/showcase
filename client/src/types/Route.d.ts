import Difficulty from 'enums/Difficulty';

type Route = {
  path: string;
  name: string;
  icon: string;
  Component: React.ReactType;
  project: boolean;
  description: string;
  imagePath: string;
  gitLink: string;
  difficulty: Difficulty;
  language: string;
};

export default Route;
