import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const NavLink = styled.div`
  a {
    transition: color 0.2s, border-bottom-color 0.2s;
    color: ${props => props.active ? '#000' : '#646464'};
    font-weight: ${props => props.active ? '600' : '300'};
    text-decoration: none;
    margin-right:20px;
    border-bottom: 0;
    &:hover, &:active, &:focus {
      font-weight: ${props => props.active ? '600' : '300'};
    }
  }
`

export default ({path, exact, ...props}) => (
    <Route path={path} exact={exact} children={({match}) => (
        <NavLink active={match}>
            <Link to={path}>{props.title}</Link>
        </NavLink>
    )} />
)