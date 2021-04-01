import React ,{useEffect,useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import View from "./View";
import Home from "./Home";
function App() {

  return (


<BrowserRouter>

    <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/:id"
              component={View}
            />
          </Switch>

        </div>
      
    </div>
    </BrowserRouter>


  );
}

export default App;
