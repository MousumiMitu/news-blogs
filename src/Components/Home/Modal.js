import React from "react";
import img from "../../images/img1.jpg";

const Modal = ({ modalNews, clickModal, handleModalClose }) => {
  const { title, body } = modalNews;
  return (
    <section>
      {clickModal ? (
        <div className="cardModal">
          <div className="modal-desc shadow">
            <img src={img} className="w-50 " alt="" />
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Modal;
