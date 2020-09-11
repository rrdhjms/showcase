import React from 'react';
import MenuCard from 'components/MenuCard';
import routes from '../routes';

const Home = () => {
  return (
    <>
      <p style={{ textAlign: 'center', paddingBottom: '0.625rem' }}>
        Some stuff about what is going on here, a little introduction and all
        that
      </p>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          gridGap: '20px 40px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(370px, 1fr))',
        }}
      >
        {routes.map((prop, key) => {
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
        })}
      </div>
    </>
  );
};

export default Home;
