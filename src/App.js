import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PS from "./pages/PS";
import CV from "./pages/CV";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/PS" element={<PS />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;