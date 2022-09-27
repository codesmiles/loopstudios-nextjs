import SeeAll from "./sub/seeAll";

const OurCreationTitle = () => {
  return (
    <div className="w-4/5 my-10 mx-auto text-center md:flex md:justify-between ">
      <h1 className="text-4xl uppercase font-light md:text-3xl">
        Our creations
      </h1>
      <div className="hidden md:block">
        <SeeAll />
      </div>
    </div>
  );
};

export default OurCreationTitle;
