import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import about from "../../about/about";
import projects from "../../projects/projects";
import Home from "react-icons/lib/ti/home";

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
      <div className="text-center mt-8 mb-10">
        <ul className="text-center font-light flex justify-center items-center mb-4 sm:text-base">
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
        <div>
          <NavLink className="logo-main-text" to={"/"} exact={true}>
            NJ
          </NavLink>
          <div className="logo-main-subtext">
            <span>NITIN JADHAV</span>
          </div>
          {/* <hr className="hr" /> */}
        </div>
      </div>
    );
  }
}
