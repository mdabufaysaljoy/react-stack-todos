import React from "react";
import { Label, Input } from "reactstrap";
import PropTypes from "prop-types";

const ViewController = ({ view, changeView }) => {
  return (
    <div className="d-flex">
      <Label for="list-view" className="me-4">
        <Input
          type="radio"
          name="view"
          value="list"
          id="list-view"
          onChange={changeView}
          className="d-inline-block me-1"
          checked={view === "list"}
        />
        List View
      </Label>
      <Label for="table-view" className="me-4">
        <Input
          type="radio"
          name="view"
          value="table"
          id="table-view"
          onChange={changeView}
          className="d-inline-block me-1"
          checked={view === "table"}
        />{" "}
        Table view
      </Label>
    </div>
  );
};

ViewController.propTypes = {
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default ViewController;
