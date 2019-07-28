import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {this.props.items.map(todoItem => {
                    return (
                        <TodoItem
                            handleDelete={()=>this.props.handleDelete(todoItem.id)}
                            editHandler={() => this.props.editHandler(todoItem.id)}
                            key={todoItem.id}
                            title={todoItem.title}
                        />
                    );
                })}
                <button
                    onClick={this.props.clearList}
                    type="button"
                    className="btn btn-danger btn-block text-capitalize mt-5"
                >
                    clear list
                </button>
            </ul>
        );
    }
}
