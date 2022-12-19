import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTask from './AddTask';
import Alerts from './Alerts';
import Home from "./Home";
import ParticleBackground from './ParticleBackground';


function App() {

  const [alerts, setAlerts] = useState([]) // Array of strings
  const [hasAlerts, setHasAlerts] = useState(false); // Bool if has alerts

  const handleAlerts = (alertArr = []) => {
    setHasAlerts(
      alertArr.length > 0 ?
        true :
        false
    );
    setAlerts(alertArr);
  }

  return (
    <Router>
      <div className="app-container">
        <ParticleBackground
          style={{
          }}
        />
        {/* <Navibar handleAlerts={handleAlerts} /> */}
        <Alerts alerts={alerts} hasAlerts={hasAlerts} />
        <div className="main"> 
          <div className="main-container mx-auto">
            <Switch>
              <Route exact path="/">
                <Home handleAlerts={handleAlerts} />
              </Route>
              <Route path="/add-task">
                <AddTask handleAlerts={handleAlerts} />
              </Route>
              <Route path="*">
                
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>      
  );
}

export default App;
