import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Users.css";

const allDataUrl = [
  "data/10780.json",
  "data/13116.json",
  "data/14842.json",
  "data/17172.json",
  "data/2.json",
  "data/20566.json",
  "data/21632.json",
  "data/2627.json",
  "data/27366.json",
  "data/29127.json",
  "data/30024.json",
  "data/30332.json",
  "data/31870.json",
  "data/33550.json",
  "data/34407.json",
  "data/34429.json",
  "data/36495.json",
  "data/37327.json",
  "data/38639.json",
  "data/7.json",
];
const Users = ({ startDate, endDate, userStatus, handleShow }) => {
  const [usersData, setUsersData] = useState([]);
  const [findUser, setFindUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // get all user data and put a state
  const getAllData = async (dataUrl) => {
    const users = [];
    setIsLoading(true);
    for (let dataUrl of allDataUrl) {
      const res = await fetch(dataUrl);
      const data = await res.json();
      users.push(data);
    }
    setUsersData(users);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllData(allDataUrl);
  }, []);

  //   find user information by specific date

  var fromDate = new Date(startDate);
  var toDate = new Date(endDate);

  let loop = new Date(fromDate);
  const dates = [];
  while (loop <= toDate) {
    let year = loop.getFullYear();
    let month = loop.getMonth() + 1;
    let dt = loop.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    dates.push(year + "-" + month + "-" + dt);
    let newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
  }

  // filter user number of orders
  const userFilter = () => {
    const active = [];
    const superActive = [];
    const bored = [];
    for (let user of usersData) {
      let count = 0;
      for (let date of dates) {
        for (let meal in user.calendar.mealIdToDayId) {
          if (
            user.calendar.dateToDayId[date] ===
            user.calendar.mealIdToDayId[meal]
          ) {
            count = count + 1;
          }
        }
      }
      if (count >= 10) {
        superActive.push(user);
      }
      if (count >= 5 && count < 10) {
        active.push(user);
      }
      if (count >= 0 && count < 5) {
        bored.push(user);
      }
    }
    return [superActive, active, bored];
  };
  const user = userFilter();

  let renderUser = [];
  let text = "";
  if (userStatus === "super-active") {
    renderUser = user[0];
    text = "Super";
  } else if (userStatus === "active") {
    renderUser = user[1];
    text = "Active";
  } else if (userStatus === "bored") {
    renderUser = user[2];
    text = "Bored";
  } else {
    renderUser = [];
  }
  let showUser = [];
  const handleSearch = (e) => {
    const searchUser = renderUser.filter((user) =>
      user.profile.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFindUser(searchUser);
  };
  if (findUser.length) {
    showUser = findUser;
  } else {
    showUser = renderUser;
  }

  return (
    <>
      <div className="user-nav">
        <Link to="/">
          <i className="ms-4 mt-3 fas fa-arrow-left"></i>
        </Link>
      </div>
      <div className="p-2 p-md-4">
        <div className="ms-3 d-flex justify-content-between">
          <p>Show {text} user</p>
          <div onClick={handleShow} className="d-flex filter me-3">
            <p className="me-1 me-md-2">Edit filter</p>
            <i className="fas fa-filter mt-1"></i>
          </div>
        </div>
        <div className="text-center mx-4">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              onChange={handleSearch}
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <Row>
          {isLoading && (
            <div className="text-center my-5">
              <Spinner animation="border" />
            </div>
          )}
          {!renderUser.length && !isLoading && (
            <h1 className="text-center my-5">{text} user is empty</h1>
          )}
          {showUser.map((user, index) => (
            <Col xs={6} key={index}>
              <div className="user-card">
                <img className="w-100" src={user.profile.pictureUrl} alt="" />
                <h3 className="user-name mt-sm-3 m-1">{user.profile.name}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Users;
