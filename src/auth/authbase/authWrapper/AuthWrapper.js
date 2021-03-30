import { Link } from 'react-router-dom';
import './AuthWrapper.scss';
import Brand from 'partials/brand';

/**
 * Auth Wrapper Component
 */

function AuthWrapper({
    header,
    children,
    text,
    textlink,
    path,
    textcolor,
    linkcolor
}) {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 mx-auto my-0">
                    <div className="authHeader text-center">
                        <Brand colour="#00796B" />
                    </div>
                    <div className="authFormWrapper p-4 rounded">
                        <div className="d-flex justify-content-between">
                            <h4> {header} </h4>
                            <span style={{ 
                                color: `${textcolor}`
                            }}
                                > 
                                {text} 
                                <Link 
                                    to={path} 
                                    style={{ 
                                        color: `${linkcolor}`,
                                        margin: "0 4px"
                                        }}> 
                                        {textlink} 
                                </Link>
                            </span>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthWrapper