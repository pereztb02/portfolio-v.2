function NavBar() {
  return (
    <nav class="navbar bg-body-tertiary">
      <form class="container-fluid justify-content-start">
        <button class="btn btn-outline-success me-2" type="button">
          About Me
        </button>
        <button class="btn btn-outline-success me-2" type="button">
          Portfolio
        </button>
        <button class="btn btn-outline-success me-2" type="button">
          Contact
        </button>
        <button class="btn btn-outline-success me-2" type="button">
          Resume
        </button>
      </form>
    </nav>
  );
}

export default NavBar;
