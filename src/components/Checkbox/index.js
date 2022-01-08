import React, { useState } from 'react'
// import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types'


const Checkboxs = (props) => {
    const { styleClass, selected, label, disabled = false, color, inputProps, size, onChange, } = props;
    const handleChange = (event) => {
        const { selected } = event.target
        onChange(selected)
    }
    return (
        <div className={`form-group form-check${styleClass}`}>
            <input type="checkbox"
                defaultChecked={selected}
                value={selected}
                onChange={handleChange}
                inputProps={inputProps}
                size={size}
                disabled={disabled}
                color={color}
            />
            <label>{label}</label>

        </div>
    )
}
Checkboxs.propTypes = {
    /**
     * The label to be rendered in the Checkboxs
     */
    styleClass: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
Checkboxs.defaultProps = {
    styleClass: "",
    className: "",
    label: "select",

}

export default Checkboxs
