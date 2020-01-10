import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import NotFound from './Common/NotFound';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Header title="Lost then found!" />
        <div className='container'>
          <ErrorBoundary>
            <context.Provider value={{ infoBoxEnabled: true }}>
              <Switch>
                <Route path="/" exact render={() => <div></div>} />
                <Route path='/lost' component={LostScenario} />
                <Route path='/found' component={FoundScenario} />
                <Route path='/status/:id' component={StatusCheck} />
                <Route path='/status' component={StatusCheck} />
                <Route path='/confirmation' component={Confirmation} />
                <Route path='/UnmatchConfirmation' component={UnmatchConfirmation} />
                <Route path='/deleted' component={Deleted} />
                <Redirect from='/home' to='/' />
                <Route component={NotFound} />
              </Switch>
            </context.Provider>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
