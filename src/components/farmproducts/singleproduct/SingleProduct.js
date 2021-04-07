
import './SingleProduct.scss';

/**
 * Single Product Component
 */

function SingleProduct({title}) {
    return (
        <div className="modal-body">
            <h5> {title} </h5>
        </div>
    )
}

export default SingleProduct