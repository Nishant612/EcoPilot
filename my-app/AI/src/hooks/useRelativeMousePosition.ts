import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function useRelativeMousePosition(
  to: React.RefObject<HTMLElement>
) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!to.current) return;
      const { top, left } = to.current?.getBoundingClientRect();
      mouseX.set(e.x - left);
      mouseY.set(e.y - left);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return [mouseX, mouseY];
}
