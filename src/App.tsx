import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components/common';
import { Portal } from './components/auth';
import { TripsIndex } from './components/trips';
import { AdminDashboard } from './components/admin/AdminDashboard';

type AppProps = {};
type AppState = {
  sessionToken: string | null,
  role: string | null,
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      sessionToken: '',
      role: '',
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
        role: localStorage.getItem('role'),
      })
    };
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({
      sessionToken: newToken,
    });
  }
  updateRole = (newRole: string) => {
    localStorage.setItem('role', newRole);
    this.setState({
      role: newRole,
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
            <Portal updateToken={this.updateToken} sessionToken={this.state.sessionToken} />
          </Route>
          <Route exact path="/trips">
            <TripsIndex sessionToken={this.state.sessionToken} />
          </Route>
          <Route exact path="/admin">
            <AdminDashboard />
          </Route> 
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
