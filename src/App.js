import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import WeatherApp from "./components/Weather/WeatherApp";
import Router from "./components/App.Router";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Router />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/weather" component={WeatherApp} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;