import React from "react";
import { Footer } from "react-materialize";

const Foot = props => (
  <Footer
    copyrights="&copy; 2019 Nomad Gate"
    style={{ backgroundColor: "#000" }}
    links={
      <p>
        Visit <a href="https://nomadgate.com">Nomad Gate</a>
      </p>
    }
  >
    <p className="white-text">
      Forked from{" "}
      <a href="https://github.com/gabrielwr/React-Retirement-Calculator">
        Gabriel Rowe
      </a>
    </p>
  </Footer>
);

export default Foot;
