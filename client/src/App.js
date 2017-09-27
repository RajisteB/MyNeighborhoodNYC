import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Results from './components/Results'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Redirect } from 'react-router'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      value: "",
      apiDataLoaded: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  getInfo(housenum, streetname, zip) {
    axios.get(`https://data.cityofnewyork.us/resource/b2iz-pps8.json?$where= 
    housenumber= "${housenum}" AND streetname= "${streetname}" AND zip= "${zip}"&$order= novissueddate DESC`)
    .then(res => {
        this.setState({
          data: res.data,
        })
    })
    .then(
      axios.get(`https://data.cityofnewyork.us/resource/tyte-7qiq.json?$where= housenumber= "${housenum}" AND 
      streetname= "${streetname}" AND omostatusreason != "OMO Completed" AND omostatusreason != "Landlord Complied" AND zip= "${zip}"&$order= omocreatedate DESC`)
      .then(res => {
        this.setState({
          omoData: res.data,
          apiDataLoaded: true,
        })
      })
    )
  }


  renderResults() {
    if(this.state.apiDataLoaded) {
      return <Results  data={this.state.data} omoData={this.state.omoData}/>
    } else {
      return <p>Loading...</p>
    }
  }



  render() {
    return (
      <Router>
        <div className="App">
        Testing...
          <input id="houseinput" type="text" placeholder="Bldg #"/>
          <input id="streetname" type="text" placeholder="Streetname"/>
          <input id="zip" type="text" placeholder="Zipcode"/>
          <button onClick={ () => {
            var house = document.getElementById('houseinput').value;
            var street = document.getElementById('streetname').value.toUpperCase();
            var zip = document.getElementById('zip').value;
            this.getInfo(house, street, zip)
            }}>Search
          </button>
          {this.renderResults()}
        </div>
      </Router>
    );
  }
}

export default App;
