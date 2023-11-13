import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Feelslike } from "../assets/feelslike.svg";
import { ReactComponent as Humidity } from "../assets/humidity.svg";
import { ReactComponent as Pressure } from "../assets/pressure.svg";
import { ReactComponent as Temperature } from "../assets/temperature.svg";
import { ReactComponent as Windgust } from "../assets/windgust.svg";
import { ReactComponent as Windspeed } from "../assets/windspeed.svg";
import { ReactComponent as Ground } from "../assets/ground.svg";
import { ReactComponent as Sea } from "../assets/sea.svg";
import Spinner from "./Spinner";
import "./InfoBox";
import InfoBox from "./InfoBox";
import "./WeatherDisplay.scss";

export default function WeatherDisplay({ weather, loading }) {
  const { city, list } = weather;
  const { name, country } = city;
  const [current] = list;
  const { main, wind } = current;
  const { feels_like, grnd_level, humidity, pressure, sea_level, temp } = main;
  const { gust, speed } = wind;
  const { description, icon } = current.weather[0];
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="group_2">
            <h2>
              <span>
                <Location className="icon" />
              </span>
              {name},{country}
            </h2>
            <div className="about">
              <div className="cloud_info">
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="cloud"
                  className="cloud"
                />
                <span className="cloud_type">{current.weather[0].main}</span>
                <span className="cloud_desc">{description}</span>
              </div>
              <div className="weather">
                <InfoBox
                  property="Feels Like"
                  value={`${feels_like}°C`}
                  icon={<Feelslike />}
                />
                <InfoBox
                  property="Ground Level"
                  value={`${grnd_level} m`}
                  icon={<Ground />}
                />
                <InfoBox
                  property="Humidity"
                  value={`${humidity}%`}
                  icon={<Humidity />}
                />
                <InfoBox
                  property="Pressure"
                  value={`${pressure} hPa `}
                  icon={<Pressure />}
                />
                <InfoBox
                  property="Sea level"
                  value={`${sea_level} m`}
                  icon={<Sea />}
                />
                <InfoBox
                  property="Temp"
                  value={`${temp}°C`}
                  icon={<Temperature />}
                />
                <InfoBox
                  property="Wind Gust"
                  value={`${gust} km/h`}
                  icon={<Windgust />}
                />
                <InfoBox
                  property="Wind Speed"
                  value={`${speed} km/h`}
                  icon={<Windspeed />}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
