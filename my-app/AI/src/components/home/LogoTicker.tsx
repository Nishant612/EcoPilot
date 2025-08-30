"use client";
import { logos } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoTicker() {
  return (
    <section className="py-20 overflow-x-clip">
      <div className="container ">
        <div className="flex flex-col gap-10 items-center justify-center ">
          <h2 className="text-center">Trusted by top innovative teams</h2>
          <div className="flex-1 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.ul
              initial={{ translateX: "-50%" }}
              whileInView={{ translateX: 0 }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex items-center gap-14 pr-14 flex-none"
            >
              {[...logos, ...logos].map((item, index) => (
                <li key={index} className="flex-none">
                  <Image src={item.src} alt={item.alt} className="h-6 w-auto" />
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
