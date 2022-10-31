import React from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";

export const Tugas10 = () => {
  return (
    <div className="card">
      <Table className="">
        <Table.Head className="bg-indigo-600 text-white">
          <Table.HeadCell className="">NO</Table.HeadCell>
          <Table.HeadCell className="">NAMA</Table.HeadCell>
          <Table.HeadCell className="">MATA KULIAH</Table.HeadCell>
          <Table.HeadCell className="">NILAI</Table.HeadCell>
          <Table.HeadCell className="">NILAI INDEX</Table.HeadCell>
          <Table.HeadCell className="">
            <span className="">ACTION</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {/* ROW 1 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>1</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">John</Table.Cell>
            <Table.Cell>Algoritma</Table.Cell>
            <Table.Cell>80</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell class="flex">
              <a href="" className="m-2 p-1">
                <Button clasNames="bg-blue-600 text-white rounded-lg">Edit</Button>
              </a>
              <a href="" className="m-2 p-1 ">
                <Button className="bg-red-600 text-white rounded-lg">Delete</Button>
              </a>
            </Table.Cell>
          </Table.Row>

          {/* ROW 2 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>2</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Doe</Table.Cell>
            <Table.Cell>Matematika</Table.Cell>
            <Table.Cell>70</Table.Cell>
            <Table.Cell>B</Table.Cell>
            <Table.Cell class="flex">
              <a href="" className="m-2 p-1">
                <Button clasNames="bg-blue-600 text-white rounded-lg">Edit</Button>
              </a>
              <a href="" className="m-2 p-1 ">
                <Button className="bg-red-600 text-white rounded-lg">Delete</Button>
              </a>
            </Table.Cell>
          </Table.Row>

          {/* ROW 3 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>3</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Frank</Table.Cell>
            <Table.Cell>Kalkulus</Table.Cell>
            <Table.Cell>60</Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell className="flex">
              <a href="" className="m-2 p-1">
                <Button className="bg-blue-600 text-white rounded-lg">Edit</Button>
              </a>
              <a href="" className="m-2 p-1 ">
                <Button className="bg-red-600 text-white rounded-lg">Delete</Button>
              </a>
            </Table.Cell>
          </Table.Row>

          {/* ROW 4 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>4</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Jason</Table.Cell>
            <Table.Cell>Basis Data</Table.Cell>
            <Table.Cell>90</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell className="flex">
              <a href="" className="m-2 p-1">
                <Button className="bg-blue-600 text-white rounded-lg">Edit</Button>
              </a>
              <a href="" className="m-2 p-1 ">
                <Button className="bg-red-600 text-white rounded-lg">Delete</Button>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Tugas10;
