import { gql } from 'apollo-boost'

export const GET_WEATHER = gql`
	query($city: String!, $countryCode: String!) {
		getWeather(city: $city, countryCode: $countryCode) {
			list {
				dt
				main {
					temp
					temp_min
					temp_max
				}
			}
		}
	}
`
