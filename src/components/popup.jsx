
import React from "react";

const Popup = ({ message, type, onClose, onConfirm }) => {
  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 z-50 bg-white p-6 rounded shadow-lg border w-80">
      <p className={`text-center text-lg font-semibold mb-4 ${type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
        {message}
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={onConfirm}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;
