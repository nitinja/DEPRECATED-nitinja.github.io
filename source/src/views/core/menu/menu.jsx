import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import about from "../../about/about";
import projects from "../../projects/projects";

const routes = [
  {
    title: "ABOUT",
    path: "/",
    component: about
  },
  {
    title: "PROJECTS",
    path: "/projects",
    component: projects
  },
  {
    title: "BLOG",
    path: "/blog",
    component: projects
  }
];

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul className="text-center font-light flex justify-center items-center">
          <NavLink
            className="primary-link"
            to={"/about"}
            exact={true}
            activeClassName="active"
          >
            ABOUT ME
          </NavLink>
          <NavLink
            className="primary-link"
            to={"/projects"}
            exact={true}
            activeClassName="active"
          >
            PROJECTS
          </NavLink>
          <NavLink className="logo-main-text mx-8" to={"/"} exact={true}>
            NJ
          </NavLink>
          <NavLink
            className="primary-link"
            to={"/blog"}
            exact={true}
            activeClassName="active"
          >
            BLOG
          </NavLink>
          <a
            className="primary-link"
            href="https://www.behance.net/nitinjadhav-ux"
          >
            DESIGN PORTFOLIO
          </a>
        </ul>
      </div>
    );
  }
}
