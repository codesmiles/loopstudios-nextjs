import Link from "next/link";
const SeeAll = ({
  cssData = { font: "1rem", padding: { y: "0.25rem", x: "2.5rem" } },
}) => {
  return (
    <Link href="/">
      <a
        className="font-alata uppercase tracking-widest"
        style={{
          fontSize: `${cssData.font}`,
        }}
      >
        <div
          className="border-2 border-solid border-gray-500 rounded"
          style={{ padding: `${cssData.padding["y"]} ${cssData.padding["x"]}` }}
        >
          See all
        </div>
      </a>
    </Link>
  );
};

export default SeeAll;
