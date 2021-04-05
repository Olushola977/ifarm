
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
            <div className={`modal fade ${show}`} id="exampleModal" role="dialog" onClick={close}>
                <div className="modal-dialog" role="document">
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