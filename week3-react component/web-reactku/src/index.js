import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloComponent from './components/HelloComponent';
import reportWebVitals from './reportWebVitals';
import Test from './components/Test';
import Login from './Login';

function HelloComponentTest() {
  return(
    <HelloComponent />
  )
}

class StateFullComponent extends React.Component {
  render() {
    return <p>StateFullComponent</p>
  }
}

// call stateless component
// ReactDOM.render(<HelloComponentTest />,document.getElementById('root'));

// call statefullcomponent
// ReactDOM.render(<StateFullComponent />,document.getElementById('root'));

// call lifecycle component
// ReactDOM.render(<Test />,document.getElementById('root'));

// ReactDOM.render(<App />,document.getElementById('root'));

// calll tugas
ReactDOM.render(<Login />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();