import React from "react";
import { FiExternalLink } from "react-icons/fi";

function Table({ table, data, handleModal }) {
  return (
    <table
      className={
        table
          ? `transform scale-y-100 transition-all duration-1000 origin-top block`
          : `transform  scale-y-0 transition-all duration-1000 origin-top hidden`
      }
    >
      <thead>
        <tr className="text-white bg-gray-900">
          <th className="border"></th>
          <th className="px-3 border">Agri-Input Category</th>
          <th className="w-16 px-3 border">Product Image</th>
          <th className="px-3 text-center border">Product Description</th>
          <th className="w-16 px-3 border">Order Quantity</th>
        </tr>
      </thead>
      <tbody className="">
        {data.map((row) => {
          return (
            <tr
              key={row.id}
              className="text-sm odd:bg-gray-300 even:bg-gray-200"
            >
              <td className="px-5 py-3 border-2">{row.id}.</td>
              <td className="border-2">{row.category}</td>
              <td className="px-6 border-2">
                <img
                  className=" w-9 h-9"
                  src={row.image}
                  alt={row.image.slice(1)}
                />
              </td>
              <td className="border-2">{row.description}</td>
              <td className="text-center border-2">{row.quantity}</td>
              <td
                className="px-2 bg-white cursor-pointer"
                onClick={() => handleModal(row)}
              >
                <FiExternalLink size="1.5rem" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
