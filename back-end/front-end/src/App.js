import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import OperationContext from './operations/components/OperationContext';
import Operations from './operations/pages/Operations';
import Home from './operations/pages/Home';
import NewOperation from './operations/pages/NewOperation';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {

  const [operationValue, setOperationValue] = useState({});

  return (
    <OperationContext.Provider value={{
      operationValue,
      setOperationValue,
      
      }}>

        <Router>
          <MainNavigation />
          <main>
            <Switch>
            <Route path="/" exact>
                  <Home />
              </Route>

              <Route path="/new" exact>
                  <NewOperation />
              </Route>
              
              <Route path="/operations" exact>
                  <Operations />
              </Route>

              <Redirect to="/" />
              
            </Switch>
            </main>
        </Router>

    </OperationContext.Provider>
  );
};

export default App;