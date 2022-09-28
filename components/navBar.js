import NavList from "./sub/navList";
import Hamburger from "./sub/hamburger";
import Close from "./sub/close";
import Logo from "./sub/logo";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    if (window.innerWidth < 768) {
      isNavOpen ? (
        <div
          className={` absolute pl-14 left-0 top-0 pt-40 bg-black w-full h-full md:bg-transparent md:static md:pl-0 md:pt-2`}
        >
          <NavList />
        </div>
      ) : null;
    }
  };
  return (
    <nav className="w-4/5 mx-auto flex justify-between py-7">
      <div className="z-10">
        <Logo />
      </div>
      <div>
        <div>
          {isNavOpen ? (
            <div
              className={` absolute pl-14 left-0 top-0 pt-40 bg-black w-full h-full md:bg-transparent md:static md:pl-0 md:pt-2 md:hidden`}
            >
              <NavList />
            </div>
          ) : null}

          <div className="hidden md:block pt-2">
            <NavList />
          </div>
        </div>

        <span
          className="cursor-pointer md:hidden block"
          onClick={() => {
            isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
          }}
        >
          {isNavOpen ? <Close /> : <Hamburger />}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
