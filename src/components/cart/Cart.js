import NotFound from 'components/notfound';
import { useEffect, useState } from 'react';
import Button from 'utils/button';
import './Cart.scss';

/**
 * Cart Component
 */

const Cart = () => {

    let [userCart, setUserCart] = useState([]);

    useEffect(() => {
        setUserCart(userCart = JSON.parse(localStorage.getItem('userCart')));
        console.log(userCart, "usercart cart");
    }, [])

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-9">
                    <div className="cart">
                        <h5>Cart</h5>
                        <div style={{
                            background: "#80808017",
                            padding: "3px 5px"
                        }}>

                            {userCart ? userCart.map(obj => (
                                <div key={obj.id}
                                    className="card"
                                    style={{ margin: "10px 0" }}
                                >
                                    <div className="card-body d-flex">
                                        <div className="cartProductImg">
                                            <img
                                                alt=""
                                                src={obj.productImg}
                                                className="img-fluid"
                                                style={{ height: "100px", background: "5px solid #556b2f" }}
                                            />
                                        </div>
                                        <div className="cartProductInfo px-2"
                                            style={{
                                                width: "50%"
                                            }}
                                        >
                                            <h5 style={{
                                                fontSize: "1.1rem"
                                            }}> {obj.productName} </h5>
                                            <p className="text-truncate"
                                                style={{ maxWidth: "100%", whiteSpace: "pre" }}
                                            > {obj.productDesc} </p>
                                            <span> <del>N</del> {obj.productPrice} </span>
                                        </div>
                                        <div className="text-center mx-auto"> 
                                            Qty
                                            <p>{obj.productQty}</p> 
                                        </div>
                                        <div
                                            className="counter"
                                            style={{
                                                borderRadius: "25px",
                                                padding: "7px 2px",
                                                width: "50px",
                                                border: "1px solid #000",
                                                textAlign: "center",
                                                marginLeft: "auto",
                                                fontWeight: "700",
                                                fontSize: "17px"
                                            }}>
                                            <p style={{
                                                borderBottom: "0.3px solid rgba(0,0,0,0.2)"
                                            }}>+</p>
                                            <input
                                                style={{
                                                    textAlign: "center",
                                                }}
                                                type="num" defaultValue="1" />
                                            <p style={{
                                                borderTop: "0.3px solid rgba(0,0,0,0.2)"
                                            }}>-</p>
                                        </div>
                                    </div>
                                </div>
                            )) : <NotFound message="Cart is Empty" />}
                            {userCart && (
                                <Button
                                    name="Update Cart"
                                    bg="#000"
                                    colour="#fff"
                                    fontweight="700"
                                    width="40%"
                                    mx="ml-auto"
                                    additionalClass="my-3"
                                />
                            )}
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="sonsored">
                        <h5>Sponsored</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="featured">
                        <h5>Featured</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="youMayLike">
                        <h5>You May Like</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart