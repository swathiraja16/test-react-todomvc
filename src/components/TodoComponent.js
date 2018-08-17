import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.taskcompleted = this.taskcompleted.bind(this);
        this.taskdeleted = this.taskdeleted.bind(this);
    }
    taskcompleted(event){
        this.props.onCompleted(this.props.todoId);
    }
    taskdeleted(event){
        this.props.onDeleted(this.props.todoId);
    }
   

    render(){
        var isDone = "form-check todoitem " + (this.props.completed ? "done" : "undone");
        
        return(
            
            <li className = {isDone} >
            <div className="row">
            <div className = "col-8">
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" onChange={this.taskcompleted} /> {this.props.todoItem}
                </label>
                </div>
               
                <button type="button" className="btn  btn-danger btn-sm" onClick={this.taskdeleted}>x</button>
                
                </div>
            </li>
            
        );
    }
}

class TodoList extends Component {
    render() {
      return (
        <ul className="todolist">
          {this.props.todoList.map(item => (
            <TodoItem key={item.todoId} todoId={item.todoId} todoItem={item.todoItem} completed={item.taskDone} onCompleted={this.props.onCompleted} onDeleted={this.props.onDeleted} />
          ))}
        </ul>
      );
    }
  }

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todoList: [],
            todoItem: ""
        };
        this.handleChange= this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.itemcompleted = this.itemcompleted.bind(this);
        this.deleted = this.deleted.bind(this);
    }

    handleChange(event) {
        const text = event.target.value.trim();
        if(text){
        this.setState({
            todoItem: event.target.value
        });
    }
    else {
        alert('Cannot Create empty todo');
        this.setState({
            todoItem: ""
        });
    }
}

    addItem(event) {
        event.preventDefault();
        var item = {
            todoId: Date.now(),
            todoItem: this.state.todoItem,
            taskDone: false
        };
        this.setState((prevState) => ({
            todoList: prevState.todoList.concat(item),
            todoItem: ""
        }));
    }

    itemcompleted(itemId) {
         this.state.doneCount = 0;
        var updateItem = this.state.todoList.map(item => {
            if(itemId === item.todoId) item.taskDone = !item.taskDone;
            if(!item.taskDone)
            this.state.doneCount += 1;
            
            return item;
        });
        console.log(this.state.doneCount);
        this.setState({
            todoList: [].concat(updateItem)
        });
    }

    deleted(itemId) {
        var updateItem = this.state.todoList.filter(item => {
            return item.todoId !== itemId
        });

        this.setState({
            todoList: [].concat(updateItem)  
        });
    }

    
    render(){
        var count;
        
        var totalCount = this.state.todoList.length;
        if (totalCount == 1){
            count = "1 item";
        }
        else{
            count = totalCount + " items";
        }
        return(
            <div className="container">
                <div className = "row">
                    <div className = "col-9">
                        <TodoList todoList = {this.state.todoList} onCompleted = {this.itemcompleted} onDeleted = {this.deleted} />
                    </div>
                </div>
                <form className = "row">
                    <div className = "col-9">
                        <input type="text" className="form-control" onChange = {this.handleChange} value={this.state.todoItem} autoFocus/>
                    </div>
                    <div className = "col-3">
                        <button className = "btn btn-primary" onClick={this.addItem} disabled = {!this.state.todoItem}><span className="fa fa-pencil-square fa-lg"></span>{" Add #" + 
                    (this.state.todoList.length + 1)}</button>
                    </div>
                </form>
                <strong>Number of active items: {count} </strong>
            </div>
        );
    }
}

export default Todo;