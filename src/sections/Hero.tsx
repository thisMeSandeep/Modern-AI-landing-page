"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="text-white h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY: backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"></div>
      {/* planet */}
      <div className="absolute h-64 w-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white_0%,rgb(184,148,255)_37.7%,rgb(24,0,66)_100%)] shadow-[inset_-20px_-20px_50px_rgba(255,255,255,0.5),inset_-20px_-20px_80px_rgba(255,255,255,0.1),0px_0px_50px_rgb(140,69,255)]"></div>

      {/* first ring */}
      <motion.div
        className="absolute size-[344px] md:size-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute w-2 h-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 bg-white rounded-full "></div>
        <div className="absolute w-2 h-2 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2  bg-white rounded-full "></div>
        <div className="absolute w-5 h-5 left-full top-1/2 -translate-x-1/2 -translate-y-1/2  border border-white inline-flex items-center justify-center rounded-full ">
          <div className=" w-2 h-2 bg-white rounded-full "></div>
        </div>
      </motion.div>

      {/* second ring */}
      <motion.div
        className="absolute size-[444px] md:size-[780px] border border-dashed opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      {/* third ring */}
      <motion.div
        className="absolute size-[544px] md:size-[980px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute w-2 h-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 bg-white rounded-full "></div>
        <div className="absolute w-2 h-2 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2  bg-white rounded-full "></div>
      </motion.div>

      {/* content */}
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center tracking-tight leading-7">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-8">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
