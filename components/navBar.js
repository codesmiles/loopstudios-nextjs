import Image from "next/image";
import NavList from "./sub/navList";
import Hamburger from "./sub/hamburger";
import { useState } from "react";
const Navbar = () => {

  const [show, setShow] = useState(false);
//   const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  const hamburgerStyle = {
    display: !show ? "block" : "none",
  };

  return (
    <nav className="w-4/5 my-0 mx-auto flex justify-between pt-14">
      <Image src={"/images/logo.svg"} width="192" height="32" />
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
