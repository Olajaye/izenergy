import { ReactNode } from "react";


interface PopupProps {
  onClose: ()=> void,
  value: ReactNode
}
// ThankYouPopup Component
export const Popup = ({ onClose, value } :PopupProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-80 text-center">
        <div className="flex justify-end items-end px-6 py-4">
          <button
            onClick={onClose}
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Close
          </button>

        </div>
        
        {value}
      </div>
    </div>
  );
};


