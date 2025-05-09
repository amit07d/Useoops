import { useState } from "react";
import Qrcode from "react-qr-code";

function Qr() {
  const [name, setName] = useState("");
  const [qr, setQr] = useState("");

  function handleClick() {
    if (name) {
      setQr(name);
    }
  }

  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">Generate QR Code for a Name</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
        className="border border-gray-300 rounded px-4 py-2 w-64"
      />

      <button
        onClick={handleClick}
        disabled={!name}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Generate QR Code
      </button>

      {qr && (
        <div className="bg-white p-4">
          <Qrcode value={qr} size={200} />
        </div>
      )}
    </div>
  );
}

export default Qr;
