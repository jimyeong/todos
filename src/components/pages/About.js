import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="about wrapper">
                <div className="title-area">
                    <h3>
                        about
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


export default About;