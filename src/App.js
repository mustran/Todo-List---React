import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false
    };

    //controlled input
    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    };
    //prevent reloading the page
    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item
        };

        // console.log(newItem);

        this.setState({
            items: [...this.state.items, newItem],
            item: "",
            id: uuid(),
            editItem: false
        });
    };

    editHandler = id => {
        console.log("EDIT HANDLER");
        const itemToEdit = this.state.items.find(item => item.id === id);
        const index = this.state.items.indexOf(itemToEdit);
        console.log(index);
        const itemsUpdated = [...this.state.items];
        itemsUpdated.splice(index, 1);

        // console.log(itemToEdit);
        this.setState({
            editItem: true,
            items: itemsUpdated,
            item: itemToEdit.title
        });
    };

    clearList = () => {
        this.setState({
            items: []
        });
    };

    handleDelete = id => {
        const itemToDelete = this.state.items.find(item => item.id === id);
        const index = this.state.items.indexOf(itemToDelete);
        const itemsUpdated = [...this.state.items];
        itemsUpdated.splice(index, 1);

        this.setState({
            items: itemsUpdated
        });
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <div>
                            <h3 className="text-capitalize text-center">todo input</h3>
                            <TodoInput
                                edit={this.state.editItem}
                                item={this.state.item}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                            />

                            <TodoList
                                handleDelete={this.handleDelete}
                                editHandler={this.editHandler}
                                clearList={this.clearList}
                                edit={this.state.editItem}
                                items={this.state.items}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
