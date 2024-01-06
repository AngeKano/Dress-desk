import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { AuthProvider } from "./Context/AuthContext";
import { Dashboard } from "./pages/Dashboard";
import { AddCommand } from "./pages/commande/AddCommand";
import { DetailCommand } from "./pages/commande/DetailCommand";
import { AddEmp } from "./pages/employes/AddEmp";
import { DetailEmp } from "./pages/employes/DetailEmp";
import { EmpList } from "./pages/employes/EmpList";
import { TaskList } from "./pages/task/TaskList";
import { TaskAttrib } from "./pages/task/TaskAttrib";
import { RequestApi } from "./components/api/RequestApi";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <div className="font-Poppins">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Layout} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            {/* Commande */}
            <Route path="/AddCommand" element={<AddCommand />} />
            <Route path="/DetailCommand" element={<DetailCommand />} />
            {/* Employes */}
            <Route path="/AddEmp" element={<AddEmp />} />
            <Route path="/DetailEmp" element={<DetailEmp />} />
            <Route path="/EmpList" element={<EmpList />} />
            {/* Task */}
            <Route path="/TaskList" element={<TaskList />} />
            <Route path="/TaskAttrib" element={<TaskAttrib />} />
            {/*Api*/}
            <Route path="/Api" element={<RequestApi />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
