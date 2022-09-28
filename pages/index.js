import Head from "next/head";
import Navbar from "../components/navBar";
import Header from "../components/headerText";
import InteractiveVR from "../components/interactiveVR";
import OurCreationTitle from "../components/ourCreations";
import OurCreationContent from "../components/ourCreationContent";
import SeeAll from "../components/sub/linkTag";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- displays site properly based on user's device --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <title>Frontend Mentor | Loopstudios landing page</title>
      </Head>
      <main className="text-[15px]">
        <header className="bg-no-repeat bg-cover bg-[url('/images/mobile/image-hero.jpg')] md:bg-[url('/images/desktop/image-hero.jpg')]">
          <div>
            <Navbar />
          </div>
          <Header />
        </header>
        <InteractiveVR />
        <OurCreationTitle />
        <div>
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
          <div className="grid justify-center mb-20 md:hidden">
            <SeeAll
              cssData={{
                font: "1.3rem",
                padding: { y: "0.7rem", x: "3.7rem" },
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
