import Link from "next/link";
const NavList = ({
  content = ["About", "Careers", "Events", "Products", "Support"],
}) => {
  return (
    <ul className={` text-white font-alata md:flex uppercase text-lg`}>
      {content.map((val,i) => (
        <li key={i} className={"my-2 mr-4 hover:text-[20px] transition-all duration-500 ease-in-out md:my-0"}>
          <Link href={val}>
          <a>{val}</a>
          </Link>

        </li>
      ))}
    </ul>
  );
};


export default NavList;
