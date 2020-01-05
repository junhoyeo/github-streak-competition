import * as React from 'react';
import Normalize from 'react-normalize';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Home } from '../pages';

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
