import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_FORECASE } from './query'

import ForecaseItem from '../ForecaseItem/ForecaseItem'

const ForecaseCard = ({ params }) => {
	const [list, setList] = useState([
		{
			dt: '',
			main: {
				temp: null,
				temp_min: null,
				temp_max: null
			}
		}
	])
	const { loading, error, data } = useQuery(GET_FORECASE, {
		variables: { city: params.name, countryCode: params.id }
	})
	useEffect(() => {
		if (!loading && data) setList(data.getWeather.list)
	}, [loading, data])

	if (loading) return <p>Loading...</p>
	if (error) return <p>{`Error: ${error.message}`}</p>
	return list.map(item => (
		<div key={item.dt + Math.random()}>
			{error ? <p>{`Error: ${error.message}`}</p> : null}
			<hr />
			{loading ? <p>Loading...</p> : <ForecaseItem params={item} />}
		</div>
	))
}

export default React.memo(ForecaseCard)
