import Brand from "partials/brand";
import "./Header.scss";
import { Link } from "react-router-dom";
import Cart from "partials/carticon";
import Button from "utils/button/Button";
import { useState } from "react";

/**
 * Header Component
 */

const Header = () => {
  let [show, setShow] = useState(false);

  const menuopen = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <nav className="header">
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="">
            <Brand colour="#000" />
          </div>
          <div className="ml-auto d-lg-none">
            <Button bg="#000" colour="#fff" name="M" onClick={menuopen} />
          </div>
          {show ? (
            <div className="mbmenu d-lg-none" id="mbmenu">
              <div
                className="" style={{
                  borderBottom: "1px solid rgba(241, 138, 78, 36%)"
                }}
                
              >
                <Button
                  name="X"
                  colour="#f97300"
                  bg="inherit"
                  width="10%"
                  fontsize="20px"
                  fontweight="600"
                  additionalClass="px-0 text-left"
                  onClick={() => setShow((show = false))}
                />
              </div>

              <div className="smnavItem">
                <ul>
                  <li onClick={() => setShow((show = false))}>
                    <Link to="/category/products">Products</Link>
                  </li>
                  <li onClick={() => setShow((show = false))}>
                    {" "}
                    <Link to="/ifarm/farms">Farms</Link>
                  </li>
                  <li onClick={() => setShow((show = false))}>
                    <Link to="/ifarm/about">About</Link>
                  </li>
                  <li onClick={() => setShow((show = false))}>
                    <Link to="/ifarm/services">Services</Link>
                  </li>
                  <li onClick={() => setShow((show = false))}>
                    <Link to="/auth/signup">Sign Up</Link>
                  </li>
                  <li onClick={() => setShow((show = false))}>
                    <Link to="/auth/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="d-none d-lg-flex lgmenu">
            <div className="navItem mx-auto">
              <ul>
                <li>
                  <Link to="/category/products">Products</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/ifarm/farms">Farms</Link>
                </li>
                <li>
                  <Link to="/ifarm/about">About</Link>
                </li>
                <li>
                  <Link to="/ifarm/services">Services</Link>
                </li>
              </ul>
            </div>
            <div className="navItemTwo">
              <div className="authLink d-flex justify-content-end">
                <Cart cartlink="/ifarm/cart" count="1" />
                <div className="authLinkLogin">
                  <Link to="/auth/login">Login</Link>
                </div>
                <span className="ml-2 pr-2">/</span>
                <div className="authLinkSignup">
                  <Link to="/auth/signup">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
