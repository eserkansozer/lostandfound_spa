import React, { Component } from 'react';
import LostLocation from './Lost/LostLocation'
import LostDetails from './Lost/LostDetails';
import LostEmail from './Lost/LostEmail';
import cities from './cities.json'
import LostConfirm from './Lost/LostConfirm';
import axios from 'axios';

class LostScenario extends Component {
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
      document.getElementById('lostWrapper').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }, 500);


    // this.setState({//set state in async call handlers to HTTP. Not here.
    //   step : 1,
    //   selectedLocationName: this.locations[0].name,
    //   selectedLocationCount: this.locations[0].count,
    //   selectedType: 'keys',
    //   selectedColour: 'red'
    // });
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
    let lostItem = {
      Type : this.state.selectedType,
      Colour: this.state.selectedColour,
      Location : this.state.selectedLocationName,
      LostEmail : this.state.enteredEmail
    };
   
    axios.post('/lost', lostItem)
    .then(response => {
      console.log(response)
    });

    this.setState({
      step: 0
    });
  }

  render() {
    switch(this.state.step){
      case 1:
        return (
          <div id="lostWrapper" className="page-wrapper">
            <LostLocation locations={this.locations} selectedLocationName = {this.state.selectedLocationName} selectedLocationCount = {this.state.selectedLocationCount} selectLocationHandler={this.selectLocation} nextStepHandler={this.nextStep} />
          </div>
        );
      case 2:
        return(
          <div id="lostWrapper" className="page-wrapper">
            <LostDetails colours={this.colours} types={this.types} selectedColour = {this.state.selectedColour} selectedType = {this.state.selectedType} selectTypeHandler={this.selectType} selectColourHandler ={this.selectColour} nextStepHandler={this.nextStep}/>
          </div>
        );
      case 3:
        return(
          <div id="lostWrapper" className="page-wrapper">
            <LostEmail enteredEmail={this.state.enteredEmail} emailChangeHandler={this.emailChange} nextStepHandler={this.nextStep}/>
          </div>
        );
      case 4:
          return(
          <div id="lostWrapper" className="page-wrapper">
            <LostConfirm state={this.state} submitHandler={this.submit}/>
          </div>
          );
      default:
          return null;
    }
  }
}

export default LostScenario