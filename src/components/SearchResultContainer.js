import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./EmployeeCard";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  search = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted
  handleFormSubmit = event => {
    event.preventDefault();
    this.search(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
