import React from 'react';
import { Form, Button } from 'semantic-ui-react';


const Land = ({nextStep, values, setLand, landStore, prevStep}) => {
  const saveAndContinue = (e) => {
    e.preventDefault();
    nextStep();
  }

  const back = (e) => {
    e.preventDefault();
    prevStep();
  }

  console.log(values);
  console.log(landStore.lands);

  return (
    <Form color='blue' >
      <h1 className="ui centered">Enter Personal Details</h1>
      <Form.Field>
        <select name="land" id="land" onChange={e => setLand(e.currentTarget.value)}>
          {landStore.lands.map(land => (
            <option key={land.id} id="land" name="land" value={land.title} >{land.title}</option>
          ))}
        </select>
      </Form.Field>
      <Button onClick={back}>Back</Button>
      <Button onClick={saveAndContinue}>Save And Continue </Button>
    </Form>
  )
}

export default Land;