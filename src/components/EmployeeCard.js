import React from 'react'

function EmployeeCard({employees}) {
  console.log(employees)
  return (
    <div>
      {employees.map((employee) => {
        console.log(employee)
        return (
          <tr className="list-group-item" key={employee.id.value}>
          <td><img alt={employee.name} className="img-fluid" src={employee.picture.thumbnail} /></td>
          <td>{employee.name.first} {employee.name.last}</td><td>{employee.location.state}</td><td>{employee.phone}</td><td>{employee.email}</td><td>{employee.dob}</td>
         </tr>
        )
      })}
          
    </div>
  );
}

export default EmployeeCard;


