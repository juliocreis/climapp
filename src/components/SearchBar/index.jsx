import "./styles.css";

const SearchBar = ({ searchCity }) => {  

  const onSubmit = (event) => {
    event.preventDefault();
    searchCity(event.target[0].value);
  }

  return (
    <form className="form-search" onSubmit={onSubmit}>
      <label className="search-bar">
        <input type="text" placeholder="Digite a cidade" />
        <button type="submit">
          <img src="./search.svg" alt="ícone de busca" />
        </button>
      </label>
    </form>
  );
};

export default SearchBar;
