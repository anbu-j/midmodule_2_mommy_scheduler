//import logo from './logo.svg';
import './App.css';
//import '../node_modules/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import MScheduler from './components/MScheduler';
import MChallenge from './components/MChallenge';
import MActivities from './components/MActivities';
import MReview from './components/MReview';

import TestMScheduler from './components/MScheduler';

import challenges from './data/challengedata';
import activities from './data/activitiesdata';
//import {BrowserRouter as  Router,Route, Switch} from 'react-router-dom';

localStorage.setItem("currArray1",JSON.stringify(challenges)) // Initialize the challenge data to local storage.
localStorage.setItem("currArray2",JSON.stringify(activities)) // Initialize the activity data to local storage.

function App() {
  return (
    <div className="App">
     {/*<MommyScheduler />*/}
     <TestMScheduler />          
                
                

    </div>
  );
}

export default App;
