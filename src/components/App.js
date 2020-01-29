import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { handleInitialData } from '../actions/shared'
import Routes from './Routes'
import LoadingBar from 'react-redux-loading'
import Navigation from "./Navigation";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { notLoggedIn } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar></LoadingBar>
          <div className="main-container">
            <Navigation />
            <Routes notLoggedIn={notLoggedIn} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(App)