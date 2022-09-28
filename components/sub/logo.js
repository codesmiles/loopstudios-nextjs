import Link from "next/link";
import Image from "next/image";
const Logo = () => {
    return ( 
        <Link href="/">
        <a className="">
          <div>
            <Image src={"/images/logo.svg"} width="192" height="32" />
          </div>
        </a>
      </Link>
     );
}
 
export default Logo;