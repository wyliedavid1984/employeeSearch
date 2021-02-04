import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import TableHead from "./TableHead"
class SearchResultContainer extends Component {
 
  state = {
    search: "",
    employees: [],
    filteredEmployees: []
  };

//   sortByName(){
//     const sortedEmployees = this.employees.sort((a, b) => (a.name.last> b.name.last) ? 
//     1 : (a.name.last === a.name.last) ? ((a.name.first > b.name.first) ? 1:-1) : -1)
//     console.log(sortedEmployees)
//   }

 compareEmployee(a, b) {
   const aLast = a.name.last.toLowerCase();
   const bLast = b.name.last.toLowerCase();

   let comparison = 0;
   if (aLast > bLast) {
     comparison = 1;
   } else if (aLast < bLast) {
     comparison = -1;
   }
   return comparison
 }

 sortByName(){
   const sortedEmployeeList = this.state.employees.sort(this.compareEmployee)
   return sortedEmployeeList;
 }
 
  componentDidMount(){
    API.getEmployee()
      .then(results =>{
        this.setState({
          employees: results.data.results,
          filteredEmployees: results.data.results
        })
      })
      .catch(err => console.log(err))
  }
  
  searchEmployee = query => {
    API.getEmployee(query)
      .then(res => this.setState({
        searchEmp: res.data.results
      }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    console.log(value)
    // const users = this.state.employees.filter(employee => employee.toLowerCase() === value.toLowerCase())
    const users = this.state.employees.filter(employee => employee.name.first.toLowercase() === (value.toLowercase()) || employee.name.last.toLowercase()=== (value.toLowercase()));
    this.setState({
      filteredEmployees: users
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   const search = this.state.search;
  //   const searchedEmployees = this.state.employees.filter(employee => (employee.name.first.includes(search)));
  //   this.setState({
  //     filteredEmployees: searchedEmployees
  //   });
  // };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        /> 
        {this.state.employees ?(
        <table className = "table" >
          <TableHead 
          sortByName={this.sortByName}
          />
          <tbody> 
            <EmployeeCard 
            search={this.state.search}
            handleInputChange = {
              this.handleInputChange
            }
            value={this.state.value}
            employees={this.state.employees}
            filteredEmployees={this.state.filteredEmployees}
            />
          </tbody> 
        </table>
           ):(
            <h1>No Matching Employees</h1>
          )} 
        
      </div>
    );
  }
}

export default SearchResultContainer;
