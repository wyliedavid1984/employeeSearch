import axios from "axios";

// Export an object with a "search" method that searches
const API = {
  
  getEmployee: function() {
    const BASEURL = "https://randomuser.me/api/?seed=foobar&results=30&inc=picture,name,phone,email,dob";
    return axios.get(BASEURL);
  }
};

export default API;