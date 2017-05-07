import React, { Component } from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.getPredictions = this.getPredictions.bind(this);
  }

  handleChange(evt) {
    this.setState({value: evt.target.value});
  }

  getPredictions() {
    console.log("Get Predictions");
  }

  render() {
    return (
      <div className="App">
        <h2>Cutting Efficiency Predictor</h2>
        <p> Enter Guide: </p>
        <FormGroup>
        <FormControl componentClass={"input"}
        type={"text"}
        value={this.state.value} onChange={this.handleChange}/>
        </FormGroup>
        <Button onClick={this.getPredictions}> Get Predictions </Button>
      </div>
    );
  }
}

export default App;
