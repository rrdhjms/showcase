import React from 'react';
import { Crumb } from '../types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';
import route from 'types/route';
import HeaderLg from 'components/Header/HeaderLg';

type Props = {
  crumbs: Array<Crumb>;
  info: route;
};

const WordCount = ({ crumbs, info }: Props) => {
  return (
    <>
      <HeaderLg title={info.name} imagePath={info.imagePath} />
      <Breadcrumbs crumbs={crumbs} />
      <p>
        This page is under construction
        <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        condimentum turpis justo, vitae viverra mauris feugiat eu. Pellentesque
        ac risus vehicula risus iaculis hendrerit ac et risus. Aenean faucibus,
        dolor interdum dictum vehicula, sem massa dignissim orci, sit amet
        mattis ex odio id metus. Maecenas velit nulla, aliquet semper lacus et,
        tempor bibendum eros. Suspendisse elementum risus vitae tincidunt
        suscipit. Vestibulum sit amet arcu ac est commodo ullamcorper. Duis
        bibendum lacus ut dapibus semper.
      </p>
    </>
  );
};

export default WordCount;
