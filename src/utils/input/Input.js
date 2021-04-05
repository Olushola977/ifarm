import './Input.scss';

/**
 * Input Component
 */


function Input({
    type,
    placeholder,
    id
}) {

    return (
        <div className="mt-4">
            <input
                id={id}
                type={type}
                className="form-control"
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default Input