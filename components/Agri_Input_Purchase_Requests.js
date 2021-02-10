import React from "react";

import { data } from "../public/static-data";
import NavTabs from "./NavTabs";
import Executing from "./Executing";

function Agri_Input_Purchase_Requests() {
  // const tabs = ["Pending", "Executing", "Executed", "Completed"];

  const [table, setTable] = React.useState(true);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState("");

  const handleModal = (row) => {
    setModalData(row);
    setModalIsOpen(true);
  };

  return (
    <div className="flex-1 px-4 ">
      <div className="px-1 py-4 text-xl font-semibold">
        Agri Input Master Maintenance
      </div>
      <NavTabs />
      <Executing
        table={table}
        setTable={setTable}
        modalData={modalData}
        setModalData={setModalData}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        data={data}
        handleModal={handleModal}
      />
    </div>
  );
}

export default Agri_Input_Purchase_Requests;
