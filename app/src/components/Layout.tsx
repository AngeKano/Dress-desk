import React from "react";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <div>
      <p>Ange Kano Ette</p>
      <ul>
        <li>
          <a href="/Login">Login</a>
        </li>
        <li>
          <a href="/Dashboard">Dashboard</a>
        </li>
        {/* Commande */}
        <li>
          <a href="/AddCommand">AddCommand</a>
        </li>
        <li>
          <a href="/DetailCommand">DetailCommand</a>
        </li>
        {/* Employes */}
        <li>
          <a href="/EmpList">Employe Liste</a>
        </li>
        <li>
          <a href="/AddEmp">Employe Add</a>
        </li>
        <li>
          <a href="/DetailEmp">Details Employe</a>
        </li>
        {/* Task */}
        <li>
          <a href="/TaskList">Task Liste</a>
        </li>
        <li>
          <a href="/TaskAttrib">Task Attribute</a>
        </li>
      </ul>

      <img src="/Backimage/Bg.png" alt="" />
      <Outlet />
    </div>
  );
};
