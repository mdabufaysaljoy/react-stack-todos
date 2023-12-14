import React from "react";
import { Input, Table, Button } from "reactstrap";
import PropTypes from "prop-types";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <td scope="row">
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
    </td>
    <td>{todo.time.toDateString()}</td>
    <td>{todo.title}</td>
    <td>
      <Button
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "completed" : "running"}
      </Button>
    </td>
  </tr>
);
RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};
const TableView = ({ todos, toggleComplete, toggleSelect }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>time</th>
        <th>todo</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <RowItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
        />
      ))}
    </tbody>
  </Table>
);
TableView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};
export default TableView;
