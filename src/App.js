import Header from "./components/Header";
import React from 'react';
import axios from "axios";
import SearchResultContainer from "./components/SearchResultContainer"
const api = axios.create({
  baseURL: "https://randomuser.me/api/?seed=foobar&results=30&inc=picture,name,phone,email,dob",
})

function App() {

  api.get("/").then(res =>{
    console.log(res.data)
  })

  return (
    <div className="app">
    <Header /> 
    <SearchResultContainer />
    </div>
  );
}

export default App;
