import React from 'react'
import { convert } from '../../js/convert'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		maxWidth: 400,
		float: 'left',
		margin: 10
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	right: {
		marginLeft: 'auto'
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
				Max degrees: {Math.round(params.main.temp_min - 273.15)}&deg;С
			</Typography>
			<Typography className={classes.pos} color='textSecondary'>
				Min degrees: {Math.round(params.main.temp_max - 273.15)}&deg;С
			</Typography>
		</Grid>
	)
}

export default React.memo(ForecaseCard)
