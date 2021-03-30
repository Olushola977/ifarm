
import './ProductCard.scss';

/**
 * Product Card Component
 */

function ProductCard({column, productImg, children, color}) {
    return (
        <div className={`${column}`} style={{background: `${color}`}} >
            <div className="productCardContainer">
                <div className="imgContainer mx-auto">
                    Hey, image
                </div>
                <div className="productInfo p-3">
                    Hey Info
                </div>
            </div>
        </div>
    )
}

export default ProductCard