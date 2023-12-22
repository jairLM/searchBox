import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './assets/components/User';

function App() {
  const[users, setUsers] = useState([]);

  useEffect( () =>{

    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      setUsers(data.results);
    });

  },[]);

  
  return (

    <div className="App">      
      {users.map(user => <User name={user.name.first}/>)}
    </div>
   

  )
}

export default App
