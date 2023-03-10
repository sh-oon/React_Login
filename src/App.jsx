import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Reset } from "styled-reset";

import "./App.css";
import "./tailwind.css";

import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Main from "@/views/Main";

function App() {
  return (
    <Fragment>
      <Reset />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="main" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </Fragment>
  );
}

export default App;
