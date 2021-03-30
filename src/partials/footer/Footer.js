
import { Link } from 'react-router-dom';
import Brand from 'partials/brand';
import './Footer.scss';

/**
 * Footer Component
 */

function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Brand colour="#fff" />
                        <div className="footerDesc">
                            <span>
                                iFarm brings smile to the faces of Farmers by bringing their products to
                                the public with ease and at no cost, and brings smile to the people's face
                                by giving them fresh produce straight from the farm.
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footerHeader">
                            <h4>Quick Links</h4>
                        </div>
                        <div className="footerLink">
                            <ul>
                                <li><Link to="/category/products">Products</Link></li>
                                <li><Link to="/ifarm/farms">Farms</Link></li>
                                <li><Link to="/ifarm/about">About</Link></li>
                                <li><Link to="/ifarm/services">Services</Link></li>
                                <li><Link to="/auth/login">Account</Link></li>
                                <li><Link to="/ifarm/terms-and-condition">Terms and Conditions</Link></li>
                                <li><Link to="/greenmoney">GreenMoney</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footerHeader">
                            <h4>Contact</h4>
                        </div>
                        <div className="footerLink">
                            <p><b>Head Office:</b><br /> 
                                33, Femi Alpha Street, Command, Ipaja, Lagos State.
                            </p>
                            <p><b>Branch:</b><br />
                                17, Igbogila Avenue, Ayetoro, Itele, Ogun State.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footerHeader">
                            <h4>Partners</h4>
                        </div>
                        <div className="footerLink d-flex justify-content-around">
                            <img alt="" className="img-fluid" src="" />
                            <img alt="" className="img-fluid" src="" />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-5 mx-auto">
                        <div className="copyright text-center">
                            <span className="text-14">Copyright 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer