import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './assets/components/User';
import SearchBox from './assets/components/SearchBox';

function App() {
  const[users, setUsers] = useState([]);
  const[filteredUsers, setFilteredUsers] = useState([]);
  
  useEffect( () =>{

    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      setUsers(data.results);
      setFilteredUsers(data.results)
    });

  },[]);

  const filterUsers = (searchString) => {
    const filtered = users.filter((user) => (user.name.first).includes(searchString)) 
    
    setFilteredUsers(filtered);
  }

  
  return (

    <div className="App"> 
      <SearchBox handleChange={filterUsers}/>     
      {filteredUsers.map(user => <User name={user.name.first}/>)}
    </div>
   

  )
}

export default App
