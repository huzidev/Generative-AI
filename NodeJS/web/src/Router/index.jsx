import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/Header";
import NotFoundPage from "../pages/NotFound";
import { routes } from "./routes";

export default function index() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {routes.map(({ Component, ...route }) => {
            return (
              <Route
                {...route}
                key={route.path}
                path={route.path}
                element={<Component />}
              />
            );
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}
