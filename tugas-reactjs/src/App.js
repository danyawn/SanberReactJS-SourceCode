import "./App.css";
import Tugas7 from "./tugas/tugas7/tugas7";
import Tugas8 from "./tugas/tugas8/tugas8";
import Tugas9 from "./tugas/tugas9/tugas9";

function App() {
  return (
    <div className="container">
      <Tugas7 />
      <Tugas8 name="Yan Danu Tirta" email="thephantomwarrior02@gmail.com" batch="39" />
      <Tugas9 />
    </div>
  );
}

export default App;
