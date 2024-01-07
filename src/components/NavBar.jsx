import CardWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"

const NavBar = () => {
    return (
        <div className="navBar flex-row d-flex container mt-2 justify-content-between">
            <div className="flex-row d-flex ">
                <ItemListContainer greeting={"FunesSnicker"} />
                <ul className="flex-row mb-0 d-flex">
                    <li>
                        <a href="" className="p-3">Nike</a>
                    </li>
                    <li>
                        <a href="" className="p-3">Jordan</a>
                    </li>
                    <li>
                        <a href="" className="p-3">Converse</a>
                    </li>
                    <li>
                        <a href="" className="p-3">Adidas</a>
                    </li>
                    <li>
                        <a href="" className="p-3">Vans</a>
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