import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import NavLink from './components/NavLink'

import Home from './views/home/home'
import About from './views/about/about'
import Projects from './views/projects/projects'
import Page404 from './views/404/404'

import logo from './logo.svg';
import './App.css';

const routes = [
    {
        title: 'About',
        path: '/about',
        component: About
    },
    {
        title: 'Projects',
        path: '/projects',
        component: Projects
    }
]

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Helmet title="You Are Doing Great"/>
                    <nav className="navbar navbar-expand-md">
                        <div className="container">
                            <a className="navbar-brand" href="#"> <img src={logo} className="ni-logo" alt="logo"/></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div>
                                <ul className="navbar-nav mr-auto">
                                    {routes.map((route, i) => (
                                        <NavLink key={i} {...route} />
                                    ))}
                                    <a href="https://medium.com/@nitinj">Articles</a>

                                    {/*<li className="nav-item active">*/}
                                    {/*<Link to="/about">{'About*'}</Link>*/}
                                    {/*/!*<a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>*!/*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*<a className="nav-link" href="#">Projects</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*<a className="nav-link" href="#">Blog</a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <hr className='multicolored-gradient'/>
                    <main role="main" className="container">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/projects" component={Projects}/>
                            <Route component={Page404}/>
                        </Switch>

                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
