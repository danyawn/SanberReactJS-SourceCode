import React from "react";

export default function Card2(props) {
  return (
    <div className="card">
      <h2>DATA DIRI PESERTA KELAS REACT JS</h2>
      <hr />
      <ul>
        <li>
          {" "}
          <strong>Nama Lengkap</strong> : {props.name}{" "}
        </li>
        <li>
          {" "}
          <strong>Email </strong> : {props.email}{" "}
        </li>
        <li>
          {" "}
          <strong>Batch</strong> : {props.batch}{" "}
        </li>
      </ul>
    </div>
  );
}
