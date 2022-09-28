import Link from "next/link";
const NavList = ({
  content = ["About", "Careers", "Events", "Products", "Support"],
}) => {
  return (
    <ul className=" md:flex md:justify-start text-white font-alata">
      {content.map((val,i) => (
        <li key={i} className="py-2 md:mr-4 hover:text-[17px] transition-all duration-500 ease-in-out">
          <Link href={`/${val}`}>
          <a >{val}</a>
          </Link>

        </li>
      ))}
    </ul>
  );
};


export default NavList;
