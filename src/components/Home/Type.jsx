import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Backend Specialist | Mongo, Express, Node",
          "Passionate About Startups",
          "Turning Ideas into Code", 
          "Problem Solver",
          "Coding Enthusiast",
          "Electronics & Communication Engineer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
