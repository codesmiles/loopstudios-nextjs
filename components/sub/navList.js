const NavList = ({
  content = ["About", "Career", "Events", "Products", "Support"],
}) => {
  return (
    <ul className="md:flex md:justify-start">
      {content.map((val) => (
        <li className="py-2 md:mr-4">
          <a href="#">{val}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
