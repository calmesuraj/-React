import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <p>Please click on the link below to create your credentials</p>
      <Link to="/registration" className="custom-button">
        Sign Up
      </Link>
    </div>
  );
};

export default ErrorPage;
