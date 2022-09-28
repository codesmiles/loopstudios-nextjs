import Link from "next/link";
import Image from "next/image";
// could have use state with use effect hook
// to get this sorted but i will just have to
// manually style the grid which is almost the same as duplicated

const OurCreationContent = ({ contents }) => {
  return (
    <div className="">
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

          {/* MOBILE */}
            <div className="relative w-full md:hidden -z-10">
              <Link href="#">
                <a>
                  <Image src={val[2]} width="500" height="200" alt={val[0]} />
                  <p className="absolute text-white top-16 left-5 text-2xl uppercase font-light ">
                    {val[0]}
                  </p>
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default OurCreationContent;
