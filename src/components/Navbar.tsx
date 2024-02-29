const Navbar = () => {
  return (
    <div className="navbar w-full bg-accent">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">A.K. Bennett</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-2xl px-10">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="text-2xl px-10- bg-base-100 rounded-t-none">
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
