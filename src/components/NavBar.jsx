import { Link } from "react-router-dom"
import CardWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import Logo from "./Logo"

const NavBar = () => {
    return (
        <div className="navBar flex-row d-flex container mt-2 justify-content-between">
            <div className="flex-row d-flex ">
                <Link to='/'>
                    <Logo nombre={"Funes Snickers"} />
                </Link>
                <ul className="flex-row mb-0 d-flex">
                    <li>
                        <Link to='/productos/nike' className="p-3">Nike</Link>
                    </li>
                    <li>
                        <Link to='/productos/jordan' className="p-3">Jordan</Link>
                    </li>
                    <li>
                        <Link to='/productos/converse' className="p-3">Converse</Link>
                    </li>
                    <li>
                        <Link to='/productos/adidas' className="p-3">Adidas</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-row d-flex align-items-center">
                <CardWidget />
            </div>
        </div>
    )
}
export default NavBar