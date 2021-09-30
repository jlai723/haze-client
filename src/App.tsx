import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components/common';
import { Portal } from './components/auth';
import { TripsIndex } from './components/trips';

type AppProps = {};
type AppState = {
  sessionToken: string | null,
  userRole: string | null,
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      sessionToken: '',
      userRole: '',
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        sessionToken: localStorage.getItem('token'),
      })
    };
    if (localStorage.getItem('role')) {
      this.setState({
        userRole: localStorage.getItem('role'),
      })
    };
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({
      sessionToken: newToken,
    });
  }
  updateUserRole = (newRole: string) => {
    localStorage.setItem('role', newRole);
    this.setState({
      userRole: newRole,
    });
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({
      sessionToken: '',
    });
  }

  render() {
    return (
      <div>
        <Header logout={this.clearToken} token={this.state.sessionToken} />
        <Switch>
          <Route exact path="/">
            <Portal updateToken={this.updateToken} sessionToken={this.state.sessionToken} updateUserRole={this.updateUserRole} userRole={this.state.userRole} />
          </Route>
          <Route exact path="/trips">
            <TripsIndex sessionToken={this.state.sessionToken} userRole={this.state.userRole} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
