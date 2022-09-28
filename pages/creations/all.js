import OurCreationContent from "../../components/ourCreationContent";
import ToTheTop from "../../components/scroll/toTheTop";
import LinkTag from "../../components/sub/linkTag";

const AllContent = () => {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="my-10 flex justify-center md:justify-end">
          <LinkTag text="go back" url="/" />
        </div>
        <OurCreationContent
          contents={[
            [
              `Deep earth`,
              `/images/desktop/image-deep-earth.jpg`,
              `/images/mobile/image-deep-earth.jpg`,
            ],
            [
              `Night arcade`,
              `/images/desktop/image-night-arcade.jpg`,
              `/images/mobile/image-night-arcade.jpg`,
            ],
            [
              `Soccer team VR`,
              `/images/desktop/image-soccer-team.jpg`,
              `/images/mobile/image-soccer-team.jpg`,
            ],
            [
              `The grid`,
              `/images/desktop/image-grid.jpg`,
              `/images/mobile/image-grid.jpg`,
            ],
            [
              `From up above VR`,
              `/images/desktop/image-from-above.jpg`,
              `/images/mobile/image-from-above.jpg`,
            ],
            [
              `Pocket borealis`,
              `/images/desktop/image-pocket-borealis.jpg`,
              `/images/mobile/image-pocket-borealis.jpg`,
            ],
            [
              `The curiosity`,
              `/images/desktop/image-curiosity.jpg`,
              `/images/mobile/image-curiosity.jpg`,
            ],
            [
              `Make it fisheye`,
              `/images/desktop/image-fisheye.jpg`,
              `/images/mobile/image-fisheye.jpg`,
            ],
          ]}
        />
      </div>
      <ToTheTop />
    </>
  );
};

export default AllContent;
