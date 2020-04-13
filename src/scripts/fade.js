import { gsap } from "gsap";

const targetedElements = Array.from(document.querySelectorAll(".fade"));

export const animationComplete = new Promise((res, rej) => {
  const tl = gsap.timeline({
    onComplete: () => res(console.log("babes")),
  });

  tl.fromTo(
    targetedElements[0],
    { y: 50 },
    { y: 0, duration: 0.6, opacity: 1 }
  );
  tl.fromTo(
    targetedElements[1],
    { y: 25 },
    { y: 0, duration: 0.6, opacity: 1 }
  );
  tl.fromTo(
    targetedElements[2],
    { y: 20 },
    { y: 0, duration: 0.1, opacity: 1 }
  );
  tl.fromTo(
    targetedElements[3],
    { y: 20 },
    { y: 0, duration: 0.1, opacity: 1 }
  );
  tl.fromTo(
    targetedElements[4],
    { y: 20 },
    { y: 0, duration: 0.1, opacity: 1 }
  );
});
