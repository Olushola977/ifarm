
import './ProductCard.scss';

/**
 * Product Card Component
 */

function ProductCard({
    column,
    productImg,
    productName,
    mx,
    color
}) {
    return (
        <div className={`${column} ${mx}`} style={{ background: `${color}` }} >
            <div className="productCardContainer">
                <div className="imgContainer">
                    <img alt="" style={{ height: "120px" }} className="img-fluid mx-auto" src={productImg} />
                </div>
                <div className="productInfo p-3">
                    <p> {productName} </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard