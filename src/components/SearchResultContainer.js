import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";

class SearchResultContainer extends Component {
  constructor(props){
  super(props);
  this.state = {
    search: "",
    employees: [{}]
  };
}
  // search = query => {
  //   API.search(query)
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };
  componentDidMount(){
    API.getEmployee().then(results =>{
      console.log(results.data)
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
          search={this.search}
          handleInputChange={this.handleInputChange}
        />
        <table className = "table-body" >
          <thead>
            <tr>
            <th><button>Photo</button></th>
            <th><button>Name</button></th>
            <th><button>State</button></th>
            <th><button>Phone Number</button></th>
            <th><button>DOB</button></th>
            </tr>
          </thead>
          <tbody>
            <EmployeeCard employees={this.state.employees} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResultContainer;
