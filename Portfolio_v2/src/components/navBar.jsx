import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navBar" class="navbar bg-body-tertiary">
      <form class="container-fluid justify-content-end">
        <Link class="btn btn-outline-success me-2" to="/about">
          About Me
        </Link>
        <Link class="btn btn-outline-success me-2" to="/portfolio">
          Portfolio
        </Link>
        <Link class="btn btn-outline-success me-2" >
          Contact
        </Link>
        <Link class="btn btn-outline-success me-2" >
          Resume
        </Link>
      </form>
    </nav>
  );
}

export default NavBar;
