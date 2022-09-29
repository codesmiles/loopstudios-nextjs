import NavList from "./sub/navList";
import Hamburger from "./sub/hamburger";
import Close from "./sub/close";
import Logo from "./sub/logo";
import { useState,useEffect } from "react";
import {useRouter} from "next/router"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {events} = useRouter();

  const close = () =>{
    isNavOpen 
    ? setIsNavOpen(false) 
    : setIsNavOpen(true);
  }
  useEffect(()=>{
    return ()=>{
      events.off("routeChangeStart",close)
    }
  },[close,events])

  return (
    <nav className="w-4/5 mx-auto flex justify-between py-7">
      <div className="z-20">
        <Logo />
      </div>
      <div className="z-10">
      
        <div>
          {/* mobile */}
          {isNavOpen ? (
            <div
              className={` fixed pl-14 left-0 top-0 pt-40 bg-black w-full h-full  md:bg-transparent md:static md:pl-0 md:pt-2 md:hidden`}
            >
              <NavList />
            </div>
          ) : null}
          {/* ---------------------- */}

          {/* desktop */}
          <div className="hidden md:block pt-2">
            <NavList />
          </div>
          {/* --------------- */}
        </div>

        <div
          className="cursor-pointer md:hidden block "
          onClick={close}
        >
          {isNavOpen ? <Close /> : <Hamburger />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
