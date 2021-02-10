const NavTabs = () => {
  return (
    <div className="flex justify-end mt-1 space-x-1 text-white border-b-2 border-gray-400">
      <button className="w-56 text-sm font-semibold uppercase bg-gray-600 h-18">
        Pending
      </button>
      <button className="w-56 text-sm font-semibold uppercase bg-gray-900 h-18">
        Executing
      </button>
      <button className="w-56 text-sm font-semibold uppercase bg-gray-600 h-18">
        Executed
      </button>
      <button className="w-56 text-sm font-semibold uppercase bg-gray-600 h-18">
        Completed
      </button>
    </div>
  );
};

export default NavTabs;
