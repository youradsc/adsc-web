import React, { Component } from 'react';
import { Container, Header, } from 'semantic-ui-react'
import { Welcome, Amzn, Auto, Fulfil, PR, SOP, CS, M } from './Steps.js';
import { states } from './States.js';
import { StateMachine } from './StateMachine.js';

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: states.WELCOME,
      vehicleType: null,
      vehicles: []
    };
    this._yes = this._yes.bind(this);
    this._no = this._no.bind(this);
    this.stateMachine = new StateMachine();
  }

  _yes(desiredState) {
    let currentState = this.state.currentState;
    let nextState = this.stateMachine.transitionTo(currentState, desiredState);
    this.setState({
      currentState: nextState
    });
  }

  _no(desiredState) {
    let currentState = this.state.currentState;
    let nextState = this.stateMachine.transitionTo(currentState, desiredState);
    this.setState({
      currentState: nextState
    });
  }

  /*
   * Just a note -- you'll see the _next and _back functions
   * get passed around to child components alot. This is not
   * a very good practice, and in the real-world it would be
   * better to use a library like redux to handle application
   * state.
   */
  _currentStep() {
    switch(this.state.currentState) {
      case states.WELCOME:
        return(<Welcome 
          no={this._no}
          yes={this._yes}/>);
      case states.AMZN:
        return(<Amzn 
          no={this._no}
          yes={this._yes}/>);
      case states.FULFIL:
        return(<Fulfil 
          no={this._no}
          yes={this._yes}/>);
      case states.PR:
        return(<PR 
          no={this._no}
          yes={this._yes} />);
      case states.SOP:
        return(<SOP 
          no={this._no}
          yes={this._yes} />);
      case states.AUTO:
       return(<Auto
         no={this._no}
         yes={this._yes} />);
      case states.CS:
        return(<CS
          no={this._no}
          yes={this._yes} />);
      case states.M:
        return(<M
          no={this._no}
          yes={this._yes} />);
      default:
        return(<Welcome next={this._next}/>);
    }
  }
  render() {
    return (
      <div>
        <Container text>
          <Header as='h2'>Your ADSC</Header>
          {this._currentStep()}
        </Container>
      </div>
    );
  }
}

export {Wizard};