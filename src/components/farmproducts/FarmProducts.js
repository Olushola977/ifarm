import { useState, createRef } from 'react';
import ProductCard from 'components/card/productcard';
import FarmProduce from 'farmproduce/FarmProduce';
import './FarmProduct.scss';
import Slider from "react-slick";
import Button from 'utils/button';
import Modal from 'utils/modal';
import SingleProduct from './singleproduct';
import ColorThief from "colorthief";

/**
 * Farm Products Component
 */

const imgRef = createRef();
const Product = FarmProduce;
const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 0.5
};


function FarmProducts() {

    let [display, setDisplay] = useState(false);
    let [singleProduct, setSingleProduct] = useState({});
    let [dominantColor, setDominantColor] = useState('');

    const getProductDetail = (id) => {
        Product.forEach((element) => {
            const prodDetail = element.products;
            const prod = prodDetail.find((prod) => prod.id === id);
            if (prod) {
                setSingleProduct(singleProduct = prod);
            } else {
                return
            }
        });
    }

    const handleModalContent = (e) => {
        handleModalOpen();
        const id = e.target.id;
        getProductDetail(id);
    }

    const handleDominantColor = () => {
        const colorThief = new ColorThief();
        const prodimg = imgRef.current;
        const result = colorThief.getColor(prodimg, 25);
        const hexValue = rgbToHex(result[0], result[1], result[2]);
        setDominantColor(dominantColor = hexValue);
    }

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('');

    const handleModalOpen = () => {
        setDisplay(display = true);
    }

    const handleModalClose = () => {
        setDisplay(display = false)
    }

    return (
        <>
            {display === true && singleProduct !== 0 ? (
                <Modal
                    show="show"
                    close={handleModalClose}
                >
                    <SingleProduct
                        title={singleProduct.productName}
                        productImage={singleProduct.productImg}
                        imageref={imgRef}
                        onload={handleDominantColor}
                        buttonbg={dominantColor}
                    />
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
                                    onClick={handleModalContent}
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