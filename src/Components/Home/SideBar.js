import React, { useState } from "react";
import "./Home.css";
import user from "../../images/user5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTh } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [feedback, setFeedback] = useState(false);

  const showFeedbackForm = () => setFeedback(!feedback);

  return (
    <section className="side-bar d-flex">
      <div
        className={
          feedback ? "sidebar-box pt-5" : "sidebar-box active-sidebar-box pt-5 "
        }
      >
        <div className="users d-flex bg-white p-2 mb-3">
          <img src={user} alt="" className="rounded-circle" />
          <div className="d-flex flex-column ps-2 ">
            <small>Hi Readers</small>
            <small>Heres your news!</small>
          </div>
        </div>

        <div
          className={
            feedback
              ? "d-none"
              : " toggle-section p-2 mb-3 bg-white text-center"
          }
        >
          <h5 className=" pt-1">View Toggle</h5>
          <div className="m-4 toggle-bg  d-flex  ">
            <div className="w-50 py-3 toggle-green">
              <FontAwesomeIcon icon={faTh} size="lg" />
            </div>
            <div className="w-50 py-3">
              <FontAwesomeIcon icon={faListUl} size="lg" />
            </div>
          </div>
        </div>

        <div className="feed-back p-3 bg-white text-center">
          <h5 className="pb-2">Have a Feedback?</h5>
          <button
            onClick={showFeedbackForm}
            className={
              feedback ? "feedback-btn active-feedback-btn" : "feedback-btn "
            }
          >
            We're listening
          </button>
        </div>
      </div>
      <div className={feedback ? "extended-sidebar-bg" : ""}>
        <div
          className={
            feedback
              ? "extended-sidebar active-extended-sidebar"
              : "extended-sidebar "
          }
        >
          <h2>hello</h2>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
