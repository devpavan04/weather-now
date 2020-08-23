import React, { Component } from 'react'
import './weather.css'
import loadImg from './load.gif'
import * as main from '../JS/main'

export default class Weather extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div class="container">
        <div id="heading">
          <h1>Weather Now</h1>
        </div>
        <div id="alert"></div>
        <div id="form">
          <form id="inputForm" onSubmit={main.getweather}>
            <label for="location">Enter Location :</label>
            <input
              type="text"
              id="locationInput"
              placeholder="Ex : Bengaluru, New York"
            />
            <button type="submit" class="btn">Get Weather Details</button>
          </form>
        </div>
        <img src={loadImg} id="loader" />
      </div>
    )
  }
}