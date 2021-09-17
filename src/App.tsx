import React, { Component } from 'react';
import './App.css';

import { Header, Footer } from './components/common';
import { Portal } from './components/auth';
import { TripsIndex } from './components/trips';

type AppProps = {};
type AppState = {
  sessionToken: string | null,
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      sessionToken: '',
    }
  }

  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState({
        sessionToken: localStorage.getItem('token'),
      })
    };
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({
      sessionToken: newToken,
    });
    console.log(this.state.sessionToken)
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({
      sessionToken: '',
    });
  }

  render() {
    return (
      <div className="App">
        <Header logout={this.clearToken} />
        {(this.state.sessionToken === localStorage.getItem('token')) ? <TripsIndex sessionToken={this.state.sessionToken} /> : <Portal updateToken={this.updateToken} />}
        <Footer />
      </div>
    );
  }
}

export default App;
