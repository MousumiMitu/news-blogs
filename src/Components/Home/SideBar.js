import React from "react";
import "./Home.css";
import user from "../../images/user5.jpg";

const SideBar = () => {
  return (
    <section className="side-bar pt-5">
      <div className="sidebar-box">
        <div className="users d-flex bg-white p-2 mb-3">
          <img src={user} alt="" className="rounded-circle" />
          <div className="d-flex flex-column ps-2 ">
            <small>Hi Readers</small>
            <small>Heres your news!</small>
          </div>
        </div>

        <div className="toggle-section p-2 bg-white">
          <h6 className="text-center">View Toggle</h6>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
