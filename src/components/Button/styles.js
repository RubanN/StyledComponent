import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	link: {
		display: 'flex'
	},
	icon: {
		marginRight: theme.spacing(0.5),
		width: 20,
		height: 20
	}
}))

export default useStyles
