import React from 'react';
import TodosItemList from './TodosItemList';
import _ from 'lodash';

class TodosItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    renderItemList(){
        const Props = _.omit(this.props, this.props.todos)
        return(
            _.map(this.props.todos, (todo,i) => <TodosItemList {...Props} {...todo}/> )
        )
    }

    render(){
        return(
            <div className="todos-item">
                    {this.renderItemList()}
            </div>
        )
    }
}


export default TodosItem;