import React from "react";
import Card from "../Components/Card";

import React from "react";
import Card from "../Components/Card";
import PropTypes from 'prop-types';

const Datascience = ({ data }) => {
  const datascience = data.filter((ele) => ele.courseName === "datascience");
  return (
    <div>
      <h1 className="text-center mt-5 pt-5">Data Science</h1>
      <div className="container-fluid">
        <div className="row justify-content-around">
          {datascience.map((element, index) => {
            return <Card key={index} element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

Datascience.propTypes = {
  data: PropTypes.array.isRequired
};

export default Datascience;
export default Datascience;