import * as React from 'react';
import * as ReactDOM from 'react-dom';
import reduxStore from './redux';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import ACS from './pages/ACS';
import Census2020 from './pages/Census2020';
import './app.css';

ReactDOM.render(
  <Provider store={reduxStore}>
    <div>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/acs' component={ACS} />
          <Route exact path='/census2020' component={Census2020} />
        </Switch>
      </HashRouter>
    </div>
  </Provider>,
  document.getElementById('app')
);
