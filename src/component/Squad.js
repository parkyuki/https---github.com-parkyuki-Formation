import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Squad = ({ List }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div className="Squad_container">
      {List.map((it) => (
        <div className="Squad" onClick={showModal}>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
          <img
            className="Squad_Player_img"
            src={process.env.PUBLIC_URL + `/assets/player.png`}
          ></img>
          <div key={it.value}>
            <div>{it.name}</div>
            <div>포지션: {it.position}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Squad;
