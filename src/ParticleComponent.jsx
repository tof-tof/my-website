/*eslint-disable import/no-anonymous-default-export*/
import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -10,
    width: "100%",
    height: "100%"
  }}>
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1803.4120608655228
            }
          },
          color: {
            value: "#07045f"
          },
          shape: {
            type: "square",
            stroke: {
              width: 10,
              color: "#fcf9f9"
            },
            polygon: {
              nb_sides: 4
            },
          },
          opacity: {
            value: 0.6008530152163807,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.2,
              sync: false
            }
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 40 ,
              size_min: 1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            color: "#07045f",
            opacity: 0.4687847739990702,
            width: 0.2
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
);
