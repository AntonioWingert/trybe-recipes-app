import React, { useContext } from 'react';
import { RecipesContext } from '../../context/RecipesProvider';

function SearchBar() {
  const { setTypeSearch } = useContext(RecipesContext);
  return (
    <div>
      <label htmlFor="ingredient-search-radio">
        <input
          id="ingredient-search-radio"
          data-testid="ingredient-search-radio"
          type="radio"
          name="search-radio-buttons"
          value="ingrediente"
          onClick={ (e) => { setTypeSearch(e.target.value); } }
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          id="name-search-radio"
          data-testid="name-search-radio"
          type="radio"
          name="search-radio-buttons"
          value="nome"
          onClick={ (e) => { setTypeSearch(e.target.value); } }
        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          id="first-letter-search-radio"
          data-testid="first-letter-search-radio"
          type="radio"
          name="search-radio-buttons"
          value="primeira-letra"
          onClick={ (e) => { setTypeSearch(e.target.value); } }
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
