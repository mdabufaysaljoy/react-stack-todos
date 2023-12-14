import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

const BulkController = ({ clearSelected, clearCompleted, reset }) => {
  return (
    <ButtonGroup>
      <Button color="danger" onClick={clearSelected}>
        clear selected
      </Button>
      <Button color="danger" onClick={clearCompleted}>
        clear completed
      </Button>
      <Button color="danger" onClick={reset}>
        reset
      </Button>
    </ButtonGroup>
  );
};
BulkController.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
export default BulkController;
