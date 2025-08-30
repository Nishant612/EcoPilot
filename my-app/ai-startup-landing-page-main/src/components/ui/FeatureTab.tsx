import { features } from "@/constants";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function FeatureTab({
  tab,
  onClick,
  selected,
}: {
  tab: (typeof features)[number];
  onClick: () => void;
  selected: boolean;
}) {
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent`;
  const ref = useRef<DotLottieCommonPlayer>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const handleHover = () => {
    ref.current?.seek(0);
    ref?.current?.play();
  };
  useEffect(() => {
    if (!parentRef.current || !selected) return;
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = parentRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [selected]);
  return (
    <div
      onClick={onClick}
      ref={parentRef}
      onMouseEnter={handleHover}
      className="border cursor-pointer border-white/15 flex items-center p-2.5 rounded-xl gap-2.5 lg:flex-1 relative"
    >
      {selected && (
        <motion.div
          style={{ maskImage }}
          className=" absolute inset-0 border -m-px rounded-xl border-[#a369ff] "
        />
      )}

      <div className="size-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer ref={ref} src={tab.icon} className="size-5" autoplay />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
}
