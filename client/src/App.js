import './App.css';
import CountryDetails from './components/CountryDetails/countryDetails.jsx';
import { Route, Switch } from 'react-router';
import AddActivities from './components/Activities/addActivities.jsx';
import LandingPage from './components/LandingPage/landingPage.jsx';
import Home from './components/Home/Home.jsx';
import { useEffect } from "react"
import { useDispatch, } from "react-redux"
import { fetchActivity, fetchCountry } from './redux/action';
import Error from './components/Error/Error.jsx';


function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry(), fetchActivity())
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route path='/add'>
          <AddActivities />
        </Route>
        <Route path='/id/:id'>
          <CountryDetails />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route exact path='/' >
          <LandingPage />
        </Route>
        <Route path='*' >
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
