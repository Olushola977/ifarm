
import ProductWrapper from 'components/productwrapper';
import FarmProducts from 'components/farmproducts';
import Banner from './banner';

/**
 * 
 * @returns Home Component
 */

function Home() {
    return (
        <div className="home">
                <ProductWrapper>
                    <Banner />
                    <FarmProducts />
                </ProductWrapper>
        </div>
    )
}

export default Home