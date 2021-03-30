
import { Link } from 'react-router-dom';
import './Brand.scss';

/**
 * Brand Component
 */

function Brand({colour}) {
    return (
        <div className="brand">
            <h4><Link style={{color:`${colour}`}} to="/">i<span>F</span>arm</Link></h4>
        </div>
    )
}

export default Brand