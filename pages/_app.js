import '../styles/globals.css'
import Footer from "../components/footer"
import FootSection2 from "../components/sub/footSection2"
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Component {...pageProps} />
    <Footer/>
    <FootSection2 />
    </> 
    )
}

export default MyApp
