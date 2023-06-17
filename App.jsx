import React, { useEffect, useState } from 'react'
import Table from './Components/Table'
import Home from './Components/Home'


const App = () => {
  const [title] = useState("RANDOM USERS");
  const [users, setUsers] = useState([
   {
     name:null,
    username:null,
    email:null,
    address:null,
  }
  ]);

  const getUsers  = async() => {
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json();
      setUsers(data)
      console.log(data);
    }catch (error){
      console.log(error);
    }
  }

  useEffect(()=> {
    getUsers()
  }, [])

  return (
    <div>
      <Home title={title}/>
      <section>
      <Table users={users}/>
      </section>
     

    </div>
  )
}

export default App