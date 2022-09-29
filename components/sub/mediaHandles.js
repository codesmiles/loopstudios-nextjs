import ImagesContainer from "./images";
const MediaHandles = ({
  links = [
    [`/images/icon-facebook.svg`, "24", "24"],
    [`/images/icon-twitter.svg`, "24", "20"],
    [`/images/icon-pinterest.svg`, "24", "24"],
    [`/images/icon-instagram.svg`, "24", "24"],
  ],
}) => {
  return (
    <ul className="flex justify-center my-6 md:justify-end">
      {links.map((val, i) => (
        <li className="mx-2" key={i}>
          <a href="#">
            <ImagesContainer
              dir={val[0]}
              x={val[1]}
              y={val[2]}
              alt={val[0].split("-")[1].split(".")[0]}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MediaHandles;
