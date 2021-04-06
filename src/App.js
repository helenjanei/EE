import './App.css';
import React from 'react'

 class App extends React.Component {

constructor(){
    super();

    this.state={
      search:null
    };
  }  
  render() {
    return (
    <div className="App">
     <h1>Enter Submission ID</h1>
      <input className="input" />
    </div>
    )
}
}

export default App;
