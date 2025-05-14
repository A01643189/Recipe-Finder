import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="logo">🍽️ RecipeFinder</div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    ☰
                </button>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link to="/search" onClick={() => setMenuOpen(false)}>
                        Search
                    </Link>
                    <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                        Dashboard
                    </Link>
                    <Link to="/profile" onClick={() => setMenuOpen(false)}>
                        Profile
                    </Link>
                </div>
            </div>
        </nav>
    );
}
