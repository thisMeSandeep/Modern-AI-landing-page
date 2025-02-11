"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="text-white py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl tracking-tighter text-center font-medium">
          Beyond Expectations.
        </h2>
        <p className=" text-lg md:text-xl text-center text-white/70 mt-5 max-w-sm mx-auto tracking-tight">
          Our revolutionary AI SEO tools have transformed our {"client's"}
          strategies.
        </p>

        <div className=" flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%)]">
          <motion.div
            className="flex gap-5 pr-5 flex-none"
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="max-w-xs  md:max-w-md flex-none p-6 md:p-10 rounded-xl border border-white/15 bg-[linear-gradient(to_bottom_left,rgb(148,69,255,0.3),black)]"
              >
                <p className="text-lg md:text-2xl  leading-7 tracking-tight text-left">
                  {item.text}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src={item.avatarImg}
                    alt={item.name}
                    className="size-11 rounded-lg"
                  />
                  <p className="flex flex-col">
                    <span className="">{item.name}</span>
                    <span className="text-sm text-white/50">{item.title}</span>
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
