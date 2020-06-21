import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots, setRoute, setName } from '../actions';

import './App.css';
import MainPage from './MainPage/MainPage';

// Parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    route: state.setRoute.route,
    name: state.setName.name
  }
}

// Dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (text) => dispatch(setSearchField(text)),
    onRequestRobots: () => dispatch(requestRobots()),
    onRouteChange: (text) => dispatch(setRoute(text)),
    onNameChange: (text) => dispatch(setName(text))
  }
}

class App extends Component {
  render() {
    return <MainPage { ...this.props }/>;
  }
}

// Action done from mapDispatchToProps will change state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
