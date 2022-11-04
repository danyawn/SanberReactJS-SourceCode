import React, { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  // Use Navigate Declaration
  let navigate = useNavigate();

  // State Declaration
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: null,
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentID, setCurrentID] = useState(-1);

  //   Declaration of Object from State
  let state = {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
    currentID,
    setCurrentID,
  };

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
      // Create data
      axios
        .post("https://backendexample.sanbercloud.com/api/student-scores", { name, course, score })
        .then((result) => {
          console.log(result);
          setFetchStatus(true);
          navigate("/view-data");
        })
        .catch((err) => {});
    } else {
      // Update Data
      axios
        .put(`https://backendexample.sanbercloud.com/api/student-scores/${currentID}`, { name, course, score })
        .then((result) => {
          setFetchStatus(true);
          navigate("/view-data");
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
    navigate(`/edit-data/${idData}`);
    // axios
    //   .get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
    //   .then((result) => {
    //     let data = result.data;
    //     setInput({
    //       name: data.name,
    //       course: data.course,
    //       score: data.score,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   });
  };

  // Declaration of Object from Function
  let handleFunction = {
    handleIndexScore,
    handleInput,
    handleSubmit,
    handleDelete,
    handleEdit,
  };

  return <GlobalContext.Provider value={{ state, handleFunction }}>{props.children}</GlobalContext.Provider>;
};
