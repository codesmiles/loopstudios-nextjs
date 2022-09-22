import FootSection1 from "./sub/footSection1";
// import FootSection2 from "./sub/footSection2";
import NavList from "./sub/navList";

const Footer = () => {
  return (
    <footer className="my-0 mx-auto bg-black text-white py-10 md:py-5">
      <div className="text-center w-4/5 my-0 mx-auto md:flex md:justify-between">
        <div>
          <div className=" my-5 md:my-4">
            <img src="images/logo.svg" className="my-0 mx-auto md:mx-0" alt="" />
          </div>
          <NavList />
        </div>
        <FootSection1 />
      </div>
    </footer>
  );
};

export default Footer;
