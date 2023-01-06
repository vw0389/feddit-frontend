import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AuthService from './services/auth.service';
// import AuthVerify from "./common/auth-verify";
import EventBus from './common/EventBus';
import Login from './components/Login';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }

    EventBus.on('logout', () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove('logout');
  }

  logOut() {
    AuthService.logout();
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <>
        <Header currentUser={currentUser} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/*<Route path="/profile" element={<Profile />} />*/}
        </Routes>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </>
    );
  }
}

export default App;
