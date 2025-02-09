import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 text-white border-b border-white/20 md:border-none">
      <div className="container">
        <div className="flex items-center justify-between md:border border-white/20 md:p-2.5 rounded-xl max-w-2xl mx-auto">
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
            <button className="relative px-3 py-2 rounded-lg font-medium text-sm text-white bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8C45FF]">
              <div className="absolute inset-0 ">
                <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="border rounded-lg absolute inset-0 border-white/40  [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>
              <span> Join waitlist</span>
            </button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
