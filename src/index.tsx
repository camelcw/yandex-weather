import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MoskovWeatherStore from "./store/MoskovWeatherStore";

export const Context = createContext({});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Context.Provider
    value={{
      moskow: new MoskovWeatherStore(),
    }}
  >
    <App />
  </Context.Provider>
);
