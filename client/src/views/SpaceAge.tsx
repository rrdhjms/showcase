import React from 'react';
import { Crumb } from '../types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';
import route from 'types/route';
import HeaderLg from 'components/Header/HeaderLg';
import ProjectPage from './ProjectPage';
import styles from './SpaceAge.module.css';
import { Input, Button } from 'reactstrap';

type Props = {
  crumbs: Array<Crumb>;
  info: route;
};

const SpaceAge = ({ crumbs, info }: Props) => {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <HeaderLg title={info.name} imagePath={info.imagePath} />
      <ProjectPage
        info={info}
        about="Techies love their TLA (Three Letter Acronyms)!"
      >
        <div className={styles.spaceArea}>
          <h4>Try it out!</h4>
          <Input type="number" placeholder="Enter an age in years on Earth" />
          <Button color="primary">Calculate</Button>
          <div>
            <div className={styles.planetArea}>
              <img
                className={styles.planet}
                src={require('assets/images/planets/mercury.svg')}
                alt="mercury"
              />
              <figcaption>Mercury</figcaption>
            </div>
            <h2>N/A</h2>
          </div>
          <div>
            <div className={styles.planetArea}>
              <img
                className={styles.planet}
                src={require('assets/images/planets/venus.svg')}
                alt="venus"
              />
              <figcaption>Venus</figcaption>
            </div>
            <h2>N/A</h2>
          </div>
          <div>
            <div className={styles.planetArea}>
              <img
                className={styles.planet}
                src={require('assets/images/planets/earth.svg')}
                alt="earth"
              />
              <figcaption>Earth</figcaption>
            </div>
            <h2>N/A</h2>
          </div>
          <div>
            <div className={styles.planetArea}>
              <img
                className={styles.planet}
                src={require('assets/images/planets/mars.svg')}
                alt="mars"
              />
              <figcaption>Mars</figcaption>
            </div>
            <h2>N/A</h2>
          </div>
          <div>
            <div className={styles.planetArea}>
              <img
                className={styles.planet}
                src={require('assets/images/planets/jupiter.svg')}
                alt="jupiter"
              />
              <figcaption>Jupiter</figcaption>
            </div>
            <h2>N/A</h2>
          </div>
          <div>
            <div className={styles.planetArea}>
              <img
                className={styles.planet}
                src={require('assets/images/planets/saturn.svg')}
                alt="saturn"
              />
              <figcaption>Saturn</figcaption>
            </div>
            <h2>N/A</h2>
          </div>
          <div>
            <div className={styles.planetArea}>
              <img
                className={styles.planet}
                src={require('assets/images/planets/uranus.svg')}
                alt="uranus"
              />
              <figcaption>Uranus</figcaption>
            </div>
            <h2>N/A</h2>
          </div>
          <div>
            <div className={styles.planetArea}>
              <img
                className={styles.planet}
                src={require('assets/images/planets/neptune.svg')}
                alt="neptune"
              />
              <figcaption>Neptune</figcaption>
            </div>
            <h2>N/A</h2>
          </div>
        </div>
      </ProjectPage>
    </>
  );
};

export default SpaceAge;
