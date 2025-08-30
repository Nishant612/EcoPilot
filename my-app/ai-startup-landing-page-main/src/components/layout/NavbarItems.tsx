import { navbarItems } from "@/constants";
import { MenuListItem } from "./Menu";
import GradientButton from "../ui/GradientButton";

export default function NavbarItems() {
  return (
    <>
      {navbarItems.map((item, index) => (
        <MenuListItem
          key={index}
          className="text-black capitalize md:text-white/70 md:text-sm"
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 250, damping: 25 },
            },
            close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
          }}
        >
          {item}
        </MenuListItem>
      ))}
      <GradientButton
        className="self-center md:hidden"
        variants={{
          open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 250, damping: 25 },
          },
          close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
        }}
      >
        Join waitlist
      </GradientButton>
    </>
  );
}
