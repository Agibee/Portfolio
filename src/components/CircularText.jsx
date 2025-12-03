import { useEffect } from "react";
import { motion as Motion, useAnimation, useMotionValue } from "motion/react";

const getRotationTransition = (duration) => ({
  ease: [0, 0, 1, 1],
  duration,
  repeat: Infinity,
  repeatType: "loop",
});

const CircularText = ({ text, spinDuration = 20, className = "" }) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();

    controls.start({
      rotate: start + 360,
      transition: getRotationTransition(spinDuration),
    });
  }, [spinDuration, text, controls, rotation]);

  return (
    <Motion.div
      className={`m-0 mx-auto rounded-full w-[200px] h-[200px] relative font-black text-center cursor-pointer origin-center ${className}`}
      style={{ rotate: rotation }}
      animate={controls}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;

        return (
          <span
            key={i}
            className="absolute inset-0 inline-block text-2xl"
            style={{
              transform: `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`,
            }}
          >
            {letter}
          </span>
        );
      })}
    </Motion.div>
  );
};

export default CircularText;
