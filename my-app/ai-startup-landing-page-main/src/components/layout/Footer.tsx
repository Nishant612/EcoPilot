import LogoIcon from "@/assets/logo.svg";
import { footerLinks, footerSocails } from "@/constants";

export default function Footer() {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:w-full gap-8">
          <div className="flex items-center  gap-2">
            <LogoIcon />
            <div className="font-medium">AI SEO</div>
          </div>
          <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-7 text-white/70 text-xs md:text-sm">
            {footerLinks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul className="flex gap-5 items-center text-white/40">
            {footerSocails.map((Item, index) => (
              <li key={index}>
                <Item />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
