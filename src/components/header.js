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
        <div className={headerStyles.container}>
            <Link to="/">
                <h3 className={headerStyles.name}>Chris Carlson</h3>
            </Link>
            <ul className={headerStyles.navigation}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/services/">Services</ListLink>
                <ListLink to="/music/">Music</ListLink>
                <ListLink to="/shows/">Shows</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </div>
    </header>
)
