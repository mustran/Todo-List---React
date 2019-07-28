import React, { Component } from "react";

export default class TodoItem extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6>{this.props.title}</h6>
                <div>
                    <span className="mx-2 text-success">
                        <i onClick={this.props.editHandler} className="fa fa-pencil" />
                    </span>
                    <span className="mx-2 text-danger">
                        <i onClick={this.props.handleDelete} className="fa fa-trash" />
                    </span>
                </div>
            </li>
        );
    }
}
