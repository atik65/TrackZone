import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      {/* <p>Sorry, an unexpected error has occurred.</p> */}
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
        <h2>
          {error.status} {error.data}
        </h2>
      </p>
    </div>
  );
};

export default Error;
