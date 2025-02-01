import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const getLinkStyle = (path: string) => ({
    color: "#fff",
    textDecoration: location.pathname === path ? "underline" : "none",
    fontWeight: location.pathname === path ? "bold" : "normal",
  });

  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#1a1a1a",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <li>
          <Link style={getLinkStyle("/")} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link style={getLinkStyle("/counter")} to='/counter'>
            Counter
          </Link>
        </li>
        <li>
          <Link style={getLinkStyle("/pomodoro")} to='/pomodoro'>
            Pomodoro
          </Link>
        </li>
      </ul>
    </nav>
  );
}
