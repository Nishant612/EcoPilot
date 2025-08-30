import acme from "@/assets/logo-acme.png";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import quantum from "@/assets/logo-quantum.png";
import echo from "@/assets/logo-echo.png";
import pulse from "@/assets/logo-pulse.png";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

import XIcon from "@/assets/social-x.svg";
import InstaIcon from "@/assets/social-instagram.svg";
import YTIcon from "@/assets/social-youtube.svg";
export const features = [
  {
    icon: "/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
] as const;

export const testimonials = [
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
] as const;

export const navbarItems = [
  "features",
  "developers",
  "pricing",
  "changelog",
] as const;

export const logos = [
  { src: acme, alt: "acme" },
  { src: apex, alt: "apex" },
  { src: celestial, alt: "celestial" },
  { src: quantum, alt: "quantum" },
  { src: echo, alt: "echo" },
  { src: pulse, alt: "pulse" },
] as const;

export const footerLinks = [
  "Features",
  "Developers",
  "Company",
  "Blog",
  "Changelog",
] as const;

export const footerSocails = [XIcon, InstaIcon, YTIcon] as const;
