
import Brand from 'partials/brand';
import './Header.scss';
import { Link } from 'react-router-dom';
import Cart from 'partials/carticon';
import { useEffect, useState } from 'react';

/**
 * Header Component
 */


const Header = () => {

    let [cartCount, setCartCount] = useState([]);

    useEffect(() => {
        let usercart = JSON.parse(localStorage.getItem('userCart'));
        console.log(usercart, "header cart");
        if(usercart === null) {
            return;
        } else {
            setCartCount(cartCount = usercart.length);
            console.log(cartCount, "header cartcount")
        }
    }, [cartCount]);

    return (
        <nav className="header">
            <div className="container-fluid">
                <div className="row align-items-center py-3">
                    <div className="col-lg-3">
                        <Brand colour="#000" />
                    </div>
                    <div className="col-lg-5 mx-auto">
                        <div className="navItem">
                            <ul>
                            <li><Link to="/category/products">Products</Link></li>
                            <li> <Link to="/ifarm/farms">Farms</Link></li>
                            <li><Link to="/ifarm/about">About</Link></li>
                            <li><Link to="/ifarm/services">Services</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 ml-auto">
                        <div className="navItemTwo">
                            <div className="authLink d-flex justify-content-center">
                                <Cart
                                    cartlink="/ifarm/cart"
                                />
                                <p> {cartCount} </p>
                                <div className="authLinkLogin">
                                    <Link to="/auth/login">Login</Link>
                                </div>
                                <span className="mx-2">/</span>
                                <div className="authLinkSignup">
                                    <Link to="/auth/signup">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;