
import './App.css';
import { useState, useEffect } from "react"
import Login from './Login'
import { Switch, Route, useHistory } from "react-router-dom"
import CreateUser from './CreateUser';
import Home from './Home';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);

  const navigate = useHistory();

  //auto login
  useEffect(() => {
    fetch('/Auth')
      .then(r => {
        if (r.ok) {
          r.json().then(user => setCurrentUser(user)).then(setLoggedIn(true))
        }
      })
  }, [])

  useEffect(() => {
    if (currentUser !== null) {
      fetch("/users")
        .then(r => r.json())
        .then(data => setUsers(data))

      fetch("/chats")
        .then(r => r.json())
        .then(data => setChats(data))
    }
  }, [currentUser])


  function returnUser(user) {
    if (user) {
      setCurrentUser(user)
      setLoggedIn(true)
    }
  }

  console.log(currentUser)

  function onLogOut() {
    setCurrentUser(null)
    setLoggedIn(false)
    navigate.push('/')
  }

  return (
    <div className="App">

      {isLoggedIn ?
        <div>
          {/* // <h1>Welcome!!!! {currentUser ? currentUser.firstName : "?"}</h1> */}
          <Home currentUser={currentUser} onLogOut={onLogOut} users={users} chats={chats} />
        </div>
        :
        <div className='login'>
          <Switch>
            <Route path='/createAccount'> <CreateUser returnUser={returnUser} /> </Route>
            <Route path='/'><Login returnUser={returnUser} /></Route>
          </Switch>
        </div>
      }

    </div>
  );
}

export default App;
