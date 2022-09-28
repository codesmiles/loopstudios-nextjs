import Link from "next/link";
const SeeAll = ({
  cssData = { font: "1rem", padding: { y: "0.25rem", x: "2.5rem" } },
  text = "See all", url="/creations/all"
}) => {
  return (
    <Link href={url}>
      <a
        className={`font-alata uppercase tracking-widest]`}
        style={{
          fontSize: `${cssData.font}`,
        }}
      >
        <div
          className={`border-2 border-solid border-gray-500 rounded hover:bg-black hover:text-white transition duration-500 ease-in-out`}
          style={{ padding: `${cssData.padding["y"]} ${cssData.padding["x"]}` }}
        >
          {text}
        </div>
      </a>
    </Link>
  );
};

export default SeeAll;
