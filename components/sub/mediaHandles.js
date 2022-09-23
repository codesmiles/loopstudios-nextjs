const MediaHandles = ({
  links = [
    "/images/icon-facebook.svg",
    `/images/icon-twitter.svg`,
    `/images/icon-pinterest.svg`,
    `/images/icon-instagram.svg`,
  ],
}) => {
  return (
    <ul className="flex justify-center my-6 md:justify-end">
      {links.map((val, i) => (
        <li className="mx-2" key={i}>
        
          <a href="#">
            <img src={val} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MediaHandles;
