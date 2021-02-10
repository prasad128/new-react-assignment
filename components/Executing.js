import React from "react";
import Batches from "./Batches";
import { BsFillCaretDownFill } from "react-icons/bs";

import InfoBar from "./InfoBar";
import Table from "./Table";
import DataModal from "./DataModal";

function Executing({
  table,
  setTable,
  modalData,
  handleModal,
  modalIsOpen,
  setModalIsOpen,
  data,
}) {
  return (
    <div className="">
      <div className="flex justify-center mr-20 -mt-3 ">
        <BsFillCaretDownFill size="2rem" />
      </div>
      <Batches />
      <div className="mt-10 divide-y-0 ">
        <div className="flex pl-12 space-x-24 border-b-2 border-gray-400 mb">
          <div className="font-semibold">Executing Agri-Input Orders </div>
          <div className="font-semibold">Batched By</div>
        </div>
        <div className="pt-4 pb-3 ml-3">
          <InfoBar
            time="Mon, 11 May, 12.23 PM"
            color="black"
            num="13042020_1042"
            table={table}
            setTable={setTable}
            data={data}
          />
          <div className="mt-2 mb-4">
            <Table data={data} table={table} handleModal={handleModal} />
            <DataModal
              modalIsOpen={modalIsOpen}
              modalData={modalData}
              setModalIsOpen={setModalIsOpen}
            />
          </div>
          <InfoBar
            time="Sun, 25 June, 10.30 AM"
            color="white"
            num="09042020_1112"
          />
        </div>
      </div>
    </div>
  );
}

export default Executing;
