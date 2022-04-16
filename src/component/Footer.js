import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" footer">
        <h3 id="contact" className="heading">
        Contact
        </h3>
        <p>
          Mobile:<a href="tel:7667263139">7667263139</a>
        </p>

        <p>
          {" "}
          Gmail:{" "}
          <a href="mailto:rohitroushan7634@gmail.com">
          rohitroushan7634@gmail.com
          </a>
        </p>

        <h5>&copy;Copyright 2021@Rohit Roushan Raj <br></br>All rights reserved</h5>

      </div>
    </>
  );
};

export default Footer;
