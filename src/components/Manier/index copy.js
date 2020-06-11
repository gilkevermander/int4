// MainForm.jsx
import React, { Component, useState } from 'react';
import Opnemen from '../Opnemen/index';
import Bevestiging from '../Bevestiging/index';
import Land from '../Land/index';
import { useStore } from "../../hooks/useStore.js";

class Manier extends Component {
  state = {
    step: 1,
    selectedoption: '',
    land: ''
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => event => {
    this.setState({ [input]: event.target.value })
  }


  // handleOptionChange(changeevent) {
  //   this.setState({
  //     selectedOption: changeevent.target.value
  //   });
  // }

  render() {
    const { step } = this.state;
    const { land, selectedoption } = this.state;
    const values = { land, selectedoption };
    switch (step) {
      case 1:
        return <Opnemen
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      case 2:
        return <Land
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          landStore= {landStore}
        />
      case 3:
        return <Bevestiging />
      default:



    }


  }
}

export default Manier;