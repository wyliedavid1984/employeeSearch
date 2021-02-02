import Header from "./components/Header";
import React from 'react';
import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me/api/?inc=picture,name,phone,email,dob",

})

function App() {

  api.get("/").then(res =>{
    console.log(res.data)
  })
  return (
    <div className="app">
     <Header /> 
    </div>
  );
}

export default App;
