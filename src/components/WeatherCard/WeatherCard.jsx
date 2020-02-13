import React from 'react'

import Grid from '@material-ui/core/Grid'
import WeatherItem from '../WeatherItem/WeatherItem'

const WeatherCard = ({ city, favorites }) => {
	return (
		<div>
			<Grid container justify='center'>
				{city ? <WeatherItem city={city} favorites={favorites} /> : null}
			</Grid>
		</div>
	)
}

export default React.memo(WeatherCard)
