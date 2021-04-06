
import React, { Component } from 'react';
import './App.css';
import Information from './Assets/houses.json';
import axios from 'axios'
class App extends Component {

  constructor(){
    super();

    this.state={
      search:null,
      degreeDays:'',
      designRegion: ''
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  setLocation=(data)=>{
    let designRegion = data.location;
    this.setState({location:designRegion})
  }

  getDegreeDays=(location)=>{
     const headers = {
            'x-api-key': 'f661f74e-20a7-4e9f-acfc-041cfb846505',
            
        };
        axios.get('https://063qqrtqth.execute-api.eu-west-2.amazonaws.com/v1/weather?location={location}', { headers })
            .then(response => this.setState({ degreeDays: response.location.degreeDays }));
    }
  
  
  render(){
  
    const items = Information.filter((data)=>{
      if(this.state.search === data.submissionId)
      return data
      
    }).map(data=>{ 
       return(
        <div >
        <ul>
          <li className="list-items">
            <li className="li-items">Design Region: {data.designRegion}</li>
            <li className="li-items">Floor Area: {data.floorArea}</li>
            <li className="li-items">Age: {data.age}</li>
            <li className="li-items">Heating Factor: {data.heatingFactor}</li>
            <li className="li-items">Insulation Factor: {data.insulationFactor}</li>
          </li>
        </ul>
        
      </div>
      )
    })


    return (
      <div >
        <h1>Enter Submission ID</h1>
      <input className="input" type="text" placeholder="Enter Submission ID" onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )

  }
}

export default App;
