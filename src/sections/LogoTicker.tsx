"use client";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";

import Image from "next/image";

const logos = [
  acmeLogo,
  apexLogo,
  celestialLogo,
  quantumLLogo,
  pulseLogo,
  echoLogo,
  acmeLogo,
  apexLogo,
  celestialLogo,
  quantumLLogo,
  pulseLogo,
  echoLogo,
];

export const LogoTicker = () => {
  return (
    <section className="text-white py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex  flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex pr-14 flex-none gap-14 "
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {logos.map((logo, index) => (
                <Image
                  src={logo}
                  key={index}
                  alt="logo"
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
