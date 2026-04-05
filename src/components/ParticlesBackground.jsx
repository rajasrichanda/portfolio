import { useEffect, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = ({ isDark }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      particles: {
        color: {
          value: isDark ? '#8b5cf6' : '#14b8a6',
        },
        links: {
          color: isDark ? '#8b5cf6' : '#14b8a6',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    [isDark]
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
