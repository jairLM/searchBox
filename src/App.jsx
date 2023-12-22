import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {




  fetch('https://randomuser.me/api/?results=10')
  .then(response => response)
  .then(data => console.log(data))
  return (


    <>
      
    </>
  )
}

export default App
