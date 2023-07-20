import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

function pageReducer(state = {state :'home', num : 0}, action){
    if(action.type === 'home') {
        state = { state : 'home', num : 0 };
    } else if (action.type === 'intro') {
        state = {state : 'intro', num : 1}
    } else if (action.type === 'skills') {
        state = {state : 'skills', num : 2}
    } else if (action.type === 'project') {
        state = {state : 'project', num : 3}
    } else if (action.type === 'contact') {
        state = {state : 'contact', num : 4}
    }
    return state
}

function projectReducer(state = 'team' , action) {
    if(action.nav === 'team') {
        state = 'team'
    } else if (action.nav === 'personal') {
        state = 'personal'
    }
    return state
}
function detailReducer(state = '' , action) {
    if(action.select === 'jubging') {
        state = 'jubging'
    } else if(action.select === 'damso') {
        state = 'damso'
    } else if(action.select === 'jaladin') {
        state = 'jaladin'
    } else if(action.select === 'portfolio') {
        state = 'portfolio'
    } else if(action.select === 'todo') {
        state = 'todo'
    } else if(action.select === 'wooneung') {
        state = 'wooneung'
    } else {
        state = ''
    }
    return state
}

const reducer = combineReducers({
    page : pageReducer,
    project : projectReducer,
    detail : detailReducer,
})

let store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
