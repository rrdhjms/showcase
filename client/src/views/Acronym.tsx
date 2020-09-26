import React, { useState } from 'react';
import { Crumb } from '../types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';
import ProjectRoute from 'types/ProjectRoute';
import HeaderLg from 'components/Header/HeaderLg';
import ProjectPage from './ProjectPage';
import { Input, Button, Form } from 'reactstrap';
import { generateAcronym } from 'api/acronym';

type Props = {
  crumbs: Array<Crumb>;
  info: ProjectRoute;
};

const Acronym = ({ crumbs, info }: Props) => {
  const [sentence, setSentence] = useState<string>('');
  const [acronym, setAcronym] = useState<any | null>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sentence) {
      const res = await generateAcronym(sentence);
      if (res.error) {
        console.log(res.error);
      } else if (res.data) {
        setAcronym(res.data.result);
      }
    }
  };

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <HeaderLg title={info.name} imagePath={info.imagePath} />
      <ProjectPage
        info={info}
        about="Techies love their TLA (Three Letter Acronyms)!"
      >
        <h4>Try it out</h4>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            onChange={(e) => setSentence(e.target.value)}
            placeholder="Enter a phrase"
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button type="submit" color="primary">
              Generate
            </Button>

            <p style={{ margin: '0', fontSize: '1.3rem' }}>{acronym}</p>
          </div>
        </Form>
      </ProjectPage>
    </>
  );
};

export default Acronym;
