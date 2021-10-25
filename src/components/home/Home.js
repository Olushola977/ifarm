
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
            <Banner />
                <ProductWrapper>
                    <FarmProducts home />
                </ProductWrapper>
        </div>
    )
}

export default Home