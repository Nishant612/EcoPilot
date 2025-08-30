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
    icon: "🚦",
    title: " Real-time Navigation",
    description: "Live traffic + AI route optimization for faster trips.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "🅿️",
    title: "Smart Parking",
    description: "Find available parking spots instantly with live updates.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "🌱",
    title: "Eco-Friendly Routes",
    description: "Choose greener, fuel-efficient routes to cut emissions.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "⚡",
     title: "EV Charging Stations",
    description: "Locate the nearest charging stations with live availability.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "🤝",
    title: "Carpool Matching",
    description: "Share rides with others to save money and reduce congestion.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "📊",
    title: "Smart Insights",
    description: "Get personalized driving insights, trip stats, and CO₂ savings.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
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
  " Home  ",
  "   Features   ",
  "   About  ",
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
  "Real-time Navigation",
   "Smart Parking",
   "Eco-Friendly Routes",
   "About Us"
  
] as const;


export const footerSocails = [XIcon, InstaIcon, YTIcon] as const;
