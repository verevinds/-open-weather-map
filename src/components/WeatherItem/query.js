import { gql } from 'apollo-boost'

export const GET_WEATHER = gql`
	query($city: String!, $countryCode: String!) {
		getWeather(city: $city, countryCode: $countryCode) {
			celcius_avg
			pressure_avg
			humidity_avg
		}
	}
`
