import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.less";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
    <header className={headerStyles.header}>
        <Link to="/">
            <h3>
                <span className={headerStyles.name}>Chris Carlson</span>
                <br />
                <span>Drummer</span>
            </h3>
        </Link>
        <ul className={headerStyles.navigation}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/services/">Services</ListLink>
            <ListLink to="/music/">Music</ListLink>
            <ListLink to="/shows/">Shows</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
    </header>
)
