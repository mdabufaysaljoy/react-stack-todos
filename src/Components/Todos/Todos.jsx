import React, { Component } from "react";
import shortid from "shortid";
import ListView from "../ListView";
import TableView from "../TableView";
import CreateTodoForm from "../Create-Todo-Form";
import Controller from "../Controllers";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

export class Todos extends Component {
  state = {
    todos: [
      {
        id: "alkadfj",
        title: "todo title 1",
        desc: "this is a todo description",
        isChecked: false,
        time: new Date(),
        isComplete: false,
      },
      {
        id: "asdfsadf",
        title: "todo title 1",
        desc: "this is a todo description",
        isChecked: false,
        time: new Date(),
        isComplete: false,
      },
      {
        id: "asdfdsa",
        title: "todo title 1",
        desc: "this is a todo description",
        isChecked: false,
        time: new Date(),
        isComplete: false,
      },
      {
        id: "dsafgdaf",
        title: "todo title 1",
        desc: "this is a todo description",
        isChecked: false,
        time: new Date(),
        isComplete: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };
  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  handleSearch = () => {};
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller
          term={this.state.searchTerm}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
        />
        <div>
          <ListView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <div>
          <TableView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create new todo item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
