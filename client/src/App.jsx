import React from 'react';
import Home from "./pages/Home.jsx";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts.jsx";
import Register from "./components/Register.jsx";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<MainLayouts />}>
                    <Route index element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
