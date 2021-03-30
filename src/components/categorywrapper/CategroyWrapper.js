
import ProductWrapper from 'components/productwrapper';
import FarmProducts from 'components/farmproducts';
import './CategoryWrapper.scss';

/**
 * Category Wrapper Component
 */

function CategoryWrapper() {
    return (
        <>
            <ProductWrapper sidebar= "sidebar">
                <FarmProducts />
            </ProductWrapper>
        </>
    )
}

export default CategoryWrapper