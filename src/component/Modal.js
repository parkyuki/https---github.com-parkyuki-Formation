import React from "react";

const Modal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="Modal">
      <div className="modl_cloase" onClick={closeModal}>
        x
      </div>
      <p>모달</p>
    </div>
  );
};

export default Modal;
