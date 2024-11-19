// import { useEffect, useState, useRef } from 'react';

// type props = {
//   targetNumber: number,
//   text:string,
//   symbol?:string
// }
// const Counter = ({ targetNumber, text, symbol }: props) => {
//   const [count, setCount] = useState(0);
//   const counterRef = useRef(null);

//   const handleCount = (entries: IntersectionObserverEntry[]) => {
//     if (entries[0].isIntersecting && count === 0) {
//       let currentCount = 0;
//       const interval = setInterval(() => {
//         if (currentCount < targetNumber) {
//           currentCount += 1;
//           setCount(currentCount);
//         } else {
//           clearInterval(interval);
//         }
//       }, 100); // Adjust speed here
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleCount);
//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => {
//       if (counterRef.current) {
//         observer.unobserve(counterRef.current);
//       }
//     };
//   }, [counterRef, targetNumber]); // Add targetNumber to dependencies

//   return (
//     <div ref={counterRef} className="text-center">
//       <h1 className="text-4xl font-bold">{count}{symbol}</h1>
//       <p>{text}</p>
//     </div>
//   );
// };

// export default Counter;


"use client";
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  from: number;
  to: number;
  Component?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  className?: string;
  suffix?: string;
  noOfDecimalPoints?: number;
  duration?: number;
};

const Counter = ({
  from,
  to,
  Component = "p",
  className,
  suffix,
  noOfDecimalPoints = 0,
  duration = 1,
}: CounterProps) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const inView = useInView(nodeRef);

  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration,
      type: "tween",
      onUpdate(value) {
        node.textContent = `${value.toFixed(noOfDecimalPoints)}${
          suffix ? suffix : ""
        }`;
      },
      ease: "easeInOut",
    });

    return () => controls.stop();
  }, [from, to, inView, suffix, noOfDecimalPoints, duration]);

  return <Component className={className} ref={nodeRef} />;
};

export default Counter;

