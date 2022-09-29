import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../components/navBar";

const OtherPages = () => {
  const router = useRouter();
  const { otherPages = [] } = router.query;
  const pages = ["about", "careers", "events", "products", "support"];

  if (otherPages.length === 1) {
    if (pages.includes(otherPages[0].toLowerCase())) {
      return (
        <>
          <Head>
            <title>{otherPages[0]} Page</title>
            <meta
              name="description"
              content={`This is the ${otherPages[0]} page`}
            />
          </Head>
            <div className={`bg-gradient-to-r from-blue-600 via-red-500 to-blue-500 pl-4`}>
            <Navbar/>
            </div>
          <main className={`w-4/5 mx-auto mt-10`}>
            <h1
              className={`text-4xl text-center font-bold uppercase font-alata my-10`}
            >
              {" "}
              {otherPages[0]} page
            </h1>
            <p className={`py-10`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              fugiat suscipit blanditiis assumenda nostrum aut. Laudantium,
              repudiandae magnam porro recusandae labore nobis atque ullam
              asperiores non deleniti! Non, consequatur obcaecati?
            </p>
          </main>
        </>
      );
    }
  } else {
    return <h1>Dummy page</h1>;
  }
};

export default OtherPages;
