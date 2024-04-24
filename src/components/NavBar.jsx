import { Link } from "react-router-dom"
import CardWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import Logo from "./Logo"

const NavBar = () => {
    return (
        <div className="navBar d-flex container mt-2 ">
            <Link to='/' className="logoContainer">
                <Logo nombre={"Funes Snickers"} />
            </Link>
            <div className="navbarText d-flex ">
                <ul className="flex-row mb-0 d-flex navbar navbarText">
                    <li>
                        <Link to='/productos/nike' className=" navbarLink">Nike</Link>
                    </li>
                    <li>
                        <Link to='/productos/jordan' className="navbarLink">Jordan</Link>
                    </li>
                    <li>
                        <Link to='/productos/converse' className="navbarLink">Converse</Link>
                    </li>
                    <li>
                        <Link to='/productos/adidas' className=" navbarLink">Adidas</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-row d-flex align-items-center box-cart">
                <CardWidget />
            </div>
        </div>
    )
}
export default NavBar