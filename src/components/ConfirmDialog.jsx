import { useState } from "react";

const ConfirmDialog = ({ onConfirm }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition flex items-center gap-2"
      >
        🗑 Delete Item
      </button>

      {/* Overlay & Dialog */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold text-red-600">Are you sure?</h2>
            <p className="text-gray-500 mt-2">
              This action is **permanent**. You cannot undo this!
            </p>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md border hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  setOpen(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmDialog;
