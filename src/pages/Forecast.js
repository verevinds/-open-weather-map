import React from 'react'
import ForecaseCard from '../components/ForecaseCard/ForecaseCard'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'

import Button from '@material-ui/core/Button'

const Forecast = ({ match: { params } }) => {
	return (
		<div>
			<Typography variant='h5' component='h2'>
				Прогноз погоды на ближайшие 5 дней: {params.name}
			</Typography>
			<Button size='small' to={`/`} component={NavLink}>
				Назад
			</Button>
			<ForecaseCard params={params} />
		</div>
	)
}

export default React.memo(Forecast)
