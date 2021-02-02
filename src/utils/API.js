import axios from "axios";

const BASEURL = "https://randomuser.me/api/?seed=foobar&results=30&inc=picture,name,phone,email,dob";

// Export an object with a "search" method that searches
export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};
