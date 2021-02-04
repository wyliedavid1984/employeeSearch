import React from "react";

const styles = {
  inputDiv:{
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
      <div className="form-group text-center" style={styles.inputDiv}>
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          className="form-input input"
          placeholder="Search by Name"
          id="search"
        />
        {/* <button onClick={handleFormSubmit} className="btn btn-primary">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;
