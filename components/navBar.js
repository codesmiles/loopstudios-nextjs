import NavList from "./sub/navList";
import Hamburger from "./sub/hamburger";
import Logo from "./sub/logo";

const Navbar = () => {
  return (
    <nav className="w-4/5 my-0 mx-auto flex justify-between pt-14">
      <div>
        <Logo />
      </div>

      <div>
        <div className="lg:hidden">
          <Hamburger />
        </div>

        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>

      {/* <div>
        <div>
        //HEAD
          <Logo />
          <img src="/images/icon-close.svg" alt="" />
        </div>
        <div>
        BODY
          <NavList />
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
