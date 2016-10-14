require("../scss/index.scss")
var React = require('react');
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from './reducers'
import App from './App'
import TweetsContainer from './TweetsContainer'
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(browserHistory, store)
window.store = store.getState();
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TweetsContainer}/>

      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('matrixchat')
);
