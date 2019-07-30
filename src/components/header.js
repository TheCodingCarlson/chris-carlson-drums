import React, { Component } from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.less";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class MenuButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }
    render() {
        return (
            <div>
                <button className={headerStyles.menuButton} 
                    onClick={ () => this.setState({expanded: !this.state.expanded}) }
                    style={this.state.expanded ? {display: "none"} : null}>
                    &#9776;
                </button>
                <button className={headerStyles.menuButton} 
                    onClick={ () => this.setState({expanded: !this.state.expanded}) }
                    style={!this.state.expanded ? {display: "none"} : null}>
                    &times;
                </button>
            </div>
        )
    }
}

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
            <MenuButton />
        </div>
    </header>
)
