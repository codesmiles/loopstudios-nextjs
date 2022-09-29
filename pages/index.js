import Head from "next/head";
import Navbar from "../components/navBar";
import Header from "../components/headerText";
import InteractiveVR from "../components/interactiveVR";
import OurCreationTitle from "../components/ourCreations";
import OurCreationContent from "../components/OurCreationContent";
import SeeAll from "../components/sub/linkTag";
import ToTheTop from "../components/scroll/toTheTop";
import arr from "../components/utils/creationContentArr";

export default function Home() {
  return (
    <div>
      <Head>
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
      <main className="text-[15px] relative">
        <header className="bg-no-repeat bg-cover bg-[url('/images/mobile/image-hero.jpg')] md:bg-[url('/images/desktop/image-hero.jpg')] ">
          <div>
            <Navbar />
          </div>
          <Header />
        </header>
        <InteractiveVR />
        <OurCreationTitle />
        <div>
          <OurCreationContent
            contents={arr}
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
        <ToTheTop/>
      </main>
    </div>
  );
}
