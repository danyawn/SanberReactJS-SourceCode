import React from "react";
import { useState } from "react";

const Tugas9 = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <p className="text1"> {count} </p>
      <button className="btn border mt-2 border-slate-600" onClick={handleCount}>
        Tambah
      </button>
      {count > 10 ? "State count sudah lebih dari 10!!" : ""}
    </div>
  );
};

export default Tugas9;
