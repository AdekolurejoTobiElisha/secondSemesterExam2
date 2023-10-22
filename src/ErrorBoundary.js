import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  React.useEffect(() => {
    const handleError = (error) => {
      setHasError(true);
      console.error("Error Boundary Caught an Error:", error);
    };
    window.addEventListener("error", handleError);
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    // Render a fallback UI when there's an error
    return <h1>Something went wrong</h1>;
  }

  // Render the children components if there's no error
  return children;
};

export default ErrorBoundary;
