import "./styles.css";

const ForecastItem = ({ date, weekday, condition, description, min, max }) => {
  return (
    <section className="forecast-card">
      <div className="forecast-day">
        <p className="forecast-weekday">{weekday}</p>
        <p className="forecast-date">({date})</p>
      </div>
      <img
        className="forecast-condition"
        src={`./icons-weather/${condition}.svg`}
        alt={description}
      ></img>
      <p className="forecast-minmax">
        {min}/{max}°
      </p>
    </section>
  );
};

export default ForecastItem;
