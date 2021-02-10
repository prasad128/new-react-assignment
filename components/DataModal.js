import React from "react";
import { GrClose } from "react-icons/gr";
import Modal from "react-modal";

function DataModal({ modalData, modalIsOpen, setModalIsOpen }) {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <div className="flex items-center justify-center h-full">
        <div className="relative px-6 py-4 border-2">
          <div className="px-32">
            <img
              className="w-36 h-36"
              src={modalData && modalData.image}
              alt={modalData && modalData.image.slice(1)}
            />
          </div>
          <div className="mt-5 mb-2 text-xl font-semibold">
            <span className="text-lg font-medium ">Name -</span>{" "}
            {modalData.category}
          </div>
          <div className="my-2 text-xl font-semibold">
            <span className="text-lg font-medium ">Description -</span>{" "}
            {modalData.description}
          </div>
          <div className="my-2 text-xl font-semibold">
            <span className="text-lg font-medium ">Quantity -</span>{" "}
            {modalData.quantity}
          </div>
          <div
            onClick={() => setModalIsOpen(false)}
            className="absolute p-2 bg-gray-300 rounded-full -right-5 -top-5 hover:shadow-xl hover:bg-gray-400 active:text-red-600"
          >
            <GrClose size="1.5rem" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DataModal;
