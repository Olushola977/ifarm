import './Input.scss';

/**
 * Input Component
 */


function Input({ type, placeholder }) {

    return (
        <div className="mt-4">
            <input
                id="input"
                type={type}
                className="form-control"
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default Input