import { useState } from 'react';
import ProductCard from 'components/card/productcard';
import FarmProduce from 'farmproduce/FarmProduce';
import './FarmProduct.scss';
import Slider from "react-slick";
import Button from 'utils/button';
import Modal from 'utils/modal';
import SingleProduct from './singleproduct';

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

    let [display, setDisplay] = useState(false);

    const getProductDetail = (id) => {
        Product.forEach((element) => {
            const prodDetail = element.products.find((prod) => prod.id == id);
            console.log(prodDetail, "prod detail");
            return prodDetail;
        });
    }

    const handleModalContent = (e) => {
        handleModalOpen();
        const id = e.target.id;
        console.log(id, "id");
        const singleProduct = getProductDetail(id);
        console.log(singleProduct, "single product");
    }

    const handleModalOpen = () => {
        setDisplay(display = true);
    }

    const handleModalClose = () => {
        setDisplay(display = false)
    }

    return (
        <>
        {display === true ? (
            <Modal 
                show="show"
                close={handleModalClose}    
            >
                <SingleProduct />
            </Modal>
        ) : ""}
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
                            >
                                <Button
                                    colour="#fff"
                                    name="Pick"
                                    bg="#FF9A14"
                                    id={prodsub.id}
                                    fontsize="14px"
                                    fontweight="700"
                                    width="80%"
                                    mx="mx-auto"
                                    onClick = {handleModalContent}
                                />
                            </ProductCard>
                            )) : ""}
                    </Slider>

                </div>
            )) : ""}
        </>
    )
}

export default FarmProducts