
import Button from 'utils/button';
import './SingleProduct.scss';


/**
 * Single Product Component
 */

function SingleProduct({
    title,
    productImage,
    onload,
    imageref,
    dynamicbg,
    price,
    productDesc,
    productStatus,
    handleAddToCart,
    buttonId
}) {
    return (
        <div className="modal-body">
            <div className="row">
                <div className="col-lg-6">
                    <div className="productImage">
                        <img
                            crossOrigin={"anonymous"}
                            ref={imageref}
                            alt="" id="productImgDom"
                            className="img-fluid"
                            onLoad={onload}
                            src={productImage}
                        />
                    </div>
                    <div className="productDetails">
                        <h5> {title} </h5>
                        <div className="productPrice d-flex justify-content-between">
                            <div className="d-flex">
                                <del
                                    className="pricePrefix"
                                    style={{ textDecorationStyle: 'double' }}>
                                    N
                                    </del>
                                <p> {price} </p>
                            </div>
                            <div className="productStatus textOrange">
                                {productStatus}
                            </div>
                        </div>
                        <div className="productDesc">
                            <div style={{ width: "max-content" }}>
                                <h6 style={{ marginBottom: "2px" }}>Description</h6>
                                <span style={{
                                    background: `${dynamicbg}`,
                                    width: "50%",
                                    height: "2px",
                                    display: "block"
                                }}
                                ></span>
                            </div>
                            <div style={{ marginTop: "10px", fontSize: "15px"}}>
                                <p> {productDesc} </p>
                            </div>
                        </div>
                    </div>
                    <div className="addToCart">
                        <Button
                            name="Add To Cart"
                            id={buttonId}
                            bg={`${dynamicbg}`}
                            colour={dynamicbg && dynamicbg === "#fff" ? "#000" : "#fff"}
                            fontweight="600"
                            fontsize="14px"
                            onClick={handleAddToCart}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="reviews">
                        <div className="header"><h6>Reviews</h6></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct