import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

export default function Todo({ text }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function deleteHandler() {
    setIsModalOpen(true);
  }

  function closeHandler() {
    setIsModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && (
        <>
          <Modal closeHandler={closeHandler} />
          <Backdrop closeHandler={closeHandler} />
        </>
      )}
    </div>
  );
}
