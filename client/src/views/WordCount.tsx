import React, { useEffect } from 'react';
import { Crumb } from '../types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';
import Route from 'types/Route';
import HeaderLg from 'components/Header/HeaderLg';
import Construction from 'components/Temp/Construction';

type Props = {
  crumbs: Array<Crumb>;
  info: Route;
};

const WordCount = ({ crumbs, info }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <HeaderLg title={info.name} imagePath={info.imagePath} />
      <Construction />
    </>
  );
};

export default WordCount;
