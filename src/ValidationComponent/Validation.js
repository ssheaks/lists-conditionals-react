import React from 'react';
import './Validation.css'

const validation = (props) => {
    console.log(props)
    let validationText = <p></p>

    if (props.length < 5) {
        validationText = <p>Input is too short</p>
    }

    if (props.length > 20) {
        validationText = <p>Input is too long</p>
    }
    return (
        <div className="Validation">
            {validationText}
        </div>
    )
}

export default validation;