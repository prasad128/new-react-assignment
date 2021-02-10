import React from "react";
import { GrClose } from "react-icons/gr";
import Modal from "react-modal";

function DataModal({ modalData, modalIsOpen, setModalIsOpen }) {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <div className="flex items-center justify-center h-full">
        <div className="">
          <div className="px-24">
            <img
              className="w-36 h-36"
              src={modalData && modalData.image}
              alt={modalData && modalData.image.slice(1)}
            />
          </div>
          <div className="mt-5 mb-2 text-lg">
            <span className="text-xl font-semibold">Name</span> -
            {modalData.category}
          </div>
          <div className="my-2 text-lg">
            <span className="text-xl font-semibold">Description</span> -{" "}
            {modalData.description}
          </div>
          <div className="my-2 text-lg">
            <span className="text-xl font-semibold">Quantity</span> -
            {modalData.quantity}
          </div>
        </div>
        <div
          onClick={() => setModalIsOpen(false)}
          className="p-2 mb-56 rounded-full hover:shadow-xl hover:bg-gray-500 active:text-red-600"
        >
          <GrClose size="1.5rem" />
        </div>
      </div>
    </Modal>
  );
}

export default DataModal;
