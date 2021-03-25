import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { counter} from './redux/redux'

let store = createStore(
  counter,
  compose(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <React.StrictMode>
    <App 
      store={
        store
      }    
    />
  </React.StrictMode>,
  document.getElementById('blog')
);
