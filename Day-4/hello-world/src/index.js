import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './components/App';
import reducers from "./reducers"
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from "redux-thunk";

const store =createStore(reducers,{},applyMiddleware(reduxThunk))
ReactDOM.render(<Provider><App store={store} /></Provider>, document.getElementById('root'));
registerServiceWorker();
