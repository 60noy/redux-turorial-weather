import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import ChartLine from '../components/ChartLine';

class WeatherList extends Component {
  renderWeather = (cityData) =>{
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp)
    const pressures = cityData.list.map((weather) => weather.main.pressure)
    const humids = cityData.list.map((weather) => weather.main.humidity)
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <ChartLine data={temps} gradient={['#00c6ff', '#F0F', '#FF0']} units='&deg;C'  />
        </td>
        <td>
          <ChartLine data={pressures} gradient={['#f72047', '#ffd200', '#1feaea']} units='hPa' />
        </td>
        <td>
          <ChartLine data={humids} gradient={['#2196F3','#E91E63','#FFF59D']} units='%'/>
        </td>
      </tr>
    )
  }
  render() {
    return (
      <Table responsive bordered>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.weather.map(this.renderWeather)
          }
        </tbody>
      </Table>
  );
  }
}

const mapStateToProps = ({weather}) => {
  return {
    weather
  }
}
export default connect(mapStateToProps)(WeatherList);
