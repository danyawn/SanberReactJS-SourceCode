import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { TextInput, Label, Table, Button } from "flowbite-react";
import { GlobalContext } from "../context/globalContext";
import Navbar from "../component/navbar";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Create = () => {
  //   Catch Data using useParams()
  let { idData } = useParams();

  // Using Context
  const { state, handleFunction } = useContext(GlobalContext);

  // Destructuring state
  let { data, setData, input, setInput, fetchStatus, setFetchStatus, currentID, setCurrentID } = state;

  // Destructuring handleFunction
  let { handleIndexScore, handleInput, handleSubmit, handleDelete, handleEdit } = handleFunction;

  useEffect(() => {
    if (idData !== undefined) {
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
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className=" mt-20 w-[50%] m-auto">
        {/* Section Input */}
        <section className="mt-[20px] m-12 p-10 border border-indigo-300 rounded-lg shadow-xl">
          <div className="mb-5">
            <NavLink to={"/view-data"}>
              <Button>View Data</Button>
            </NavLink>
          </div>
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
    </>
  );
};

export default Create;
