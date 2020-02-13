import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import WeatherItem from '../WeatherItem/WeatherItem'

const WeatherFavorites = ({ favorites }) => {
	if (favorites)
		return favorites.map(item => {
			const city = {
				id: item.id,
				name: item.name
			}
			return <WeatherItem city={city} favorites={favorites} key={item.id} />
		})
	return (
		<Grid container justify='space-around'>
			<Typography variant='caption' component='p'>
				<i>Добавьте город в избранное для отслеживания погоды</i>
			</Typography>
		</Grid>
	)
}

export default React.memo(WeatherFavorites)
