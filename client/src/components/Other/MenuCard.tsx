import React from 'react';
import { Card, CardTitle, CardBody, Row, Col, CardFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import difficulty from 'enums/difficulty';
import { getDifficulty } from 'constants/colors';

type Props = {
  path: string;
  icon: string;
  name: string;
  description: string;
  color: string;
  difficulty: difficulty;
};

export default function MenuCard({
  path,
  icon,
  name,
  description,
  color,
  difficulty,
}: Props) {
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };
  return (
    <Card className="card-stats card-hover" onClick={() => handleClick()}>
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
              <i style={{ color: color }} className={icon} />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p
                style={{ color: getDifficulty(difficulty) }}
                className="card-category"
              >
                {difficulty}
              </p>
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
