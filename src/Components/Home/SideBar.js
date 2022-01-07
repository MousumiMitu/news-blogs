import React, { useContext, useState } from "react";
import "./Home.css";
import user from "../../images/user5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTh } from "@fortawesome/free-solid-svg-icons";
import FeedbackForm from "./FeedbackForm";
import BlogNews from "./BlogNews";
import { BlogContext } from "../../App";

const SideBar = () => {
  const [feedback, setFeedback] = useState(false);

  const showFeedbackForm = () => setFeedback(!feedback);

  const [displayView, setDisplayView] = useContext(BlogContext);

  return (
    <section className={feedback ? "side-bar " : "  "}>
      <div className="">
        <div
          className={
            feedback
              ? "sidebar-box pt-4"
              : "sidebar-box active-sidebar-box pt-4 "
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
              <div
                onClick={() => setDisplayView("grid-view")}
                className={
                  displayView === "grid-view"
                    ? "toggle-green w-50 py-3"
                    : " w-50 py-3 "
                }
              >
                <FontAwesomeIcon icon={faTh} size="lg" />
              </div>
              <div
                onClick={() => setDisplayView("list-view")}
                className={
                  displayView === "list-view"
                    ? "toggle-green w-50 py-3"
                    : " w-50 py-3 "
                }
              >
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

        <div
          className={
            feedback
              ? "extended-sidebar active-extended-sidebar"
              : "extended-sidebar "
          }
        >
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
