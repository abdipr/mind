"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const PATH_DATA = [
  // A
  { d: "M 24 24 L 1 24 L 24 1 Z" },
  // B
  { d: "M 34 0 L 52 0 A 6 6 0 0 1 52 12 A 6 6 0 0 1 52 24 L 34 24 L 34 0 Z" },
  // D
  { d: "M 68 0 L 80 0 A 12 12 0 0 1 80 24 L 68 24 L 68 0 Z" },
  // I
  { d: "M 102 0 L 112 0 L 112 24 L 102 24 Z" },
];

export const AnimatedLogo = () => {
  const root = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const allPaths = document.querySelectorAll(".logo-path");

      allPaths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fillOpacity: 0,
          autoAlpha: 0,
        });
      });

      const playCycle = (currentClass, nextClass) => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          onComplete: () => {
            gsap.set(currentClass, {
              strokeDashoffset: (i, target) => target.getTotalLength(),
              autoAlpha: 0,
              fillOpacity: 0,
            });
          },
        });

        tl.set(currentClass, { autoAlpha: 1 });

        tl.to(currentClass, {
          strokeDashoffset: 0,
          duration: 1.4,
          stagger: 0.2,
        })
          .to(
            currentClass,
            {
              fillOpacity: 1,
              duration: 0.6,
              stagger: 0.2,
            },
            "<0.8",
          )
          .to({}, { duration: 10 })
          .add("eraseStart")
          .to(
            currentClass,
            {
              strokeDashoffset: (i, target) => -target.getTotalLength(),
              duration: 1.8,
              stagger: 0.2,
              onStart: () => {
                gsap.delayedCall(0.8, () => playCycle(nextClass, currentClass));
              },
            },
            "eraseStart",
          )
          .to(
            currentClass,
            {
              fillOpacity: 0,
              duration: 0.8,
              stagger: 0.2,
            },
            "eraseStart",
          );
      };

      playCycle(".group-1 .logo-path", ".group-2 .logo-path");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="flex items-center">
      <svg
        height="24"
        viewBox="0 0 112 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
        className="h-5 w-auto"
      >
        <g className="group-1">
          {PATH_DATA.map((p, i) => (
            <path
              key={`g1-${i}`}
              d={p.d}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="miter"
              strokeLinecap="square"
              fill="currentColor"
              className="logo-path text-slate-900 dark:text-white"
            />
          ))}
        </g>
        <g className="group-2">
          {PATH_DATA.map((p, i) => (
            <path
              key={`g2-${i}`}
              d={p.d}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="miter"
              strokeLinecap="square"
              fill="currentColor"
              className="logo-path text-slate-900 dark:text-white"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
