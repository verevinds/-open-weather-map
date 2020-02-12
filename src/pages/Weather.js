import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_WEATHER = gql`
	query($city: String!, $countryCode: String!) {
		getWeather(city: $city, countryCode: $countryCode) {
			city {
				id
				name
			}
			celcius_avg
			celcius_max_avg
		}
	}
`

const Weather = () => {
	const { loading, error, data } = useQuery(GET_WEATHER, {
		variables: { city: 'Novosibirsk', countryCode: 1496747 }
	})

	if (loading) {
		return <p>Loading...</p>
	} else {
		console.log(data.getWeather)
	}
	if (error) return <p>{`Error: ${error.message}`}</p>

	return (
		<div>
			<h1>Hello</h1>
		</div>
	)
}

export default React.memo(Weather)
