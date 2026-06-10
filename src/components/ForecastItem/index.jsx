import "./styles.css";

const getWeekday = (dateString) => {
    const [day, month] = dateString.split('/'); // Separa dia e mês
    const dateObj = new Date(new Date().getFullYear(), month - 1, day); // Gera data de hoje 
    const weekday = Intl.DateTimeFormat("pt-BR", { weekday: 'long'}).format(dateObj); // Formata a data para o dia da semana


    return weekday.charAt(0).toUpperCase() + weekday.split("-")[0].slice(1); // Torna a primeira letra maiuscula, remove o "-feira" e o "q" minúsculo 
}

const ForecastItem = ({ date, condition, description, min, max }) => {

  return (
    <section className="forecast-card">
      <div className="forecast-day">
        <p className="forecast-weekday">{getWeekday(date)}</p>
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
