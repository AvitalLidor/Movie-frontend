import React from "react";
import { Route, Routes } from "react-router-dom";
import Actors from "../components/admin/Actors";
import Dashboard from "../components/admin/Dashboard";
import Movies from "../components/admin/Movies";
import AdminNavbar from "../components/admin/AdminNavbar";

import NotFound from "../components/NotFound";

export default function AdminNavigator() {
  return (
    <div className="flex">
      <AdminNavbar />
      <div className="flex-1 p-2 max-w-screen-xl">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
