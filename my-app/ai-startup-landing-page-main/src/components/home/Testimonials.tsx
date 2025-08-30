"use client";

import { testimonials } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Beyond Expectations
        </h2>
        <p className="text-white/70 md:text-xl max-w-sm mx-auto text-lg text-center mt-5 tracking-tight">
          Our revolutionary AI SEO tools have transformed our clients&aops;
          strategy.
        </p>
        <article className="overflow-hidden flex mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.ul
            initial={{ translateX: "-50%" }}
            animate={{ translateX: 0 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-5 pr-5 items-center justify-center flex-none"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <li
                key={index}
                className="border-white/15 flex-none max-w-xs p-6 md:p-10 md:max-w-md border rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]"
              >
                <div className="text-lg md:text-2xl tracking-tight">
                  {item.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <figure className=" relative before:content-[''] before:absolute before:border before:z-10 before:rounded-lg before:border-white/30 before:inset-0 after:mix-blend-soft-light after:content-[''] after:inset-0 after:absolute after:bg-[rgb(140,69,255)]">
                    <Image
                      src={item.avatarImg}
                      alt={item.name}
                      className="size-11 rounded-lg grayscale"
                    />
                  </figure>
                  <div>
                    <div>{item.name}</div>
                    <div className="text-white/50 text-sm">{item.title}</div>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </article>
      </div>
    </section>
  );
}
