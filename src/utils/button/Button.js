

/**
 * Button Component
 */

function Button({bg, colour, fontsize, fontweight, name}) {
    return (
        <div className="mt-4">
            <button 
                className="form-control" 
                style=
                {{
                    background: `${bg}`, 
                    color: `${colour}`, 
                    fontSize: `${fontsize}`, 
                    fontWeight: `${fontweight}`,
                }}>
                    {name}
            </button>
        </div>
    )
}

export default Button