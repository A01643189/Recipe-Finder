import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import md5 from "md5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const { user } = useAuth();

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      signOut(auth);
    }
  };

  const fallbackAvatar = `https://www.gravatar.com/avatar/${md5(
    user?.email || ""
  )}?d=identicon`;

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

          <div className="auth-links">
            {user ? (
              <>
                <div className="user-info">
                  <img
                    src={
                      !avatarError && user.photoURL
                        ? user.photoURL
                        : fallbackAvatar
                    }
                    alt="User Avatar"
                    className="avatar"
                    onError={() => setAvatarError(true)}
                  />
                  <span className="welcome-text">
                    {user.displayName || user.email}
                  </span>
                </div>

                <button onClick={handleLogout} className="auth-link">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="auth-link"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="auth-link"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
