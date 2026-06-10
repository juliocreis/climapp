import "./styles.css";

const ForecastCard = ({ weather }) => {
    return (
        <div className="forecast-container">
            {weather.forecast.map((day) => (
                    <section key={day.date} className="forecast-card">
                        <div className="forecast-day">
                            <p className="forecast-weekday">{day.weekday}</p>
                            <p className="forecast-date">({day.date})</p>
                        </div>
                        <img className="forecast-condition" src={`./icons-weather/${day.condition}.svg`}></img>
                        <p className="forecast-minmax">{day.min}/{day.max}°</p>
                    </section>
                ))}
        </div>
    )
}

export default ForecastCard;