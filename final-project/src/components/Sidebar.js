import React from "react";

import { MdSpaceDashboard, MdList, MdInput } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="h-[100vh] w-[100px] bg-primary fixed ">
        <ul className=" grid justify-center align-center">
          <NavLink className="" to={"/"}>
            <li className="pt-20 ">
              <div className="border p-1 rounded-md hover:bg-dark hover:ease-in-out hover:duration-300 hover:border-none hover:scale-125">
                <MdSpaceDashboard size="40px" color="white" />
              </div>
            </li>
          </NavLink>
          <NavLink to={"/view-data"}>
            <li className="pt-10">
              <div className="border p-1 rounded-md hover:bg-dark hover:ease-in-out hover:duration-300 hover:border-none hover:scale-125">
                <MdList size="40px" color="white" />
              </div>
            </li>
          </NavLink>

          <NavLink to={"/create-data"}>
            <li className="pt-10">
              <div className="border p-1 rounded-md hover:bg-dark hover:ease-in-out hover:duration-300 hover:border-none hover:scale-125">
                <MdInput size="40px" color="white" />
              </div>
            </li>
          </NavLink>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
