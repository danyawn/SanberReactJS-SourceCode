import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between py-10 px-32 bg-slate-100 shadow-lg sticky top-0 z-50">
        {/* Name */}
        <h2 className="text-3xl">
          ReactJS <span className="text-4xl text-indigo-700 font-bold">Sanbercode</span>{" "}
        </h2>

        {/* Navigation */}
        <ul className=" text-xl">
          {/* Home */}
          <NavLink to={"/"} activeClassName="active" className={({ isActive }) => (isActive ? " p-3 " : "")}>
            <li className="inline m-10 px-5 py-3 text-white bg-indigo-700 rounded-xl shadow-xl hover:bg-indigo-400 hover:ease-in-out hover:duration-200 hover:cursor-pointer">Home</li>
          </NavLink>

          {/* Tugas 15 */}
          <NavLink to={"/view-data"} activeClassName="active" className={({ isActive }) => (isActive ? " p-3 " : "")}>
            <li className="inline m-10 px-5 py-3 text-white bg-indigo-700 rounded-xl shadow-xl hover:bg-indigo-400 hover:ease-in-out hover:duration-200 hover:cursor-pointer">Tugas 15</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
