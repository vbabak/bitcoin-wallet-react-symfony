import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import registerServiceWorker from './registerServiceWorker';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import App from './containers/App';
import './index.css';
//
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path={App.component_url} component={App}/>
        <Route exact path={SignIn.component_url} component={SignIn}/>
        <Route exact path={SignUp.component_url} component={SignUp}/>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
//
// render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes}/>
//   </Provider>, document.getElementById('root'));
registerServiceWorker();
