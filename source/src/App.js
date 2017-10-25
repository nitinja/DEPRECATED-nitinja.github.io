import React, {Component} from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Helmet title="You Are Doing Great"/>
                <nav className="navbar navbar-expand-md mb-4">
                    <div className="container"><a className="navbar-brand" href="#"> <img src={logo} className="ni-logo" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resume</a>
                            </li>
                        </ul>
                    </div></div>
                </nav>

                <main role="main" className="container">
                    <div className="jumbotron">
                        <h1>Navbar example</h1>
                        <p className="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
                        <a className="btn btn-lg btn-primary" href="../../components/navbar/" role="button">View navbar docs »</a>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
