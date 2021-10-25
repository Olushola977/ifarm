

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
    additionalClass,
    ...rest
}) {
    return (
            <button
                className={`form-control ${mx} ${additionalClass}`}
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
    )
}

export default Button