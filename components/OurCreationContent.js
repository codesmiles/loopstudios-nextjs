const OurCreationContent = ({content}) => {
    //  function HandleList ({content}){
    //     const data = [...content];
    //     return(
    //         <ul>
    //         </ul>
    //     )
    // <HandleList content={["a","b","c"]}/>
    // }
    return ( 
        <div>
          <ul>
             {content.map(val=> <li>{val}</li>)}
          </ul>
        </div>
     );
}
 
export default OurCreationContent;