import React, { Component } from 'react';
import NavBar from './components/NavBar';
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import FormTest from './components/FormTest';
import StateTodos from './components/Todos/StateTodos';
import Post from './components/Post';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch> // match one then break !
            <Route exact path="/" component={Home}></Route>
            <Route path="/todos" component={StateTodos}></Route>
            <Route path="/form" component={FormTest}></Route>
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
