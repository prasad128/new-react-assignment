import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SiMicrosoftexcel } from "react-icons/si";
import { RiDownload2Fill } from "react-icons/ri";
import CsvDownloader from "react-csv-downloader";

function InfoBar({ time, color, num, table, setTable, data }) {
  const columns = [
    { id: "id", displayName: "" },
    { id: "category", displayName: "Agri-Input Category" },
    { id: "image", displayName: "Product Image" },
    { id: "description", displayName: "Product Description" },
    { id: "quantity", displayName: "Product Quantity" },
  ];
  return (
    <div className="inline-flex py-1.5 pr-4  bg-gray-400 divide-x-4">
      <div
        onClick={() => setTable(!table)}
        className="flex items-center px-5 py-0 cursor-pointer "
      >
        <div className="inline-block bg-white border border-black rounded-full">
          {color === "black" ? (
            <div className="w-2 h-2 m-0.5 bg-gray-900 rounded-full"></div>
          ) : (
            <div className="w-2 h-2 m-0.5 bg-white rounded-full"></div>
          )}
        </div>
        <div className="ml-4">
          AGBUY<span className="text-xs">{num}</span>
        </div>
        <div className="ml-9">
          {table ? (
            <IoIosArrowUp size="1.5rem" />
          ) : (
            <IoIosArrowDown size="1.5rem" />
          )}
        </div>
      </div>
      <div className="flex items-center px-5 py-2 ">
        <div className="border border-black rounded-full w-9 h-9">
          <img
            className="object-cover w-full h-full rounded-full"
            src="/img2.jpg"
            alt=""
          />
        </div>
        <div className="ml-3 leading-tight">
          <div className="leading-tight">Alex Lee</div>
          <div className="text-xs leading-tight">{time}</div>
        </div>
        {/* <div className=""></div> */}
      </div>
      <div className="flex items-center px-5 py-2 ">
        <div className="text-green-800">
          <SiMicrosoftexcel size="1.8rem" />
        </div>
        <div className="ml-4">
          RFQList<span className="text-xs">{num}</span>
        </div>
        <div className="cursor-pointer ml-9">
          <CsvDownloader
            filename="productDetails"
            columns={columns}
            datas={data}
          >
            <RiDownload2Fill size="1.5rem" />
          </CsvDownloader>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
