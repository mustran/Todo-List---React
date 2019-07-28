import React, { Component } from "react";
import Button from "./Button";

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input group-text bg-primary text-white mr-1 pl-2 pr-2 pt-2">
                                <i className="fa fa-book" />
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="add a todo item"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <Button edit={this.props.edit} />
                </form>
            </div>
        );
    }
}
