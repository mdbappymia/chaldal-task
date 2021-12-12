import React, { useEffect, useState } from "react";

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
const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [startDate, setStartDate] = useState("2016-07-11");
  const [endDate, setEndDate] = useState("2016-07-29");
  // get all user data and put a state
  const getAllData = async (dataUrl) => {
    const users = [];
    for (let dataUrl of allDataUrl) {
      const res = await fetch(dataUrl);
      const data = await res.json();
      users.push(data);
    }
    setUsersData(users);
  };
  useEffect(() => {
    getAllData(allDataUrl);
  }, []);

  //   find user information by specific date

  // var startDate = new Date("2016-07-11");
  // var endDate = new Date("2016-07-29");

  let loop = new Date(startDate);
  const dates = [];
  while (loop <= endDate) {
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
  console.log(dates);

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
      console.log(count);
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
    // console.log(superActive, active, bored);
    return [superActive, active, bored];
  };
  const user = userFilter();
  console.log(user);
  // console.log(usersData);
  return <div></div>;
};

export default Users;
