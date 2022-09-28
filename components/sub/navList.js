import Link from "next/link";
const NavList = ({
  content = ["About", "Careers", "Events", "Products", "Support"],
}) => {
  return (
    <ul className={` text-white font-josefin md:flex uppercase`}>
      {content.map((val,i) => (
        <li key={i} className="my-2 mr-4 hover:text-[17px] transition-all duration-500 ease-in-out md:my-0">
          <Link href={`/${val}`}>
          <a >{val}</a>
          </Link>

        </li>
      ))}
    </ul>
  );
};


export default NavList;
