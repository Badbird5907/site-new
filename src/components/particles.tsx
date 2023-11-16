import { loadParticlesRepulseInteraction } from "tsparticles-interaction-particles-repulse";
import { Engine, tsParticles } from "tsparticles-engine";
import { Particles as ReactParticles } from "react-particles";
import { loadFull } from "tsparticles";
import { CSSProperties } from "react";
import colors from "tailwindcss/colors";

export function Particles({ blur = 0 }) {
  async function init(engine: Engine) {
    await loadFull(engine);
    loadParticlesRepulseInteraction(tsParticles);
  }

  const options = {
    detectRetina: true,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: {
            enable: true,
            force: 80,
            smooth: 80,
          },
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0,
          factor: 5,
          speed: 1,
        },
      },
    },
    particles: {
      color: {
        value: colors.blue[500],
      },
      links: {
        enable: true,
        color: {
          value: colors.blue[500],
        },
        distance: 120,
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        random: true,
        speed: 3,
      },
      number: {
        value: 60,
        density: {
          enable: true,
          area: 1000,
        },
      },
      opacity: {
        value: {
          max: 0.8,
          min: 0.1,
        },
        animation: {
          enable: true,
          speed: 0.4,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          max: 10,
          min: 1,
        },
        animation: {
          enable: true,
          speed: 5,
        },
      },
    },
  };

  return (
    <ReactParticles
      style={
        {
          "--tsparticles-blur": blur ? `blur(${blur}px)` : "none",
        } as CSSProperties
      }
      options={options}
      init={init}
    />
  );
}