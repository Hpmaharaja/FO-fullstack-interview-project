// -------------------------------
// Landing Page Screen
//
//
// -------------------------------

// Base Neccessary Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Route, withRouter } from 'react-router-dom';

// Redux Actions + Mapping Props ------------------------
import { actions } from './LandingRedux';

const mapStateToProps = state => {
  return {
    auth: state.customerApp.authentication
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(actions, dispatch)
  };
};
// ------------------------------------------------------

// ******************************************************

// Import External Components ###########################
// Routes Components
// ######################################################

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount = () => {

  };

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      {/* PLACE INDEX.HTML CODE HERE */}
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Landing)
);
