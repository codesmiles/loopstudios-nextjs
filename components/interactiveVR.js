const InteractiveVR = () => {
  return (
    <div className="md:relative w-4/5 mt-20 mx-auto">
      <div className=" lg:mb-48 mx-auto lg:w-full">
        <img
          src="../images/mobile/image-interactive.jpg"
          className="lg:hidden"
          alt=""
        />
        <img
          src="../images/desktop/image-interactive.jpg"
          className="hidden lg:block w-3/5"
          alt=""
        />
      </div>
      <div className="text-center pt-16 bg-white lg:px-20 lg:absolute lg:w-3/5 h-full lg:top-36 lg:right-0">
        <h1 className="font-josefin text-4xl uppercase font-light lg:text-left">
          The leader
          in interactive VR
        </h1>
        <p
          className="leading-loose px-2 font-alata font-bold mt-5 pb-10 lg:text-left"
          style={{ color: "hsl(0, 0%, 55%)" }}
        >
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default InteractiveVR;
