import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import TableHead from "./TableHead"
class SearchResultContainer extends Component {
 
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    toggleName: false,
    toggleCity: false,
    sortedYoungest: false
  };
// Used ternary here instead of if else. To sort names 
  sortByName = () =>{
    this.state.toggleName ? this.namesAsc():this.nameDesc()
  }
// sorts from a to z with employee last names
  namesAsc=()=>{
    console.log("Ascending")
    const sortedEmployees = this.state.employees.sort((a, b) =>
      (a.name.last < b.name.last) ? 1 :
      (a.name.last === b.name.last) ? ((a.name.first < b.name.first) ? 1 : -1) : -1)
    this.setState({
      ...this.state,
      filteredEmployees: sortedEmployees,
      toggleName: false
    })
  }
// sorts from z to a with employee last names
  nameDesc =()=>{
    console.log("Descending")
     const sortedEmployees = this.state.employees.sort((a, b) => 
        (a.name.last > b.name.last) ? 1 :
        (a.name.last === b.name.last) ? ((a.name.first > b.name.first) ? 1:-1) : -1)
        this.setState({
          ...this.state,
          filteredEmployees: sortedEmployees,
          toggleName: true 
        })
  }
// sorts cities, it does sort. However, I'm not certain what the sorting is.
  sortByCity = () => {
    if (!this.state.toggleCity) {
      const sortedEmployees = this.state.employees.sort((a, b) =>
        (a.location.state < b.location.state) ? 1 :
        (a.location.state === b.location.state) ? ((a.location.city < b.location.city) ? 1 : -1) : -1)
      this.setState({
        ...this.state,
        filteredEmployees: sortedEmployees,
        toggleCity: true
      })
    } else {
      const sortedEmployees = this.state.employees.sort((a, b) =>
        (a.location.state > b.location.state) ? 1 :
        (a.location.state === b.location.state) ? ((a.location.city > b.location.city) ? 1 : -1) : -1)
      this.setState({
        ...this.state,
        filteredEmployees: sortedEmployees,
        toggleCity: false
      })
    }

  }

// function to sort youngest to oldest by comparing parameters
  youngest = (a, b) => {
    const aAge = a.dob.age;
    const bAge = b.dob.age;

    let comparison = 0;
    if (aAge > bAge) {
      comparison = 1;
    } else if (aAge < bAge) {
      comparison = -1;
    }
    return comparison
  }
// function to sort oldest to youngest by comparing parameters
  oldest = (a,b) => {
    const aAge = a.dob.age;
    const bAge = b.dob.age;

    let comparison = 0;
    if (aAge < bAge) {
      comparison = 1;
    } else if (aAge > bAge) {
      comparison = -1;
    }
    return comparison
  }

  sortByAge = () => {
    if(!this.state.sortedYoungest){
      let sortedEmployeeList = this.state.employees.sort(this.youngest)
      console.log(sortedEmployeeList)
      this.setState({
        ...this.state,
        filteredEmployees: sortedEmployeeList,
        sortedYoungest: true
      })
    }else{
      let sortedEmployeeList = this.state.employees.sort(this.oldest)
      console.log(sortedEmployeeList)
      this.setState({
        ...this.state,
        filteredEmployees: sortedEmployeeList,
        sortedYoungest: false
      })
    }
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

  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const users = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      ...this.state,
      filteredEmployees: users,
      search: value
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
          sortByCity={this.sortByCity}
          sortByAge={this.sortByAge}
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
