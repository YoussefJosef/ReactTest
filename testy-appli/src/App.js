import React, { Component } from 'react';
import NavBar from './components/NavBar';
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import FormTest from './components/FormTest';
import StateTodos from './components/Todos/StateTodos';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home}></Route>
          <Route path="/todos" component={StateTodos}></Route>
          <Route path="/form" component={FormTest}></Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
