import React from "react";

const styles = {
  input:{
    display: "flex",
    justifyContent: "center",
  },
  searchButton:{
    display: "flex",
    justifyContent: "center"
  }
  
}

function SearchForm({handleInputChange, search, handleFormSubmit}) {
  return (
    <form className="container">
      <div className="form-group text-center">
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          className="form-input"
          style={styles.input}
          placeholder="Search the DataBase"
          id="search"
        />
        <button onClick={handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
