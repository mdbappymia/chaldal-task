import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const FilterModal = ({
  endDate,
  startDate,
  setStartDate,
  setEndDate,
  userStatus,
  setUserStatus,
  show,
  handleClose,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <div className="d-flex my-3 justify-content-between">
          <h3 className="ms-5">Edit Filter</h3>
          <div
            onClick={handleClose}
            style={{ cursor: "pointer" }}
            className="me-5 fs-3"
          >
            &times;
          </div>
        </div>
        <div className=" m-4">
          <Form className="user-analyzer-form">
            <h3>Date</h3>
            <hr />
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column xs="2">
                From
              </Form.Label>
              <Col xs="10">
                <Form.Control
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                  type="date"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column xs="2">
                To
              </Form.Label>
              <Col xs="10">
                <Form.Control
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                  type="date"
                />
              </Col>
            </Form.Group>
            <h3>Status</h3>
            <hr />
            <div>
              <input
                onChange={(e) => setUserStatus(e.target.value)}
                type="radio"
                name="status"
                value="active"
                id="active"
              />
              <label htmlFor="active">Active</label>
              <br />
              <input
                onChange={(e) => setUserStatus(e.target.value)}
                checked={userStatus === "super-active"}
                type="radio"
                value="super-active"
                name="status"
                id="super-active"
              />
              <label htmlFor="super-active">Super Active</label>
              <br />
              <input
                onChange={(e) => setUserStatus(e.target.value)}
                type="radio"
                name="status"
                id="bored"
                value="bored"
              />
              <label htmlFor="bored">Bored</label>
            </div>
            <div className="text-center"></div>
            <div className="text-center my-3">
              <Button variant="info" onClick={handleClose}>
                Generate
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default FilterModal;
