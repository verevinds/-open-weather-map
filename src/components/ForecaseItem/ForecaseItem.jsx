import React from 'react'
import { convert } from '../../js/convert'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
})

const ForecaseCard = ({ params }) => {
	const classes = useStyles()
	return (
		<Grid item xs={12} container direction='row' justify='space-evenly' alignItems='center'>
			<Typography variant='h5' component='h2'>
				Outside: {Math.round(params.main.temp - 273.15)}&deg;С
			</Typography>
			<Typography className={classes.title} color='textSecondary' gutterBottom>
				{convert(params.dt)}
			</Typography>
			<Typography className={classes.pos} color='textSecondary'>
				Min degrees: {Math.round(params.main.temp_min - 273.15)}&deg;С
			</Typography>
			<Typography className={classes.pos} color='textSecondary'>
				Max degrees: {Math.round(params.main.temp_max - 273.15)}&deg;С
			</Typography>
		</Grid>
	)
}

export default React.memo(ForecaseCard)
