import React from 'react';
import { Crumb } from '../types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';
import Route from 'types/Route';
import HeaderLg from 'components/Header/HeaderLg';
import ProjectPage from './ProjectPage';

type Props = {
  crumbs: Array<Crumb>;
  info: Route;
};

const DnDCharacter = ({ crumbs, info }: Props) => {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <HeaderLg title={info.name} imagePath={info.imagePath} />
      <ProjectPage info={info} about={'Something here about DnD'}></ProjectPage>
    </>
  );
};

export default DnDCharacter;
