import React, { FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="relative p-8 bg-white text-black w-full max-w-md m-auto flex-col flex rounded-lg">
        <div>
        {children}
        </div>
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-400"
          onClick={onClose}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default Modal;
