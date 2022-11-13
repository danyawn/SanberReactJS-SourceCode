import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import ViewData from "./pages/ViewData";
import { GlobalProvider } from "./context/GlobalContext";
import CreateData from "./pages/CreateData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/view-data" element={<ViewData />} />
            <Route path="/create-data" element={<CreateData />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
