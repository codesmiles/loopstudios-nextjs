const NavList = ({
  content = ["About", "Career", "Events", "Products", "Support"],
}) => {
  return (
    <ul>
      {content.map((val) => (
        <li>{val}</li>
      ))}
    </ul>
  );
};

export default NavList;
