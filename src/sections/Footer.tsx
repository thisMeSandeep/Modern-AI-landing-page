import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import Insta from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="text-white py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="size-6" />
            <div className="font-medium">AI Startup landing page</div>
          </div>
         
            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">Features</a>
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">Developers</a>
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">Company</a>
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">Blog</a>
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">Changelog</a>
            </nav>
     
          <div className="flex gap-5 items-center lg:flex-1 lg:justify-end">
            <XSocial  className="text-white/70 hover:text-white transition-all duration-300"/>
            <Insta  className="text-white/70 hover:text-white transition-all duration-300"/>
            <YTSocial  className="text-white/70 hover:text-white transition-all duration-300"/>
          </div>
        </div>
      </div>
    </footer>
  );
};
 