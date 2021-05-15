
import './NotFound.scss';

const NotFound = ({message}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="text-center notfound p-5">
                        <p className="ooops">Oooppss...</p>
                        <p style={{
                            fontSize: "70px"
                        }}>😞</p>
                        <p className="nfpage" style={{
                            fontSize: "20px"
                        }}> {message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound