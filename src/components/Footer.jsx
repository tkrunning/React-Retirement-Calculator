import React from "react";
import { Footer } from "react-materialize";

const footStyle = {
  color: "#999"
};

const Foot = props => (
  <Footer
    copyrights="&copy; 2019 Nomad Gate"
    style={{ backgroundColor: "#000" }}
    links={
      <p style={footStyle}>
        Visit <a href="https://nomadgate.com">Nomad Gate</a>
      </p>
    }
  >
    <p style={footStyle}>
      Forked from{" "}
      <a href="https://github.com/gabrielwr/React-Retirement-Calculator">
        Gabriel Rowe
      </a>
    </p>
  </Footer>
);

export default Foot;
