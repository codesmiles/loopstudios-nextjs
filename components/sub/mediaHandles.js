import Image from "next/image";
const MediaHandles = ({
  links = [
    [`/images/icon-facebook.svg`,"24", "24",],
    [`/images/icon-twitter.svg`,"24", "20",],
    [`/images/icon-pinterest.svg`,"24", "24",],
    [`/images/icon-instagram.svg`,"24", "24",],
  ],
}) => {
  return (
    <ul className="flex justify-center my-6 md:justify-end">
      {links.map((val, i) => (
        <li className="mx-2" key={i}>
        
          <a href="#">
            <Image src={val[0]} width={`24`} height={`24`} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MediaHandles;
