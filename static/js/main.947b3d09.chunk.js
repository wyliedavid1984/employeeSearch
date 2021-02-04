(this.webpackJsonpemployeesearchengine=this.webpackJsonpemployeesearchengine||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(3),c=n.n(a),o=n(13),r=n.n(o),i={jumbot:{background:"navy",color:"white",display:"block",marginBottom:"0px"},h1:{textAlign:"center"},p:{textAlign:"center"},hr:{margin:0,background:"red",height:"5px"}},l=function(){return Object(s.jsxs)("section",{className:"App-header",children:[Object(s.jsxs)("section",{className:"jumbotron",style:i.jumbot,children:[Object(s.jsx)("h1",{style:i.h1,children:" Employee Search Engine "}),Object(s.jsx)("p",{style:i.p,children:"Click on carrots to filter by heading or use the search box to narrow your results."})]}),Object(s.jsx)("hr",{style:i.hr})]})},h=n(1),j=n(14),d=n(15),u=n(18),m=n(17),b={inputDiv:{display:"flex",justifyContent:"center"},searchButton:{display:"flex",justifyContent:"center"}};var y=function(e){var t=e.handleInputChange,n=e.search;return e.handleFormSubmit,Object(s.jsx)("form",{className:"container",children:Object(s.jsx)("div",{className:"form-group text-center",style:b.inputDiv,children:Object(s.jsx)("input",{onChange:t,value:n,name:"search",type:"text",className:"form-input input",placeholder:"Search by Name",id:"search"})})})};var p=function(e){var t=e.filteredEmployees,n=e.employees,a=e.search,c=[];return a?t.map((function(e){return c.push(Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{alt:e.name,className:"img-fluid",src:e.picture.thumbnail})}),Object(s.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(s.jsx)("td",{children:e.location.city}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.dob.date})]},e.name.first+e.name.last))})):n.map((function(e){return c.push(Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{alt:e.name,className:"img-fluid",src:e.picture.thumbnail})}),Object(s.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(s.jsx)("td",{children:e.location.state}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.dob.date})]},e.name.first+e.name.last))})),c},g=n(16),O=n.n(g),f={getEmployee:function(){return O.a.get("https://randomuser.me/api/?seed=foobar&results=30&inc=picture,name,phone,location,email,dob,id")}};function x(e){var t=e.sortByName,n=e.sortByCity,a=e.sortByAge;return Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:Object(s.jsx)("button",{children:"Photo"})}),Object(s.jsx)("th",{children:Object(s.jsx)("button",{onClick:t,children:"Name"})}),Object(s.jsx)("th",{children:Object(s.jsx)("button",{onClick:n,children:"City"})}),Object(s.jsx)("th",{children:Object(s.jsx)("button",{children:"Phone Number"})}),Object(s.jsx)("th",{children:Object(s.jsx)("button",{children:"Email"})}),Object(s.jsx)("th",{children:Object(s.jsx)("button",{onClick:a,children:"DOB"})})]})})}var v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={search:"",employees:[],filteredEmployees:[],toggleName:!1,toggleCity:!1,sortedYoungest:!1},e.sortByName=function(){e.state.toggleName?e.namesAsc():e.nameDesc()},e.namesAsc=function(){console.log("Ascending");var t=e.state.employees.sort((function(e,t){return e.name.last<t.name.last||e.name.last===t.name.last&&e.name.first<t.name.first?1:-1}));e.setState(Object(h.a)(Object(h.a)({},e.state),{},{filteredEmployees:t,toggleName:!1}))},e.nameDesc=function(){console.log("Descending");var t=e.state.employees.sort((function(e,t){return e.name.last>t.name.last||e.name.last===t.name.last&&e.name.first>t.name.first?1:-1}));e.setState(Object(h.a)(Object(h.a)({},e.state),{},{filteredEmployees:t,toggleName:!0}))},e.sortByCity=function(){if(e.state.toggleCity){var t=e.state.employees.sort((function(e,t){return e.location.city<t.location.city||e.location.city===t.location.city&&e.location.state<t.location.state?1:-1}));e.setState(Object(h.a)(Object(h.a)({},e.state),{},{filteredEmployees:t,toggleCity:!1}))}else{var n=e.state.employees.sort((function(e,t){return e.location.city<t.location.city||e.location.city===t.location.city&&e.location.state<t.location.state?1:-1}));e.setState(Object(h.a)(Object(h.a)({},e.state),{},{filteredEmployees:n,toggleCity:!0}))}},e.youngest=function(e,t){var n=e.dob.age,s=t.dob.age,a=0;return n>s?a=1:n<s&&(a=-1),a},e.oldest=function(e,t){var n=e.dob.age,s=t.dob.age,a=0;return n<s?a=1:n>s&&(a=-1),a},e.sortByAge=function(){if(e.state.sortedYoungest){var t=e.state.employees.sort(e.oldest);console.log(t),e.setState(Object(h.a)(Object(h.a)({},e.state),{},{filteredEmployees:t,sortedYoungest:!1}))}else{var n=e.state.employees.sort(e.youngest);console.log(n),e.setState(Object(h.a)(Object(h.a)({},e.state),{},{filteredEmployees:n,sortedYoungest:!0}))}},e.handleInputChange=function(t){t.preventDefault();var n=t.target.value,s=e.state.employees.filter((function(e){return e.name.first.toLowerCase().includes(n.toLowerCase())||e.name.last.toLowerCase().includes(n.toLowerCase())}));e.setState(Object(h.a)(Object(h.a)({},e.state),{},{filteredEmployees:s,search:n}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.getEmployee().then((function(t){e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(y,{search:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),this.state.employees?Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)(x,{sortByName:this.sortByName,sortByCity:this.sortByCity,sortByAge:this.sortByAge}),Object(s.jsx)("tbody",{children:Object(s.jsx)(p,{search:this.state.search,handleInputChange:this.handleInputChange,value:this.state.value,employees:this.state.employees,filteredEmployees:this.state.filteredEmployees})})]}):Object(s.jsx)("h1",{children:"No Matching Employees"})]})}}]),n}(a.Component);var C=function(){return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(l,{}),Object(s.jsx)(v,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),c(e),o(e)}))};n(42);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),N()}},[[43,1,2]]]);
//# sourceMappingURL=main.947b3d09.chunk.js.map