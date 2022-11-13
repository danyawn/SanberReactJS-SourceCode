import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between w-[100%] py-3 px-14 shadow-md fixed top-0 bg-white">
        {/* Logo */}
        <div className="">
          <div>
            <span className="text-2xl font-bold text-primary">Job</span>
            <span className="text-xl font-bold text-dark"> Seekers</span>
          </div>
        </div>

        {/* Night Button */}
        <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-dark dark:text-primary">Night</span>
        </label>
      </div>
    </>
  );
};

export default Header;
