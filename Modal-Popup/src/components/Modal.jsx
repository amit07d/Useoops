import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md text-center w-80">
        <h2 className="text-xl font-semibold mb-4">This is a Modal</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui id
          consectetur veniam molestiae delectus assumenda ipsam ve asperiores
          consequatur? Quos ipsam totam vitae consequuntur assumenda, esse
          quaerat sed expedita dolorem nobis inventore magni a tempore,
          similique laborum amet molestiae eaque ad odio delectus magnam
          veritatis necessitatibus fuga eveniet!
        </p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
