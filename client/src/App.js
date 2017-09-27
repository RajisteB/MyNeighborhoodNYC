import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boro: null,
      casetype: null,
      casestatus: null,
      caseopendate: null,
      housenumber: null,
      streetname: null,
      zip: null,
      casejudgement: null,
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
    axios.get(`https://data.cityofnewyork.us/resource/kfyu-46k5.json?$where= 
    housenumber= "${housenum}" AND streetname= "${streetname}" AND zip= "${zip}"`)
    .then(res => {
      res.data.forEach((result) => {
        this.setState({
          housenumber: result.housenumber,
          street: result.streetname,
          apiDataLoaded: true,
        })
      })
    })
  }



  render() {
    return (
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
        <div>{this.state.housenumber}</div>
        <p>{this.state.street}</p>
      </div>
    );
  }
}

export default App;
