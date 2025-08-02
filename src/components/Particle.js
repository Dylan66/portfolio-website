import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: window.innerWidth < 600 ? 60 : 160, // reduce count on mobile
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: ["#6C63FF", "#00BFFF", "#8F00FF", "#3F51B5", "#00C9A7"] // theme-aligned purples, blues, teal
          },
          shape: {
            type: ["circle", "triangle", "star"], // multiple shapes
          },
          line_linked: {
            enable: true, // subtle lines between particles
            distance: 150,
            color: "#bdbdbd",
            opacity: 0.08,
            width: 1,
          },
          move: {
            direction: "right",
            speed: 0.5, // increased speed for enhanced user experience
            parallax: true, // enable parallax effect
            parallaxForce: 60,
            parallaxSmooth: 10,
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false,
            },
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onhover: {
              enable: true,
              mode: "repulse", // particles repulse from cursor
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
