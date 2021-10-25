import { Farm } from 'farmproduce/ProductImage';
import Slider from "react-slick";

const settings = {
    infinite: false,
    speed: 500,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };

/**
 * Banner Component
 */

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 d-none d-md-block px-0">
                    <div className="card-body pl-0 pt-0">
                        <img src={Farm} className="img-fluid" alt="banner" />
                    </div>
                    <div className="card-body pl-0 pt-0">
                        <img src={Farm} className="img-fluid" alt="banner" />
                    </div>
                </div>
                <div className="col-md-6 px-0">
                    <Slider {...settings}>
                        <img src={Farm} className="img-fluid" alt="banner" />
                    </Slider>
                </div>
                <div className="col-md-3 d-none d-md-block px-0">
                    <div className="card-body pr-0 pt-0">
                        <img src={Farm} className="img-fluid" alt="banner" />
                    </div>
                    <div className="card-body pr-0 pt-0">
                        <img src={Farm} className="img-fluid" alt="banner" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner