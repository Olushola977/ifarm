

/**
 * Button Component
 */

function Button({
    bg,
    width,
    colour,
    fontsize,
    fontweight,
    name,
    mx,
    id,
    ...rest
}) {
    return (
        <div className="mt-4">
            <button
                className={`form-control ${mx}`}
                id= {id}
                {...rest}
                style=
                {{
                    background: `${bg}`,
                    color: `${colour}`,
                    fontSize: `${fontsize}`,
                    fontWeight: `${fontweight}`,
                    width: `${width}`,
                    border: "none",
                    boxShadow: "none"
                }}>
                {name}
            </button>
        </div>
    )
}

export default Button