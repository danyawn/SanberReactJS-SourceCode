import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { Table, Button } from "flowbite-react";
import { GlobalContext } from "../context/globalContext";
import { NavLink } from "react-router-dom";
import Navbar from "../component/navbar";

const View = () => {
  // Using Context
  const { state, handleFunction } = useContext(GlobalContext);

  // Destructuring state
  let { data, setData, input, setInput, fetchStatus, setFetchStatus, currentID, setCurrentID } = state;

  // Destructuring handleFunction
  let { handleIndexScore, handleInput, handleSubmit, handleDelete, handleEdit } = handleFunction;

  // Input in API using Fetch
  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((result) => {
          let resData = result.data;

          let resultData = resData.map((r) => {
            let { course, created_at, id, name, score, updated_at } = r;
            return {
              id,
              course,
              name,
              score,
            };
          });
          setData([...resData]);
          console.log(resData);
        })
        .catch((err) => {});
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <Navbar />

      <div className=" mt-1 grid justify-center">
        {/* Section Table */}
        <section className=" mt-20 p-10 border border-indigo-300 rounded-lg shadow-xl">
          <div className="mb-5">
            <NavLink to={"/create-data"}>
              <Button>Create New Data</Button>
            </NavLink>
          </div>
          <div className="container">
            <Table className="">
              <Table.Head className="!bg-indigo-600 !text-white text-center">
                <Table.HeadCell>NO</Table.HeadCell>
                <Table.HeadCell>NAMA</Table.HeadCell>
                <Table.HeadCell>MATA KULIAH</Table.HeadCell>
                <Table.HeadCell>NILAI</Table.HeadCell>
                <Table.HeadCell>NILAI INDEX</Table.HeadCell>
                <Table.HeadCell>ACTION</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {data != null &&
                  data.map((resData, index) => {
                    return (
                      <>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center align-center">
                          <Table.Cell> {index + 1} </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{resData.name}</Table.Cell>
                          <Table.Cell>{resData.course}</Table.Cell>
                          <Table.Cell>{resData.score}</Table.Cell>
                          <Table.Cell> {handleIndexScore(resData.score)} </Table.Cell>
                          <Table.Cell>
                            <div className="flex gap-4">
                              <Button value={resData.id} onClick={handleEdit}>
                                Update
                              </Button>
                              <Button value={resData.id} onClick={handleDelete} color="failure">
                                Delete
                              </Button>
                            </div>
                          </Table.Cell>
                        </Table.Row>
                      </>
                    );
                  })}
              </Table.Body>
            </Table>
          </div>
        </section>
        {/* Section Table End */}
      </div>
    </>
  );
};

export default View;
