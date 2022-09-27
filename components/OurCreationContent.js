import Image from "next/image";
import SeeAll from "./sub/seeAll";
import Link from "next/link";
// could have use state with use effect hook
// to get this sorted but i will just have to
// manually style the grid which is almost the same as duplicated

const OurCreationContent = ({ contents }) => {
  return (
    <div className="pb-16">
      <ul className="w-4/5 my-10 mx-auto grid gap-4 justify-center md:w-4/5 md:grid-cols-4 font-josefin">
        {contents.map((val, i) => (
          <li key={i}>
            <Link href="#">
              <a>
                <div
                  className="hidden md:block bg-no-repeat bg-cover h-full w-full pt-80 pb-10 pl-5 text-white"
                  style={{ backgroundImage: `url(${val[1]})` }}
                >
                  <p className="text-white uppercase md:text-2xl lg:text-3xl font-josefin ">
                    {val[0]}
                  </p>
                </div>
              </a>
            </Link>

            <div className="relative w-full md:hidden">
              <Link href="#">
                <a>
                  <img src={val[2]} className="" alt="" />
                  <p className="absolute text-white top-16 left-5 text-2xl uppercase font-light">
                    {val[0]}
                  </p>
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="grid justify-center mb-20 md:hidden">
        <SeeAll
          cssData={{ font: "1.3rem", padding: { y: "0.7rem", x: "3.7rem" } }}
        />
      </div>
    </div>
  );
};

export default OurCreationContent;
