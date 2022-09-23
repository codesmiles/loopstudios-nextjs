import Head from "next/head";
import Navbar from "../components/navBar";
import Header from "../components/headerText";
import InteractiveVR from "../components/interactiveVR";
import OurCreationTitle from "../components/ourCreations";
import OurCreationContent from "../components/OurCreationContent";

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
        <header>
          <Navbar />
          <Header />
        </header>
        <InteractiveVR />
        <OurCreationTitle />
        <OurCreationContent
          contents={[
            [`Deep earth`,"../public/images/desktop/image-deep-earth.jpg"],
            [`Night arcade`],
            [`Soccer team VR`],
            [`The grid`],
            [`From up above VR`,],
            [`Pocket borealis`],
            [`The curiosity`],
            [`Make it fisheye`],
          ]}
        />
      </main>
    </div>
  );
}
