import React from 'react';
import route from 'types/route';
import styles from './ProjectPage.module.css';
import { getDifficulty, getLanguage } from 'constants/shields';

type Props = {
  info: route;
  description?: string;
  about?: string;
  children?: React.ReactNode;
};

const ProjectPage = ({ info, about, children }: Props) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.lhs}>
        <h4>Overview</h4>
        <div className={styles.text}>
          <p>
            Difficulty:{' '}
            <img alt="difficulty" src={getDifficulty(info.difficulty)} />
          </p>
          <p>
            Language: <img alt="language" src={getLanguage(info.language)} />
          </p>
          <p>Description: {info.description}</p>
          <p>
            Link: <a href={info.gitLink}>GitHub</a>
          </p>
        </div>
        <div>
          <h4>About</h4>
          <p>{about}</p>
        </div>
      </div>
      <div className={styles.rhs}>
        <div className={styles.projectArea}>{children}</div>
      </div>
    </div>
  );
};

export default ProjectPage;
