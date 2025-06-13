import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="container header">
        <div className="logo">
            <NavLink to="/" className="logo-link"> 
                <h1>Respicy</h1>
            </NavLink>
        </div>

        <nav>
            <ul>
                <NavLink to="/"><li className="nav-items">Home</li></NavLink>
                <NavLink to="/about"><li className="nav-items">About</li></NavLink>
                <NavLink to="/recipes"><li className="nav-items">Recipes</li></NavLink>
                <NavLink to="/contact"><li className="nav-items">Contact</li></NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Header