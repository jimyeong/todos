import React from 'react';
import {Link,Route} from 'react-router-dom';
import TabMenuList from '../layout/TabMenuList';

class Work extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="work wrapper">
                <div className="title-area">
                    <h3>
                        work
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

                <div className="contents-area">
                    <div className="tab-menu">
                        <ul>
                            <li>
                                <Link to="/work/menu1" className="tab-btn">
                                    menu1
                                </Link>
                            </li>
                            <li>
                                <Link to="/work/menu2" className="tab-btn">
                                    menu2
                                </Link>
                            </li>
                            <li>
                                <Link to="/work/menu3" className="tab-btn">
                                    menu3
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Route path="/work/:menu" component={TabMenuList}/>



                </div>
            </div>
        )
    }
}


export default Work;