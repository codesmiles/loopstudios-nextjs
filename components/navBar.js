import NavList from "./sub/navList";
const Navbar = () => {
    return ( 
        <nav className="w-4/5 my-0 mx-auto flex justify-between mt-10 md-20">
        <h1>Loopstudios</h1>
        <NavList/>
        </nav>
     );
}
 
export default Navbar;