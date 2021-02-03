import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import TableHead from "./TableHead"
class SearchResultContainer extends Component {
 
  state = {
    search: "",
    employees: []
  };

  // search = query => {
  //   API.search(query)
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };
  sortByName(){
   console.log(this.state)
    const sortedEmployees = this.state.employees.sort((a, b) => (a.name.last> b.name.last) ? 
    1 : (a.name.last === a.name.last) ?
     ((a.name.first > b.name.first) ?
      1:-1) : -1)
    console.log(sortedEmployees)
  }

  componentDidMount(){
    console.log("componentAbout to mount")
    API.getEmployee().then(results =>{
      console.log(results.data.results[0].name)
      this.setState({
        employees: results.data.results
      })
    })
  }
  
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <table className = "table" >
          <TableHead 
          sortByName={this.sortByName}
          />
          <tbody>
            <EmployeeCard 
            value={this.state.value}
            employees={this.state.employees} />
          </tbody>
        </table>



      </div>
    );
  }
}

export default SearchResultContainer;
