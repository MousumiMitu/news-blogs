import React from "react";
import img from "../../images/img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ modalNews, clickModal, handleModalClose }) => {
  const { title, body } = modalNews;
  return (
    <section>
      {clickModal ? (
        <div className="open-modal">
          <div></div>
          <div className="modal-desc shadow">
            <button onClick={handleModalClose}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <img src={img} className="w-50 " alt="" />
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Modal;
