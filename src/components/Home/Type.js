import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Software Engineer competent in",
          "Python, FastAPI, Django, Flask",
          "AWS Solutions Architecting",
          "DevOps",
          "Golang",
          "JavaScript, React, Next.js",
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
