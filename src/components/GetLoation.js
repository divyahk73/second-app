import React from "react";
function Getlocation() {
  return (
    <div className="ml-3">
      <div className=" row d-flex justify-content-around">
        <input type="text" className="col-6" placeholder="Country" />
        <p className="col-6 " style={{ color: "#2f3282" }}>
          Get Location
        </p>
      </div>
    </div>
  );
}
export default Getlocation;
