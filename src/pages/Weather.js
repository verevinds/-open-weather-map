import React, { useState, useEffect } from 'react'
import { ContextWeather } from '../context/ContextWeather'
import WeatherCard from '../components/WeatherCard/WeatherCard'
import WeatherInput from '../components/WeatherInput/WeatherInput'
import WeatherFavorites from '../components/WeatherFavorites/WeatherFavorites'

import Typography from '@material-ui/core/Typography'

const Weather = () => {
	const [city, setCity] = useState({
		id: null,
		name: 'null'
	})

	const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))
	function pushFavorites(id, name) {
		let newFavorites = [...favorites]
		newFavorites.push({ id, name })
		setFavorites(newFavorites)
	}
	function removeFavorites(id) {
		let newFavorites = favorites.filter(item => item.id !== id)
		setFavorites(newFavorites)
	}
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])

	return (
		<ContextWeather.Provider
			value={{
				pushFavorites,
				removeFavorites
			}}>
			<WeatherInput setCity={setCity} city={city} />
			{city.id ? <WeatherCard city={city} favorites={favorites} /> : null}

			<Typography variant='h3' gutterBottom>
				Избранное
			</Typography>
			<WeatherFavorites favorites={favorites} />
		</ContextWeather.Provider>
	)
}

export default React.memo(Weather)
