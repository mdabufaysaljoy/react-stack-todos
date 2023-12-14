import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

const FilterController = ({ handleFilter }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => handleFilter("all")}>All</Button>
      <Button onClick={() => handleFilter("running")}>running</Button>
      <Button onClick={() => handleFilter("completed")}>completed</Button>
    </ButtonGroup>
  );
};
FilterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default FilterController;
