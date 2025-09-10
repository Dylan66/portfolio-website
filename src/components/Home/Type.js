import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I specialize in",
          "Python, FastAPI, Django, Flask",
          "AWS Solutions Architecting",
          "DevOps",
          "Golang",
          "JavaScript, React, Nextjs",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
