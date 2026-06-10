import "./styles.css";
import ForecastItem from "../ForecastItem";

const ForecastList = ({ forecasts }) => {
    return (
        <div className="forecast-list">
            {forecasts.map((forecast, index) => (
                <ForecastItem key={index} {...forecast}/> 
            ))}
        </div>
    )
}

export default ForecastList;