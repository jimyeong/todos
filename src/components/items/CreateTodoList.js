import React from 'react';

class CreateTodoList extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="create-todo-list">
                <form action="">
                    <div className="form-wrap">
                        <div className="input-group">
                            <input type="text" className="form-ctrl" placeholder="what do i need to do" ref="createInputValue"/>
                            <div className="btn-area">
                                <button onClick={this.onClickCreate.bind(this)} className="btn btn-material btn-primary">
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    onClickCreate(e){
        e.preventDefault();
        const name = this.refs.createInputValue.value;
        this.props.createTask(name);
        this.refs.createInputValue.value = ""



    }
}


export default CreateTodoList;