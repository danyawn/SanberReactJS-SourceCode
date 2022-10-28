import React from "react";
import { Table } from "flowbite-react";

export const Tugas10 = () => {
  return (
    <div className="card">
      <Table className="shadow-xl">
        <Table.Head>
          <Table.HeadCell className="bg-indigo-500 text-white">NO</Table.HeadCell>
          <Table.HeadCell className="bg-indigo-500 text-white">NAMA</Table.HeadCell>
          <Table.HeadCell className="bg-indigo-500 text-white">MATA KULIAH</Table.HeadCell>
          <Table.HeadCell className="bg-indigo-500 text-white">NILAI</Table.HeadCell>
          <Table.HeadCell className="bg-indigo-500 text-white">NILAI INDEX</Table.HeadCell>
          <Table.HeadCell className="bg-indigo-500 text-white">
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
            <Table.Cell>
              <a href="/tables" className="font-medium text-white p-2 mr-2 rounded-md bg-blue-600 hover:underline dark:text-blue-500">
                Edit
              </a>
              <a href="/tables" className="font-medium text-white p-2 mr-2 rounded-md bg-red-600 hover:underline dark:text-blue-500">
                Delete
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
            <Table.Cell>
              <a href="/tables" className="font-medium text-white p-2 mr-2 rounded-md bg-blue-600 hover:underline dark:text-blue-500">
                Edit
              </a>
              <a href="/tables" className="font-medium text-white p-2 mr-2 rounded-md bg-red-600 hover:underline dark:text-blue-500">
                Delete
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
            <Table.Cell>
              <a href="/tables" className="font-medium text-white p-2 mr-2 rounded-md bg-blue-600 hover:underline dark:text-blue-500">
                Edit
              </a>
              <a href="/tables" className="font-medium text-white p-2 mr-2 rounded-md bg-red-600 hover:underline dark:text-blue-500">
                Delete
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
            <Table.Cell>
              <a href="/tables" className="font-medium text-white p-2 mr-2 rounded-md bg-blue-600 hover:underline dark:text-blue-500">
                Edit
              </a>
              <a href="/tables" className="font-medium text-white p-2 mr-2 rounded-md bg-red-600 hover:underline dark:text-blue-500">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Tugas10;
