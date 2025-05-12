import { useState } from "react";
import Modal from "./Modal.jsx";

function ModalTest() {
  const [modalPopUp, setModalPopUp] = useState(false);

  function toggleModalPopUp() {
    setModalPopUp(!modalPopUp);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <button
        onClick={toggleModalPopUp}
        className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-700 shadow-md shadow-amber-500/50 outline-2 outline-offset-0"
      >
        Open Modal Popup
      </button>
      {modalPopUp && <Modal closeModal={toggleModalPopUp}/>}
    </div>
  );
}

export default ModalTest;