import React, { Component } from 'react';
import NavBar from './components/NavBar';
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FormTest from './components/FormTest';
import StateTodos from './components/Todos/StateTodos';
import AxiosPost from './components/AxiosPost';
import AxiosHome from './components/AxiosHome';
import ReduxHome from './components/ReduxHome';
import ReduxPost from './components/ReduxPost';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch> // match one then break !
            <Route exact path="/axiosHome" component={AxiosHome}></Route>
            <Route exact path="/" component={ReduxHome}></Route>
            <Route path="/reduxHome" component={ReduxHome}></Route>
            <Route path="/todos" component={StateTodos}></Route>
            <Route path="/form" component={FormTest}></Route>
            <Route path="/axios/:post_id" component={AxiosPost} />
            <Route path="/redux/:post_id" component={ReduxPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
