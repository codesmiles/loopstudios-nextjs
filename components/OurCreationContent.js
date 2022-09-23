const OurCreationContent = ({ contents }) => {
  
  return (
    <div>
      <ul className="w-4/5 my-10 mx-auto grid md:grid-cols-4 justify-center">
      <div className=" p-52 bg-no-repeat bg-cover" style={{backgroundImage:`url('/images/desktop/image-curiousity.jpg')`}}></div>
      {contents.map((val,i) => (
        <li key={i} className="">
          {val[0]}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default OurCreationContent;
