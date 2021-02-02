import React from "react";

const styles = {
  input:{
    maxWidth: "30%",
    display: "flex",
    justifyContent: "center",
  },
  searchButton:{
    display: "flex",
    justifyContent: "center"
  }
  
}

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          style={styles.input}
          placeholder="Search the DataBase"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3" style={styles.searchButton}>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
