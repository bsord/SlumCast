import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import pages
import HomePage from './pages/HomePage';
import ControlPage from './pages/ControlPage/ControlPageContainer'

class Routes extends React.Component {
    render() {
      return (
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/control' component={ControlPage} />
          
          <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
