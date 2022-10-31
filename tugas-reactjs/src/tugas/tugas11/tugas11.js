import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";

const Tugas11 = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((result) => {
        console.log(result.data);

        let data = result.data;

        let resultData = data.map((r) => {
          let { course, created_at, id, name, score, updated_at } = r;
          return {
            course,
            name,
            score,
          };
        });
        setData([...result.data]);
      })
      .catch((err) => {});
  }, []);

  function handleIndexScore(params) {
    if (params >= 80) {
      return "A";
    } else if (params >= 70 && params < 80) {
      return "B";
    } else if (params >= 60 && params < 70) {
      return "C";
    } else if (params >= 50 && params < 60) {
      return "D";
    } else if (params < 50) {
      return "E";
    }
  }

  return (
    <div className=" mt-12 flex  justify-center">
      <Table className="">
        <Table.Head className="!bg-indigo-600 !text-white text-center">
          <Table.HeadCell>NO</Table.HeadCell>
          <Table.HeadCell>NAMA</Table.HeadCell>
          <Table.HeadCell>MATA KULIAH</Table.HeadCell>
          <Table.HeadCell>NILAI</Table.HeadCell>
          <Table.HeadCell>NILAI INDEX</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data != null &&
            data.map((result, index) => {
              return (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center align-center">
                    <Table.Cell> {index + 1} </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{result.name}</Table.Cell>
                    <Table.Cell>{result.course}</Table.Cell>
                    <Table.Cell>{result.score}</Table.Cell>
                    <Table.Cell> {handleIndexScore(result.score)} </Table.Cell>
                  </Table.Row>
                </>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Tugas11;
