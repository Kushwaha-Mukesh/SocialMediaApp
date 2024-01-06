function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-2">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Create Post
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Profile
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          A site where you can share your thoughts.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
