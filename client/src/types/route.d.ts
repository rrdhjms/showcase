import difficulty from 'enums/difficulty';

type route = {
  path: string;
  name: string;
  icon: string;
  Component: React.ReactType;
  project: boolean;
  description: string;
  imagePath: string;
  gitLink: string;
  difficulty: difficulty;
  language: string;
};

export default route;
