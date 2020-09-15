import React from 'react';
import { Card, CardTitle, CardBody, Row, Col, CardFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';

type Props = {
  path: string;
  icon: string;
  name: string;
  description: string;
  color: string;
};

export default function MenuCard({
  path,
  icon,
  name,
  description,
  color,
}: Props) {
  const history = useHistory();

  const onClick = () => {
    history.push(path);
  };
  return (
    <Card className="card-stats card-hover" onClick={() => onClick()}>
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
              <i style={{ color: color }} className={icon} />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Elixir</p>
              <CardTitle tag="p">{name}</CardTitle>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">{description}</div>
      </CardFooter>
    </Card>
  );
}
