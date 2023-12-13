import { Link } from "react-router-dom";
import  { useState } from "react";
import { CarriTo } from "./carrito";

    const Navbar = () => {
            const [isMenuOpen, setMenuOpen] = useState(false);

            const toggleMenu = () => {
            setMenuOpen(!isMenuOpen);
            
            };

    return (
        <div className={`contenedor-header ${isMenuOpen && 'open'}`}>
            <header>
                <nav>
                    
                </nav>
                <div className={`overlay ${isMenuOpen ? "open" : ""}`}></div>
                <button className="burger" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-bars' : 'fa-close'}`}></i>
                    
                </button>
                <aside>
                    <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
                    <li>
                        <Link className="menu-link" to="/">
                        Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/productos">
                        Productos
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/productos/Camisetas">
                        Camisetas
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/productos/Zapatillas">
                        Zapatillas
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/productos/Shorts">
                        Shorts
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/contacto">
                        Contacto
                        </Link>
                    </li>
                    <li>
                        <CarriTo />
                    </li>
                    </ul>
                </aside>
            </header>
        </div>

        );
    };

    export default Navbar;
