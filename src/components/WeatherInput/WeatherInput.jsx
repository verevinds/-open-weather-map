import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}))

const WeatherInput = ({ setCity, city: { id, name } }) => {
	const classes = useStyles()
	return (
		<FormControl fullWidth className={classes.margin}>
			<InputLabel htmlFor='standard-adornment-amount'>Название города</InputLabel>
			<Input id='standard-adornment-amount' value={name} />
		</FormControl>
	)
}

export default React.memo(WeatherInput)
