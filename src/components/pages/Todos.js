import React from 'react';
import axios from 'axios';

import TodosItem from '../items/TodosItem';
import CreateTodoList from '../items/CreateTodoList';
import _ from 'lodash';




class Todos extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            todos:[]

        }
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( res => {
                this.setState({
                    todos: res.data
                })
            })
    }


    render(){
        return(
            <div className="todos wrapper">
                <div className="title-area">
                    <h3>
                        {this.props.match.params.name}'s todos
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

                <div className="contents-area">
                    <CreateTodoList createTask={this.createTask.bind(this)}/>
                    <TodosItem
                        todos={this.state.todos}
                        saveTask={this.saveTask.bind(this)}
                        deleteTask={this.deleteTask.bind(this)}

                    />

                </div>
            </div>
        )
    }

    saveTask(oldTask, newTask){
        const foundTask = _.find(this.state.todos, (todo) => todo.name === oldTask)
        foundTask.name = newTask

        this.setState({
            todos: this.state.todos
        })
    }

    deleteTask(task){
        _.remove(this.state.todos, (todo) => todo.name === task)
        this.setState({
            todos: this.state.todos
        })
    }
    createTask(name){
        this.state.todos.unshift({
            name : name,
            complete:false
        });
        this.setState({
            todos: this.state.todos
        })
    }

}


export default Todos;