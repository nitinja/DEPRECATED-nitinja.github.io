import React, { Component } from "react";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./views/about/about";
import Projects from "./views/projects/projects";
import Page404 from "./views/404/404";

// import logo from "./logo.svg";
import "./App.css";
import "./tailwind-output.css";

const routes = [
  {
    title: "About",
    path: "/",
    component: About
  },
  {
    title: "Projects",
    path: "/projects",
    component: Projects
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet title="NJ's Web Home" />

          <ul className="navbar-nav mr-auto">
            {routes.map((route, index) => (
              <Link to={route.path} key={index}>
                {route.title}
              </Link>
            ))}
            <a href="https://medium.com/@nitinj">Articles</a>
            <a href="https://www.behance.net/nitinjadhav-ux">Design</a>
          </ul>

          <main role="main" className="container">
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/projects" component={Projects} />
              <Route component={Page404} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
