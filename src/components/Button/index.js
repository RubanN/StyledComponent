import { Button as MuiButton } from '@material-ui/core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import useStyles from './styles'

const Button = props => {
	const { label, style, ...otherProps } = props

	return (
		<MuiButton disableElevation {...otherProps}>
			{label}
		</MuiButton>
	)
}

Button.propTypes = {
	/**
	 * The label to be rendered in the button
	 */
	label: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	handleChange: PropTypes.func
}

Button.defaultProps = {
	label: 'Button',
	style: {},
	variant: 'contained',
	size: 'medium',
	className: '',
	color: 'primary',
	onClick: () => null
}

export default Button
