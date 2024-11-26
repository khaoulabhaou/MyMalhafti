import { useEffect } from "react";
export default function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2500);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-4 text-danger">404 - Page Not Found</h1>
      <p className="lead mb-4">
        Oops! The page you're looking for doesn't exist. Redirecting to the homepage...
      </p>
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
