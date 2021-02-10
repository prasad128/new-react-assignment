import React from "react";

function SideBar() {
  const sideNavs = [
    "Agri-Input Master Maintenance",
    "Supplier Master Maintenance",
  ];
  return (
    <div className="w-1/6 ">
      <div className="flex flex-col justify-between px-5 py-3 text-white bg-gray-700 h-9/10">
        <div className="">
          <div className="pb-6 text-2xl font-semibold leading-tight text-center border-b-2">
            Agri-Purchase Management
          </div>
          {sideNavs.map((nav) => {
            return (
              <div
                key={nav}
                className="py-3 text-lg font-medium leading-tight text-center border-b-2"
              >
                {nav}
              </div>
            );
          })}
          <div className="py-3 text-lg font-medium leading-tight text-center text-green-400 border-b-2">
            Agri-Input Purchase Requests
          </div>
        </div>
        <div className="pt-3 text-lg font-medium leading-tight text-center border-t-2">
          Tax Master Maintenance
        </div>
        {/* <div className="">Tax</div> */}
      </div>
      <div className="bg-gray-400"></div>
    </div>
  );
}

export default SideBar;
