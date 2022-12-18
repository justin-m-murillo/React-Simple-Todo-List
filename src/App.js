import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import background from './assets/background.jpg';
import AddTask from './AddTask';
import Alerts from './Alerts';
import Home from "./Home";
import Navibar from "./Navibar";


function App() {

  const bg = new URL("./assets/background.jpg", import.meta.url);

  const [alerts, setAlerts] = useState([]) // Array of strings
  
  const handleAlerts = (alerts = []) => {
    setAlerts(alerts);
  }

  return (
    <Router>
      <div className="app-container">
        {/* <img src={background} alt="backgroundImage" style={{ width: '100%', height: 'auto' }}></img> */}
        <Navibar handleAlerts={handleAlerts} />
        <Alerts alerts={alerts} handleAlerts={handleAlerts} />
        <div className="main"> 
          <div className="main-container mx-auto">
            <Switch>
              <Route exact path="/">
                <Home />
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
