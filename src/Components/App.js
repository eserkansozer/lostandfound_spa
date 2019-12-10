import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';//WebPack will include this css
import Header from './Common/Header'
import Navigation from './Common/Navigation'
import LostScenario from './LostScenario';
import FoundScenario from './FoundScenario';
import StatusCheck from './Status/StatusCheck';
import ErrorBoundary from './Common/ErrorBoundary';
import context from '../context/context'
import Confirmation from './Status/Confirmation';
import Deleted from './Status/Deleted';
import UnmatchConfirmation from './Status/UnmatchConfirmation';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Header title="Lost then found!" />
        <div className='container'>
          <ErrorBoundary>
            <context.Provider value={{ infoBoxEnabled: true }}>
              <div id="lostWrapper" className="page-wrapper">
                <Route path='/lost' component={LostScenario} />
              </div>
              <div id="foundWrapper" className="page-wrapper">
                <Route path='/found' component={FoundScenario} />
              </div>
              <div id="statusWrapper" className="page-wrapper">
                <Route path='/status' component={StatusCheck} />
              </div>
              <div id="confirmationWrapper" className="page-wrapper">
                <Route path='/confirmation' component={Confirmation} />
              </div>
              <div id="unmatchConfirmationWrapper" className="page-wrapper">
                <Route path='/UnmatchConfirmation' component={UnmatchConfirmation} />
              </div>
              <div id="deletedWrapper" className="page-wrapper">
                <Route path='/deleted' component={Deleted} />
              </div>
            </context.Provider>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
