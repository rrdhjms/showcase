import React from 'react';
import Input from 'reactstrap/lib/Input';
import { Crumb } from '../types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';

type Props = {
  crumbs: Array<Crumb>;
};

const Acronym = ({ crumbs }: Props) => {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <h3>Acronym Generator</h3>
      <p>
        What is it?
        <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        condimentum turpis justo, vitae viverra mauris feugiat eu. Pellentesque
        ac risus vehicula risus iaculis hendrerit ac et risus. Aenean faucibus,
        dolor interdum dictum vehicula, sem massa dignissim orci, sit amet
        mattis ex odio id metus. Maecenas velit nulla, aliquet semper lacus et,
        tempor bibendum eros. Suspendisse elementum risus vitae tincidunt
        suscipit. Vestibulum sit amet arcu ac est commodo ullamcorper. Duis
        bibendum lacus ut dapibus semper.
      </p>
      <Input type="text" />
    </>
  );
};

export default Acronym;
