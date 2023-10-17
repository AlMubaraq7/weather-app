import { Component } from "react";
import "./WeatherDisplay";
import "./Weather.scss";

import WeatherDisplay from "./WeatherDisplay";

const API_Key = "67861e2c54c51b2b3cb7994ab76e43c0";
class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      weather: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ city: value });
  };
  async handleSubmit(e) {
    e.preventDefault();
    const { city } = this.state;
    try {
      if (city) {
        const data = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}&units=metric`
        )
          .then((res) => res.json())
          .then((data) => (data.message ? alert("Enter a Valid City") : data));

        this.setState({
          weather: data,
        });
        console.log(data);
      } else return;
    } catch (error) {
      console.log(`Something went wrong ${error.message}`);
    }
  }
  render() {
    const { weather } = this.state;
    return (
      <>
        <div>
          <div className="group">
            <h1>Weather App</h1>
            <form className="form" onSubmit={this.handleSubmit}>
              <label>city</label>
              <input
                type="text"
                name="city"
                required
                maxLength={30}
                onChange={this.handleChange}
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
              <button type="submit">GET</button>
            </form>
          </div>
          {weather ? <WeatherDisplay weather={weather} /> : null}
        </div>
      </>
    );
  }
}

export default Weather;
