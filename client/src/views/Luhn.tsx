import React, { useState } from 'react';
import { Button, Input, Form } from 'reactstrap';
import { checkLuhn } from '../api/luhn';
import { Crumb } from 'types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';
import ProjectRoute from 'types/ProjectRoute';
import HeaderLg from 'components/Header/HeaderLg';
import ProjectPage from './ProjectPage';

type Props = {
  crumbs: Array<Crumb>;
  info: ProjectRoute;
};

const Luhn = ({ crumbs, info }: Props) => {
  const [result, setResult] = useState<any | null>(null);
  const [luhn, setLuhn] = useState<number>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (luhn) {
      const res = await checkLuhn(luhn);
      if (res.error) {
        console.log(res.error);
      } else if (res.data) {
        setResult(res.data.result);
      }
    }
  };

  const renderResult = () => {
    switch (result) {
      case 'true':
        return (
          <i
            style={{ color: '#62B492', fontSize: '1.5rem' }}
            className="fas fa-check"
          />
        );
      case 'false':
        return (
          <i
            style={{ color: '#F34A56', fontSize: '1.5rem' }}
            className="fas fa-times"
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <HeaderLg title={info.name} imagePath={info.imagePath} />
      <ProjectPage
        info={info}
        about="Given a number determine whether or not it is valid per the Luhn formula."
      >
        <>
          <h4>Try it out</h4>
          <p>Enter a number to test if it is a valid per the Luhn formula.</p>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Input
              type="number"
              onChange={(e) => setLuhn(+e.target.value)}
              placeholder="Enter a number..."
            ></Input>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button type="submit" color="primary">
                Check
              </Button>
              {renderResult()}
            </div>
          </Form>
        </>
      </ProjectPage>
    </>
  );
};

export default Luhn;
