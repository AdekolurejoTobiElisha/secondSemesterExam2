import "./styles.css";
import React from "react";
import CustomHookPage from "./CustomHookPage";
import NotFoundPage from "./NotFoundPage";
import ErrorBoundaryTestPage from "./ErrorBoundaryTestPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<CustomHookPage />} />
          <Route path="/error-boundary" element={<ErrorBoundaryTestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
