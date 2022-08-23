import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./ErrorPage.css";

const ErrorPage = () => {
  const [loading, setLoading] = React.useState(false);//na pocetok true ili false,posle sto ti treba

  React.useEffect(() => {//Hooks
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (//Ternary operator
    <div className="error">
      {loading ? (
        <ClipLoader size={150} color={"#c22727"} loading={loading} />
      ) : (
        <>
          <div className="error-message">
            <div className="error">
              <p>"Ups! Something went wrong..."</p>
              <Link to="/home">
                <FaHome className="home-button" />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ErrorPage;
