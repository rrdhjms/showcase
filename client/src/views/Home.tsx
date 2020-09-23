import React, { useState, useEffect } from 'react';
import MenuCard from 'components/Other/MenuCard';
import routes from '../routes';
import styles from './Home.module.css';
import ListHeader from 'components/Other/ListHeader';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Crumb } from 'types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';
import HeaderLg from 'components/Header/HeaderLg';
import route from 'types/route';

type Props = {
  crumbs: Array<Crumb>;
  info: route;
};

const Home = ({ crumbs, info }: Props) => {
  const [routesList, setRoutes] = useState(routes);
  const [searchTerm, setSearchTerm] = useState('');

  const dynamicSearch = () =>
    routesList.filter((route) =>
      route.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    setRoutes(
      routes.filter((route) => {
        return route.name !== 'Home';
      })
    );
  }, []);

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <HeaderLg title={info.name} imagePath={info.imagePath} />
      <header>
        <p className={styles.topParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          condimentum turpis justo, vitae viverra mauris feugiat eu.
          Pellentesque ac risus vehicula risus iaculis hendrerit ac et risus.
          Aenean faucibus, dolor interdum dictum vehicula, sem massa dignissim
          orci, sit amet mattis ex odio id metus. Maecenas velit nulla, aliquet
          semper lacus et, tempor bibendum eros. Suspendisse elementum risus
          vitae tincidunt suscipit. Vestibulum sit amet arcu ac est commodo
          ullamcorper. Duis bibendum lacus ut dapibus semper.
        </p>
      </header>
      <form style={{ width: '370px', marginBottom: '1rem' }}>
        <InputGroup className="no-border">
          <Input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder="Search..."
          />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <i className="nc-icon nc-zoom-split" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </form>

      <ListHeader
        header="Projects"
        info={`Showing ${dynamicSearch().length} projects`}
      />
      <div className={styles.serviceList}>
        {dynamicSearch().map((prop, key) => {
          if (prop.name !== 'Home') {
            return (
              <MenuCard
                path={prop.path}
                icon={prop.icon}
                name={prop.name}
                description={prop.description}
                color={prop.color}
                key={key}
              />
            );
          }
          return <></>;
        })}
      </div>
    </>
  );
};

export default Home;
