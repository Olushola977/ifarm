
import './NotFound.scss';

function NotFound() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="text-center notfound p-5">
                        <p className="ooops">Don't be Unfortunate...</p>
                        <p className="nfpage"> The Page you're looking for doesn't exist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound