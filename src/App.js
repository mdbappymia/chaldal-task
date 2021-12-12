import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterModal from "./Components/FilterModal/FilterModal";
import UserAnalysis from "./Components/UserAnalysis/UserAnalysis";
import Users from "./Components/Users/Users";

const App = () => {
  const [startDate, setStartDate] = useState("2016-07-11");
  const [endDate, setEndDate] = useState("2016-07-29");
  const [userStatus, setUserStatus] = useState("super-active");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <UserAnalysis
                endDate={endDate}
                startDate={startDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                userStatus={userStatus}
                setUserStatus={setUserStatus}
              />
            }
          />
          <Route
            path="/users"
            element={
              <Users
                userStatus={userStatus}
                startDate={startDate}
                endDate={endDate}
                handleShow={handleShow}
              ></Users>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <FilterModal
        endDate={endDate}
        startDate={startDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        userStatus={userStatus}
        setUserStatus={setUserStatus}
        show={show}
        handleClose={handleClose}
      ></FilterModal>
    </div>
  );
};

export default App;
