import React, { Component } from 'react';
import { Provider } from 'react-redux';
import EventParticipationForm from './components/EventFormComponent/EventParticipationForm';
import getResponse from './getResponse';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <div className="participation-form">
        <h2 className="form-title">Event Form</h2>
        <hr />
        <EventParticipationForm onSubmit={ getResponse } />
      </div>
    </Provider>
    );
  }
}

export default App;