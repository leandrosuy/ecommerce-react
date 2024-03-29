import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <Link className="logo" to="/">Ecommerce</Link>
            <Link className="carrinho" to="/carrinho">Carrinho</Link>
        </header>
    )
}