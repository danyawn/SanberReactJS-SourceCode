import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const { state } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus, handleDelete, handleEdit, handleDesc } = state;

  useEffect(() => {
    if (fetchStatus === true) {
      axios.get("https://dev-example.sanbercloud.com/api/job-vacancy").then((res) => {
        setData([...res.data.data]);
      });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  return (
    <>
      {/* Content */}
      <div className="flex justify-between">
        {/* Header & Sidebar */}
        <div>
          <Sidebar />
          <Header />
        </div>
        {/* Header & Sidebar End */}

        {/* Content */}
        <div className="container pt-24 grid justify-center">
          {/* Info Loker */}
          {data !== null &&
            data.map((res, index) => {
              return (
                <div className=" w-[100%] p-10  flex flex-wrap justify-center gap-9 items-center">
                  <div className="w-[40%] h-[50vh] border bg-secondary rounded-xl p-4">
                    <div className=" ">
                      <img src={res.company_image_url} className="w-14 h-14"></img>
                    </div>
                    <div className="text-2xl">{res.title}</div>
                    <div className="text-xl">{res.job_type}</div>
                    <div className="text-sm mt-6">{handleDesc(res.job_description)}</div>
                    <div className="text-center text-sm mt-6 p-2 w-[30%] rounded-md bg-dark text-white">Rp. {res.salary_min}</div>
                    <div className="flex justify-center">
                      <div className="bg-blue-500 mt-5 p-2 text-center w-[20%] text-white rounded-lg hover:bg-blue-300 hover:scale-125 hover:duration-300">Apply</div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* Info Loker End */}
        </div>
        {/* Content End */}
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
      {/* Footer End */}
    </>
  );
};

export default Dashboard;
