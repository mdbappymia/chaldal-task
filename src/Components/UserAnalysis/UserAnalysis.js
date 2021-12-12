import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserAnalysis.css";

const UserAnalysis = ({
  setStartDate,
  setEndDate,
  startDate,
  endDate,
  userStatus,
  setUserStatus,
}) => {
  return (
    <>
      <div className="user-analyzer-head"></div>
      <div className="user-analyzer-container my-4">
        <h1 className="text-center">User Analyzer</h1>
        <p className="text-center">Select filter to generate report</p>
        <Form className="user-analyzer-form">
          <h3>Date</h3>
          <hr />
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
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
          <div className="text-center">
            <Link to="/users">
              <Button className="mt-3 text-white" variant="info">
                Generate
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UserAnalysis;
