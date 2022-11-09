import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Get from './get';
import Post from './post';

class App extends React.Component{
  render(){
    return(
      <div>
      <Post/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
