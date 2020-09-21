import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';
import { checkLuhn } from '../api/luhn';
import { useHistory } from 'react-router-dom';

export default function Luhn() {
  const [result, setResult] = useState<any | null>(null);
  const [luhn, setLuhn] = useState<number>();
  const history = useHistory();

  const onClick = async () => {
    if (luhn) {
      const res = await checkLuhn(luhn);
      if (res.error) {
        console.log(res.error);
      } else if (res.data) {
        setResult(res.data.result);
      }
    }
  };

  return (
    <>
      <h3>Luhn</h3>
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
      <Input type="number" onChange={(e) => setLuhn(+e.target.value)}></Input>
      <Button onClick={onClick}>Get</Button>
      <h4>{result}</h4>
    </>
  );
}
