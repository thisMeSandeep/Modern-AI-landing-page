import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 text-white border-b border-white/20 md:border-none sticky top-0 z-10 ">

      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>

      <div className="container">
        <div className="flex items-center justify-between md:border border-white/20 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          {/* logo */}
          <div className="border-2 border-white/20 p-2 rounded-lg ">
            <LogoIcon className="size-8" />
          </div>

          {/* navlink */}
          <div className="hidden md:block">
            <nav className="flex gap-8 items-center text-sm">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-all"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-all"
              >
                Developer
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-all"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-all"
              >
                Changelog
              </a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            {/* button */}
            <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
