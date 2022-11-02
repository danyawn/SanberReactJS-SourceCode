import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TextInput, Label, Table, Button } from "flowbite-react";

const Tugas13 = () => {
  // State Declaration
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: null,
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentID, setCurrentID] = useState(-1);

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

  // Function Handling score
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

  //   Function Handling Input
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    } else if (name === "course") {
      setInput({ ...input, course: value });
    } else if (name === "score") {
      setInput({ ...input, score: value });
    }
  };

  //    Function Handling Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    let { name, course, score } = input;

    if (currentID === -1) {
      // Create data to API
      axios
        .post("https://backendexample.sanbercloud.com/api/student-scores", { name, course, score })
        .then((result) => {
          console.log(result);
          setFetchStatus(true);
        })
        .catch((err) => {});
    } else {
      axios
        .put(`https://backendexample.sanbercloud.com/api/student-scores/${currentID}`, { name, course, score })
        .then((result) => {
          setFetchStatus(true);
        })
        .catch((err) => {});
    }

    // Reset indicator to -1
    setCurrentID(-1);

    // clear set Input data
    setInput({
      name: "",
      course: "",
      score: "",
    });
  };

  //     Function Handling Delete
  const handleDelete = (event) => {
    let idData = parseInt(event.currentTarget.value);
    console.log(idData);
    axios
      .delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
      .then((result) => {
        setFetchStatus(true);
      })
      .catch((err) => {});
  };

  //   Function Handle Edit
  const handleEdit = (event) => {
    let idData = parseInt(event.currentTarget.value);
    // console.log(idData);
    setCurrentID(idData);
    axios
      .get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
      .then((result) => {
        let data = result.data;
        setInput({
          name: data.name,
          course: data.course,
          score: data.score,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <div className=" mt-12 grid justify-center">
      {/* Section Table */}
      <section className="mt-[100px] m-12 p-10 border border-indigo-300 rounded-lg shadow-xl">
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

      {/* Section Input */}
      <section className="mt-[20px] m-12 p-10 border border-indigo-300 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            {/* Input for Name */}
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput onChange={handleInput} value={input.name} name="name" id="name" type="text" placeholder="Fullname Here... (Henry)" required={true} />
          </div>

          {/* Input for Course */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="course" value="Your Course" />
            </div>
            <TextInput onChange={handleInput} value={input.course} name="course" id="course" type="text" placeholder="Course Here... (Algorithm)" required={true} />
          </div>

          {/* Input for Score */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="score" value="Your Score" />
            </div>
            <TextInput onChange={handleInput} value={input.score} name="score" id="score" type="number" placeholder="Score Here...(80)" required={true} />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </section>
      {/* Section Input End */}
    </div>
  );
};

export default Tugas13;
