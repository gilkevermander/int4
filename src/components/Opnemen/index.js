import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useObserver } from 'mobx-react-lite';

const Opnemen = ({ nextStep, values, setSelectedOption }) => {

  const saveAndContinue = (e) => {
    e.preventDefault()
    nextStep()
  }
  console.log(values);
  return (
    <Form >
      <h2 className="ui centered">Kies op welke manier jij jouw reisverhaal wilt vertellen</h2>
      <Form.Field>
        <label>
          <input type="radio" name="manier" value="podcast" onChange={e => setSelectedOption(e.target.value)} /> <span>Spreek een podcast in</span>
        </label>
        <label>
          <input type="radio" name="manier" value="video" onChange={e => setSelectedOption(e.target.value)} /> <span>Neem een video op</span>
        </label>
      </Form.Field>
      <Button onClick={saveAndContinue}>Save And Continue </Button>
    </Form>
  )

}

export default Opnemen;