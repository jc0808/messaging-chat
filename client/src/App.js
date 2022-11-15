import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then(r => r.json())
      .then(data => setUsers(data))
  }, [])

  console.log(users)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{users[1].firstName}</h1>
      </header>
    </div>
  );
}

export default App;
