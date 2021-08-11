import Navbar from "./MainPage/Navbar"
function Nav(props){
    return(
        <div>
        <Navbar />
        {props.children}
        </div>
    )
}
export default Nav;