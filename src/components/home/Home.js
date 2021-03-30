
import ProductWrapper from 'components/productwrapper';
import FarmProducts from 'components/farmproducts';

/**
 * 
 * @returns Home Component
 */

function Home() {
    return (
        <div className="home">
                <ProductWrapper>
                    <FarmProducts />
                </ProductWrapper>
        </div>
    )
}

export default Home