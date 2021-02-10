const Batches = () => {
  return (
    <div className="flex justify-center mt-1 space-x-5 text-lg text-white">
      <button className="w-56 py-2 bg-gray-600 rounded-md">Undo Batch</button>
      <button className="w-56 py-2 bg-gray-600 rounded-md">
        Assign Suppliers
      </button>
      <button
        className="w-56 py-2 bg-gray-600 rounded-md disabled:opacity-50"
        disabled
      >
        Generate PO
      </button>
    </div>
  );
};

export default Batches;
