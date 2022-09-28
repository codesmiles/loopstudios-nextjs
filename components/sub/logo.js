import Link from "next/link";
import Image from "next/image";
const Logo = ({index=-2}) => {
    return ( 
        <Link href="/">
          <div className="">
        <a >
            <Image src={"/images/logo.svg"} width="192" height="32" alt="logo"/>
        </a>
          </div>
      </Link>
     );
}
 
export default Logo;