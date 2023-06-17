import React from 'react'

const Table = ({users}) => {
  return (
    <div >
        {
            users.map((user) => (
                <table key={users.id}>
                    <tbody>
                        
                        <tr>
                        <th>Full Name</th>
                        <td name={user.name}>{user.name}</td>

                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <td phone={user.phone}>{user.phone?.slice(0,13)}</td>
                        </tr>

                        <tr>
                            <th>Email Address</th>
                            <td email={user.email}>{user.address?.street}</td>
                        </tr>

                        <tr>
                            <th>Street</th>
                            <td address={user.address}>{user.address?.street}</td>
                        </tr>
                        
                        

                        
                    </tbody>
                   
                    

                </table>
            ))
        }
    </div>
  )
}



export default Table