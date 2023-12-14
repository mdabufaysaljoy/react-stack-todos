import React from "react";
import PropTypes from "prop-types";
import SearchPanel from "./search";
import { Row, Col } from "reactstrap";
import FilterController from "./FilterController";
import ViewController from "./viewController";
import BulkController from "./bulkController";

const Controller = ({
  term,
  handleSearch,
  toggleForm,
  view,
  changeView,
  handleFilter,
  clearCompleted,
  clearSelected,
  reset,
}) => (
  <div>
    <SearchPanel
      term={term}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    <Row className="my-4">
      <Col md={{ size: 4 }}>
        <FilterController handleFilter={handleFilter} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }} className="d-flex">
        <div className="ms-auto">
          <BulkController
            clearCompleted={clearCompleted}
            clearSelected={clearSelected}
            reset={reset}
          />
        </div>
      </Col>
    </Row>
  </div>
);

Controller.propTypes = {
  term: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
export default Controller;
