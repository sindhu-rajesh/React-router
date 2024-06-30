import React from "react";
import Card from "../Components/Card";

const Allcourses = ({ data }) => {
  return (
    <div>
      <h1 className="text-center mt-5 pt-5">All Courses</h1>
      <div className="container-fluid">
        <div className="row justify-content-around">
          {data && data.map((element, index) => {
            return <Card key={index} element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

Allcourses.propTypes = {
  data: PropTypes.array.isRequired
};

export default Allcourses;