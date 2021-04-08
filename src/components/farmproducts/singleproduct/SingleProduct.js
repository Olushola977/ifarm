
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
    buttonbg
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
                    </div>
                    <div className="addToCart">
                        <Button
                            name="Add To Cart"
                            id="addtocart"
                            bg={`${buttonbg}`}
                            colour="#fff"
                            fontweight="600"
                            fontsize="14px"
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