import React from 'react'
import ForecaseCard from '../components/ForecaseCard/ForecaseCard'
import { NavLink } from 'react-router-dom'

import Button from '@material-ui/core/Button'

const Forecast = ({ match: { params } }) => {
	return (
		<div>
			<h1>Прогноз погоды на ближайшие 5 дней: {params.name}</h1>
			<Button size='small' to={`/`} component={NavLink}>
				Назад
			</Button>
			<ForecaseCard params={params} />
		</div>
	)
}

export default React.memo(Forecast)
