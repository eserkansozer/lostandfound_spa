import React, { Component } from 'react';
import FoundLocation from './Found/FoundLocation'
import FoundDetails from './Found/FoundDetails';
import FoundEmail from './Found/FoundEmail';
import cities from './cities.json'
import FoundConfirm from './Found/FoundConfirm';
import axios from 'axios';

class FoundScenario extends Component {
  constructor() {
    super();
    this.locations = cities;
    this.types = ['keys', 'clothes', 'bags', 'books', 'accessories', 'toys', 'other'];
    this.colours = ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'mixed'];
    this.state = {
      step: 1,
      selectedLocationName: this.locations[0].name,
      selectedLocationCount: this.locations[0].count,
      selectedType: 'keys',
      selectedColour: 'red',
      enteredEmail: ''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      document.getElementById('foundWrapper').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }, 500);
  }

  //use arrow functions syntax for this keyword
  selectLocation = (event) => {
    //It merges the state
    this.setState(
      {
        selectedLocationName: this.locations.find(l => l.name === event.target.value).name,
        selectedLocationCount: this.locations.find(l => l.name === event.target.value).count
      }
    );
  };

  selectType = (event) => {
        this.setState(
            {
                selectedType: event.target.value
            }
        );
    };

  selectColour = (event) => {
        this.setState(
            {
                selectedColour: event.target.value
            }
        );
    };

  emailChange = (event) => {
      this.setState({
          enteredEmail: event.target.value
      });
  };

  nextStep = () => {
    this.setState(
        (prevState) => { 
          return { step: prevState.step + 1 };
        }
      )
  }

  submit = () =>{
    let FoundItem = {
      Type : this.state.selectedType,
      Colour: this.state.selectedColour,
      Location : this.state.selectedLocationName,
      FoundEmail : this.state.enteredEmail
    };
   
    axios.post('/found', FoundItem)
    .then(response => {
      console.log(response)
    });

    this.setState({
      step: 0
    });

    this.props.history.push('/');
  }

  render() {
    switch(this.state.step){
      case 1:
        return (
          <div id="foundWrapper" className="page-wrapper">
            <FoundLocation locations={this.locations} selectedLocationName = {this.state.selectedLocationName} selectedLocationCount = {this.state.selectedLocationCount} selectLocationHandler={this.selectLocation} nextStepHandler={this.nextStep} />
         </div>
        );
      case 2:
        return(
          <div id="foundWrapper" className="page-wrapper">
          <FoundDetails colours={this.colours} types={this.types} selectedColour = {this.state.selectedColour} selectedType = {this.state.selectedType} selectTypeHandler={this.selectType} selectColourHandler ={this.selectColour} nextStepHandler={this.nextStep}/>
          </div>
        );
      case 3:
        return(
          <div id="foundWrapper" className="page-wrapper">
          <FoundEmail enteredEmail={this.state.enteredEmail} emailChangeHandler={this.emailChange} nextStepHandler={this.nextStep}/>
          </div>
        );
      case 4:
          return(
            <div id="foundWrapper" className="page-wrapper">
            <FoundConfirm state={this.state} submitHandler={this.submit}/>
            </div>
          );
      default:
          return null;
    }
  }
}

export default FoundScenario