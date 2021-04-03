
import ProductCard from 'components/card/productcard';
import FarmProduce from 'farmproduce/FarmProduce';
import './FarmProduct.scss';
import Slider from "react-slick";

/**
 * Farm Products Component
 */

const Product = FarmProduce;
const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 0.5
};

function FarmProducts() {

    return (
        <>
            {Product ? Product.map(prod => (
                <div key={prod.category} className="my-5">
                    <div className="productTitle">
                        <h4> {prod.category} </h4>
                    </div>

                    <Slider {...settings}>

                            {prod.products ? prod.products.map(prodsub => (
                                <ProductCard
                                key={prodsub.title}
                                color="#fff"
                                mx="mx-2"
                                productImg={prodsub.productImg}
                                productName={prodsub.productName}
                            />
                            )) : ""}
                    </Slider>

                </div>
            )) : ""}
        </>
    )
}

export default FarmProducts