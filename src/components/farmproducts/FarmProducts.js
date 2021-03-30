
import ProductCard from 'components/card/productcard';
import FarmProduce from 'farmproduce/FarmProduce';
import './FarmProduct.scss';

/**
 * Farm Products Component
 */

const Product = FarmProduce;

function FarmProducts() {

    return (
        <>
            {Product ? Product.map(prod => (
                <div key={prod.category}>
                    <div className="productTitle">
                        <h4> {prod.category} </h4>
                    </div>
                    <div className="row productLine px-2 my-4">
                        <ProductCard 
                            column="col-lg-2" 
                            color="#fff"
                        />
                    </div>
                </div>
            )) : ""}
        </>
    )
}

export default FarmProducts