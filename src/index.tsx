import './index.css';
import App from './App';
/* //#region 
https://react-slick.neostack.com/docs/get-started 
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
https://react-bootstrap.netlify.app/getting-started/introduction/  
//#endregion */
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { combineReducers,createStore} from "redux";
import _combineReducers from "redux/combineReducers"

const rootReducers = combineReducers(_combineReducers)
const store = createStore(rootReducers)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
