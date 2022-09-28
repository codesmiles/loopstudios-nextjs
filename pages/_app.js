import '../styles/globals.css'
import Footer from "../components/footer"
import FootSection2 from "../components/sub/footSection2"
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Component {...pageProps} />
    <div className='w-full '>
    <Footer/>
    <FootSection2 />
    </div>
  
    </> 
    )
}

export default MyApp
