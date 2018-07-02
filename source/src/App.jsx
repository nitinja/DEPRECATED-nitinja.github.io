import React, { Component } from "react";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
// import "./minireset.css";
import "./tailwind-output.css";
import Page404 from "./views/404/404";
import About from "./views/about/about";
import Menu from "./views/core/menu/menu";
import Projects from "./views/projects/projects";
import home from "./views/home/home";
import Footer from "./views/core/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Helmet title="NJ's Web Home" />
          <Menu />
          <main className="container" role="main">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route component={Page404} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
