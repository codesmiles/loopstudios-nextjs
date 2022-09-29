import Link from "next/link";
import ImagesContainer from "./images";
const Logo = (dir) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    return ( 
        <Link href={"/"}>
        <a className="cursor" onClick={scrollToTop}>
        <ImagesContainer dir={"/images/logo.svg"} x={"192"} y={"32"} alt={"logo"}/>
        </a>
          
      </Link>
     );
}
 
export default Logo;