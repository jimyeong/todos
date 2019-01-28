import React from 'react';

class TabMenuListItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <li>
                <div className="item">
                    <div className="thumb">
                        <img src={this.props.img} alt=""/>
                    </div>
                    <div className="desc">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.story}</p>
                    </div>
                </div>
            </li>
        )
    }
}


export default TabMenuListItem;