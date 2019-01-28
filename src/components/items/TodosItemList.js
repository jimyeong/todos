import React from 'react';

class TodosItemList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isEditing: false

        }
    }

    renderTool(){
        if(this.state.isEditing){
            return(
                <div className="btn-area">
                    <div onClick={this.onClickSave.bind(this)} className="btn btn-primary btn-material">저장</div>
                    <div onClick={this.onClickCancel.bind(this)} className="btn btn-tool btn-material">취소</div>
                </div>
            )
        }
        return(
            <div className="btn-area">
                <div onClick={this.onClickEditing.bind(this)} className="btn btn-primary btn-material">수정</div>
                <div onClick={this.props.deleteTask.bind(this,this.props.name)} className="btn btn-tool btn-material">삭제</div>
            </div>
        )
    }

    renderEditing(){
        if(this.state.isEditing){
            return(
                <div className="task">
                    <form action="">
                        <div className="form-wrap">
                            <div className="input-group">
                                <input type="text" className="form-ctrl" placeholder="이름" ref="inputValue"/>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
        return(
            <div className="task">
                {this.props.name}
            </div>
        )
    }

    render(){
        return(
            <div className="todos-item-list">
                {this.renderTool()}
                {this.renderEditing()}
            </div>
        )
    }

    onClickCancel(){
        this.setState({
            isEditing: false

        })
    }

    onClickEditing(){
        this.setState({
            isEditing: true
        })
    }
    onClickSave(e){
        e.preventDefault()
        const oldTask = this.props.name;
        const newTask = this.refs.inputValue.value;
        this.props.saveTask(oldTask,newTask)

        this.setState({
            isEditing: false
        })
    }
}


export default TodosItemList;