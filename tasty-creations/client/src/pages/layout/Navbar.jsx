import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="App-header">
      <div className="navbar">
        <div className="App-logo">
          <a href="/home">Tasty Creations</a>
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/external-source">External Source</a>
          </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>
            <a href="/account">My Account</a>
          </li>
          <li>
            <a href="/">Log In</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
