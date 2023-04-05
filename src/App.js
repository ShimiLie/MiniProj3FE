import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import Add from "./components/Add";
import Update from "./components/Update";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
