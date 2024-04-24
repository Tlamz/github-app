import React from "react";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import DetailsPage from "./Pages/DetailsPage";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => (
  <Routes>
    <Route path="/github-app/" element={<HomePage />}>
      <Route path="/github-app/details/:id" element={<DetailsPage />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

function App() {
  return <AppRouter />;
}

export default App;
