import './App.css';
import Home from './pages/Home';
import News from './pages/News';
import Experiences from './pages/Experiences';
import Equipments from './pages/Equipments';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';
import { useState, useMemo, useEffect } from 'react';
import { UserContext } from './contexts/UserContext';
import { RoomContext } from './contexts/RoomContext';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Admin from './pages/AdminPanel';
import { Maintaining } from './pages/Maintaining';
import { getUserById } from './api/user';
import roomsData from './RoomsData.json';

const App = () => {
  const [user, setUser] = useState(null);
  const [main, setMain,] = useState(false);
  const [room, setRoom] = useState(roomsData.light);
  const maintaining =true;

  useEffect(() => {
    const id_token = sessionStorage.getItem('_id-token');
    if (id_token) {
    const userFetched = getUserById(id_token);
      userFetched
        .then(resultUser => {
          setUser(resultUser);
          console.log("Logged successfully");
        })
        .catch(err => console.error(err));
    }
  }, [])

  const value = useMemo(() => ({ user, setUser }), [user, setUser],[main, setMain,], {main, setMain,} );
  const roomValue = useMemo(() => ({ room, setRoom }), [room, setRoom]);

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={value}>
          <RoomContext.Provider value={roomValue}>
            <Route exact path="/"> {<Home />} </Route>
            <Route exact path="/news"> {<News />} </Route>
            <Route exact path="/experiences"> {<Experiences />} </Route>
            <Route exact path="/equipements"> {<Equipments />} </Route>
            <Route exact path="/a-propos-de-nous"> {<AboutUs />} </Route>
            <Route exact path="/mon-compte"> {<Account />} </Route>
            <Route exact path="/equipment"> {<Equipments />} </Route>
            <Route exact path="/admin"> {<Admin />} </Route>
            <Route exact path="/maintaining"> {<Maintaining />} </Route>
          </RoomContext.Provider>
        </UserContext.Provider>
      </Switch>
    </Router>
  )
  
}

export default App;
