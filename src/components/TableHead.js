import React from 'react'

export default function Table({sortByName, sortByCity}) {
    return (
          <thead>
            <tr>
            <th><button>Photo</button></th>
            <th><button onClick={sortByName}>Name</button></th>
            <th><button onClick={sortByCity}>City</button></th>
            <th><button>Phone Number</button></th>
            <th><button>Email</button></th>
            <th><button>DOB</button></th>
            </tr>
          </thead>
    )
}
