import React from "react";

const UserAnalysis = () => {
  return (
    <div>
      <h1>User Analyzer</h1>
      <p>Select filter to generate report</p>
      <form>
        <h3>Date</h3>
        <hr />
        <div className="start-date-field">
          <label>From</label>
          <input type="date" name="" id="" />
        </div>
        <div className="end-date-field">
          <label>To</label>
          <input type="date" name="" id="" />
        </div>
        <h3>Status</h3>
        <hr />
        <div>
          <input type="radio" name="status" id="active" />
          <label htmlFor="active">Active</label>
          <br />
          <input type="radio" name="status" id="super-active" />
          <label htmlFor="super-active">Super Active</label>
          <br />
          <input type="radio" name="status" id="bored" />
          <label htmlFor="bored">Bored</label>
        </div>
      </form>
    </div>
  );
};

export default UserAnalysis;
