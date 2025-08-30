"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { animate, AnimatePresence, motion, Variants } from "framer-motion";
// compound components

type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | null>(null);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("use the useMenu hook inside the Menu context component");
  }
  return context;
};

const Menu = ({
  children,
  className,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  const [toggle, setToggle] = useState(false);
  const value = { toggle, setToggle };
  useEffect(() => {
    if (window.screen.width >= 768) {
      setToggle(true);
    }
  }, []);
  return (
    <MenuContext.Provider value={value}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  );
};

const MenuButtonToggle = ({
  className,
  children,
  variants,
}: {
  className: string;
  children: React.ReactElement;
  variants: Variants;
}) => {
  const { toggle, setToggle } = useMenu();
  return (
    <motion.button
      animate={toggle ? "open" : "close"}
      variants={variants}
      className={className}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      {cloneElement(children, { toggle })}
    </motion.button>
  );
};

const MenuList = ({
  className,
  children,
  variants,
}: {
  className: string;
  children: React.ReactNode;
  variants: Variants;
}) => {
  const { toggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          initial={"close"}
          animate={"open"}
          exit={"close"}
          variants={variants}
          className={className}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MenuListItem = ({
  className,
  children,
  variants,
  initial,
  animate,
  whileInView,
}: {
  variants: Variants;
  className: string;
  children: React.ReactNode;
  initial?: string;
  animate?: string;
  whileInView?: string;
}) => {
  return (
    <motion.li
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      variants={variants}
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.li>
  );
};

export { Menu, MenuButtonToggle, MenuList, MenuListItem };
