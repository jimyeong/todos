import React from 'react'
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="header">
                <nav>
                    <ul>
                        <li className="nav-item">
                            <NavLink to="/" ActiveClassName="is-active" className="nav-link"><span>HOME</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" ActiveClassName="is-active" className="nav-link"><span>About</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/work" ActiveClassName="is-active" className="nav-link"><span>Work</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/todos/jj" ActiveClassName="is-active" className="nav-link"><span>Todos</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" ActiveClassName="is-active" className="nav-link"><span>Contact</span></NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
}


export default Header;