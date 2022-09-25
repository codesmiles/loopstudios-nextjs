import Image from "next/image"
import SeeAll from "./sub/seeAll";
// could have use state with use effect hook 
// to get this sorted but i will just have to 
// manually style the grid which is almost the same as duplicated


const OurCreationContent = ({ contents }) => {
  return (
    <div>
      <ul className="w-full my-10 mx-auto grid gap-4 justify-center md:w-4/5 md:grid-cols-4">
        {contents.map((val, i) => (
          <li key={i}>
            <div
              className="hidden md:block bg-no-repeat bg-cover h-full w-full pt-80 pb-10 pl-5"
              style={{ backgroundImage: `url(${val[1]})` }}
            >
              <p className="text-white uppercase text-2xl font-thin ">{val[0]}</p>
            </div>
            
            <div className="relative w-full md:hidden">
            <Image src={val[2]} className=""  width="350" height="150" alt="" />
            <p className="absolute text-white top-20 left-5 text-2xl uppercase font-light">{val[0]}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="my-0 mx-auto md:hidden">
      <SeeAll/>
      </div>
    </div>
  );
};

export default OurCreationContent;
