import React from 'react';
import { Crumb } from '../types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';
import ProjectRoute from 'types/ProjectRoute';
import HeaderLg from 'components/Header/HeaderLg';
import Construction from 'components/Temp/Construction';

type Props = {
  crumbs: Array<Crumb>;
  info: ProjectRoute;
};

const Bob = ({ crumbs, info }: Props) => {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <HeaderLg title={info.name} imagePath={info.imagePath} />

      <Construction />
    </>
  );
};

export default Bob;
