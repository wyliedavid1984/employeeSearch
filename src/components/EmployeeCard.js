import React from 'react'

function EmployeeCard(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.name} className="img-fluid" src={result.picture.thumbnail} />
          <span>{result.name}</span><span>{result.phone}</span><span>{result.email}</span><span>{result.dob}</span>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeCard;


