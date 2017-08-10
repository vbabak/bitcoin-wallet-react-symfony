import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import registerServiceWorker from './registerServiceWorker';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import './index.css';
//
// const store = createStore(
//   (state = {}) => state,
//   applyMiddleware(thunk)
// );

render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={SignIn} status={404}/>
      <Route exact path='/sign-in' component={SignIn}/>
      <Route exact path='/sign-up' component={SignUp}/>
    </div>
  </BrowserRouter>, document.getElementById('root'));
//
// render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes}/>
//   </Provider>, document.getElementById('root'));
registerServiceWorker();
