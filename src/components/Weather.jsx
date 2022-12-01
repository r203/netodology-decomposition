/**
 * Компонент погоды
 */
const Weather = ({ weather }) => {
  return (
    <div className="weather">
      <div className="weather__icon">{weather.icon}</div>
      <div className="weather__degrees">{weather.degrees}</div>
      <div className="weather__duringday">
        <div className="weather__morning"> Утром {weather.morning_degrees}</div>
        <div className="weather__day">Днем {weather.day_degrees}</div>
      </div>
    </div>
  )
}

export default Weather;