
import './Modal.scss';

/**
 * Modal Component
 */


function Modal({
    show,
    close,
    children
}) {
    
    return (
        <>
            <div className={`modal fade bd-example-modal-lg ${show}`} id="exampleModal" role="dialog" onClick={close}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button type="button" onClick={close} className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal