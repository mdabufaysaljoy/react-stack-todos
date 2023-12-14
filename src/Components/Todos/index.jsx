import React, { Component } from "react";
import shortid from "shortid";
import ListView from "../ListView";
import TableView from "../TableView";
import CreateTodoForm from "../Create-Todo-Form";
import Controller from "../Controllers";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

class Todos extends Component {
  state = {
    todos: [
      {
        id: "alkadfj",
        title: "todo title 1",
        desc: "this is a todo description",
        isSelect: false,
        time: new Date(),
        isComplete: false,
      },
      {
        id: "asdfsadf",
        title: "number two title",
        desc: "this is a todo description",
        isSelect: false,
        time: new Date(),
        isComplete: false,
      },
      {
        id: "asdfdsa",
        title: "three number title",
        desc: "this is a todo description",
        isSelect: false,
        time: new Date(),
        isComplete: false,
      },
      {
        id: "dsafgdaf",
        title: "todo four title",
        desc: "this is a todo description",
        isSelect: false,
        time: new Date(),
        isComplete: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
    view: "list",
    filter: "all",
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
  handleSearch = (value) => {
    this.setState({
      searchTerm: value,
    });
  };
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };
  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.title
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    );
  };
  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };
  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };
  reset = () => {
    this.setState({
      filter: "all",
      searchTerm: "",
      view: "list",
      isOpenTodoForm: false,
    });
  };
  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };
  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller
          term={this.state.searchTerm}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          view={this.state.view}
          changeView={this.changeView}
          clearCompleted={this.clearCompleted}
          clearSelected={this.clearSelected}
          handleFilter={this.handleFilter}
          reset={this.reset}
        />
        <div>{this.getView()}</div>
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

export default Todos;
