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

function SearchForm({handleInputChange, search}) {
  return (
    <form className="container">
      <div className="form-group text-center">
        <input
          onChange={(e)=>{
            e.preventDefault();
            handleInputChange(e);
          }}
          value={search}
          name="search"
          type="text"
          className="form-control"
          style={styles.input}
          placeholder="Search the DataBase"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
