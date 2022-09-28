import {useRouter} from "next/router"
import Head from "next/head";

const OtherPages = () => {
    const router = useRouter()
    const {otherPages=[]} = router.query
    
    if (otherPages.length === 1) {
        return(
            <>
        <Head>
        <title>{otherPages[0]} Page</title>
        <meta name="description" content={`This is the ${otherPages[0]} page`} />
      </Head>
      <h1 className={`text-4xl font-extrabold uppercase`}> {otherPages[0]} page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugiat suscipit blanditiis assumenda nostrum aut. Laudantium, repudiandae magnam porro recusandae labore nobis atque ullam asperiores non deleniti! Non, consequatur obcaecati?</p>
    </>
        )
    }else{

        return (
            <h1>Dummy page</h1>
        );
    }

}
 
export default OtherPages;
