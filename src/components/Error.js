import React from "react";
import "../style/Error.css";

const Error = ({ error }) => {
  return (
    <>
      {Object.keys(error).length > 0 && (
        <div className="error_container">
          {error.cod.toString() === "401" ? (
            <p className="error_message">Sorry! Something Went Wrong</p>
          ) : error.cod.toString() === "404" ? (
            <p className="error_message">
              City Not Found, Please Enter A Valid City Name
            </p>
          ) : error.cod.toString() === "429" ? (
            <p className="error_message">Too Many Requests</p>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Error;
