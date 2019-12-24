import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from "react-router-dom";
import cookie from 'react-cookies';

const mapStateToProps = state => {
  return {
    auth: state.authentication
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  handleLogout() {
    // this.props.logoutUser();
  }

  render() {
    return (
        <div className="appContainer">

          {this.props.children}

        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
