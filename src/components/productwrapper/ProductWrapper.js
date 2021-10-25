import Button from 'utils/button';
import './ProductWrapper.scss';

/**
 * Products Component
 */

function Product({ sidebar, children }) {
    return (
        <>
            {sidebar ? (
                <div className="container my-3">
                    <div className="row">
                        <div className="col-lg-3 py-1 py-lg-0" style={{
                            background: "#9b9b9ba6"
                        }}>
                            <div className="d-none d-lg-block">{sidebar}</div>
                            <div className="smsidebar d-lg-none">
                                <Button
                                    name="Menu"
                                    colour="#fff"
                                    bg="green"
                                    fontweight="600"
                                    fontsize="13px"
                                    width="20%"
                                />
                            </div>
                        </div>
                        <div className="">
                        </div>
                        <div className="col-lg-9 mx-0 py-4 bgGrey">
                                {children}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container bgGrey my-3">
                    <div className="py-4">{children}</div>
                </div>
            )
            }
        </>

    )
}

export default Product