const Navbar = () => {
  return (
    <div className="navbar w-full bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Akbennett</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-0 bg-base-100 rounded-t-none">
                <li>
                  <a>Eye Tests</a>
                </li>
                <li>
                  <a>Spectacles</a>
                </li>
                <li>
                  <a>Contact Lenses</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
