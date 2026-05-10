import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="py-4 bg-black border-bottom border-secondary">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="text-white fw-bold m-0 fs-3">CINEVERSE</h1>

        <nav>
          <NavLink to="/" className="nav-link-custom">
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

