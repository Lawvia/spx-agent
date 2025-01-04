import React, { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="h-full">
      <Particles
        className="h-full"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            opacity: 0
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#60A5FA"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.3,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            },
            links: {
              enable: true,
              distance: 150,
              color: "#60A5FA",
              opacity: 0.3,
              width: 1
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5
                }
              }
            }
          },
          retina_detect: true
        }}
      />
    </div>
  );
}