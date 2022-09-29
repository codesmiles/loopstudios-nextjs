import Image from "next/image";
const ImagesContainer = ({dir,x,y,alt}) => {
    return ( 
        <Image src={dir} width={x} height={y} alt={alt}/>
     );
}
 
export default ImagesContainer;