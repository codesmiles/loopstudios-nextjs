import { useRouter } from "next/router";
import Head from "next/head";
import Logo from "../components/sub/logo";

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
          <main className={`w-4/5 mx-auto my-24`}>
            <div className={`bg-black py-3 pl-4`}>
            <Logo/>
            </div>
            <h1
              className={`text-4xl text-center font-bold uppercase font-alata my-10`}
            >
              {" "}
              {otherPages[0]} page
            </h1>
            <p>
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
