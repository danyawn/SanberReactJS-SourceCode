import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import ManageData from "./component/ManageData";
import { GlobalProvider } from "./context/GlobalContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage-data" element={<ManageData />} />
            <Route path="/nav" element={<Navbar />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
