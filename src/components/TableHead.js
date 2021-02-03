import React from 'react'

export default function Table(props) {
    return (
          <thead>
            <tr>
            <th><button>Photo</button></th>
            <th><button onClick={props.sortByName}>Name</button></th>
            <th><button>State</button></th>
            <th><button>Phone Number</button></th>
            <th><button>Email</button></th>
            <th><button>DOB</button></th>
            </tr>
          </thead>
    )
}
