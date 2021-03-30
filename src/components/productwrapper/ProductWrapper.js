
import './ProductWrapper.scss';

/**
 * Products Component
 */

function Product({ sidebar, children }) {
    return (
        <>
            {sidebar ? (
                <div className="container-fluid my-3">
                    <div className="row">
                        <div className="col-lg-3">
                            {sidebar}
                        </div>
                        <div className="col-lg-9 mx-0 py-4 bgGrey">
                                {children}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-fluid bgGrey my-3">
                    <div className="py-4">{children}</div>
                </div>
            )
            }
        </>

    )
}

export default Product