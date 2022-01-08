import React from 'react'
import PropTypes from 'prop-types'

const DropDown = ({ value, data, styleClass }) => {
    return (
        <div className="form-group">
            <select value={value} className="form-control">
                {data.map((item, key) => {
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                })}
            </select>
        </div>
    )
}
DropDown.propTypes = {
    value: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.string,

}
DropDown.defaultProps = {

}

export default DropDown
