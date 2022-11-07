import "./App.css";
import { GlobalProvider } from "./context/globalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Create from "./component/createData";
import View from "./component/viewData";
import Navbar from "./component/navbar";

function App() {
  return (
    <>
      <div className="font">
        <BrowserRouter>
          <GlobalProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nav" element={<Navbar />} />
              <Route path="/create-data" element={<Create />} />
              <Route path="/edit-data/:idData" element={<Create />} />
              <Route path="/view-data" element={<View />} />
            </Routes>
          </GlobalProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
