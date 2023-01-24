import './App.css';
import Home from './pages/Home';
import News from './pages/News';
import Experiences from './pages/Experiences';
import Equipments from './pages/Equipments';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> {<Home />} </Route>
        <Route exact path="/news"> {<News />} </Route>
        <Route exact path="/experiences"> {<Experiences />} </Route>
        <Route exact path="/equipements"> {<Equipments />} </Route>
        <Route exact path="/a-propos-de-nous"> {<AboutUs />} </Route>
        <Route exact path="/connexion"> {<Login />} </Route>
      </Switch>
    </Router>
  )
}

export default App;
