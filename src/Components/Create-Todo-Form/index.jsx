import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class CreateTodoForm extends React.Component {
  state = {
    title: "",
    desc: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ title: "", description: "" });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Enter Task</Label>
          <Input
            placeholder="do your title"
            name="title"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Enter Task</Label>
          <Input
            type="textarea"
            placeholder="write some short description"
            name="desc"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Create your task</Button>
      </Form>
    );
  }
}

CreateTodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};
export default CreateTodoForm;
