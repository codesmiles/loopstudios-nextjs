import NavList from "./sub/navList";
import Hamburger from "./sub/hamburger";
import Logo from "./sub/logo";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  //   const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  const hamburgerStyle = {
    display: !show ? "block" : "none",
  };

  return (
    <nav className="w-4/5 my-0 mx-auto flex justify-between pt-14">
      <Logo/>
      <div
        onClick={() => {
          setShow(true);
        }}
        className="lg:hidden"
      >
        <Hamburger />
      </div>
      {/* {show && <NavList />} */}
      <div className="hidden lg:block">
        <NavList />
      </div>
    </nav>
  );
};

export default Navbar;
