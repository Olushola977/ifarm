import { Link } from 'react-router-dom';

/**
 * Cart Icon
 */

const Cart = ({cartlink, count}) => {

    return (
        <div className="cart mr-4 position-relative">
            <span className="cartCounter"> {count} </span>
            {cartlink ? <Link to={cartlink}>Cart</Link> : ""}
        </div>
    )
}

export default Cart