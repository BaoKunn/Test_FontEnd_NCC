import "./style.css"

function NavBar() {
  return (
    <>
      <div className="nav-children">
        <h5 className="text-navbar">Home</h5>
      </div>
      <div className="nav-children">
        <h5 className="text-navbar">Service</h5>
      </div>
      <div className="nav-children">
        <h5 className="text-navbar">News</h5>
      </div>
      <div className="nav-children">
        <h5 className="text-navbar">Blog</h5>
      </div>
      <div className="nav-children">
        <h5 className="text-navbar">Contact</h5>
      </div>
    </>
  );
}

export default NavBar;
