import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="Home wrapper">
                <div className="title-area">
                    <h3>
                        home
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

                <div className="contents-area">

                </div>
            </div>
        )
    }
}


export default Home;