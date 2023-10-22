const ErrorBoundaryTestPage = ({ children }) => {
  throw new Error("Error component");

  return null;
};
export default ErrorBoundaryTestPage;
