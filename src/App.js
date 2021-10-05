import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <Router>
        {
          this.props.auth0.isAuthenticated ?
            <Header isAuthenticated={this.props.auth0.isAuthenticated}
              NAME={this.props.auth0.user.name} />
            : <Header />

        }
        <Switch>
          <Route exact path="/">

            {
              this.props.auth0.isAuthenticated ?
                <Main />
                : <></>
            }
          </Route>
          <Route path="/favorite">
            {
              this.props.auth0.isAuthenticated ?
                <Favorite /> : <></>
            }

          </Route>
        </Switch>
        {/* @todo show login button and hide the list for unauthenticated users */}
        {/* @todo show logout button and show items list components for authenticated users */}
      </Router>
    )
  }
}
export default withAuth0(App);