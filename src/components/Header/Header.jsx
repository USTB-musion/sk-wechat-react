import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div className="header">

                <Link to="/"><FontAwesome name="home" size="3x" className="header-icon"/></Link>

                <h1 className="header__title">{this.props.title}</h1>
                <p className="header__desc">{this.props.desc}</p>

            </div>
        );
    }
}

export default Header;