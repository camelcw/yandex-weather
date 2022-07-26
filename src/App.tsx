import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kazan from "./pages/Kazan";
import Main from "./pages/Main";
import Moskow from "./pages/Moskow";
import Peter from "./pages/Peter";
// import '../node_modules/antd/dist/antd.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/moskov" element={<Moskow />} />
          <Route path="/kazan" element={<Kazan />} />
          <Route path="/peter" element={<Peter />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
