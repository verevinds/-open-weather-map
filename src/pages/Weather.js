import React, { useState, useEffect } from 'react'
import { ContextWeather } from '../context/ContextWeather'
import WeatherCard from '../components/WeatherCard/WeatherCard'
import WeatherInput from '../components/WeatherInput/WeatherInput'
import WeatherFavorites from '../components/WeatherFavorites/WeatherFavorites'

const Weather = () => {
	const [city, setCity] = useState({
		id: 1496747,
		name: 'Novosibirsk'
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
			<WeatherInput setState={setCity} city={city} />
			<WeatherCard city={city} favorites={favorites} />
			<WeatherFavorites favorites={favorites} />
			{/* <WeatherCard
				city={{
					id: 707860,
					name: 'Hurzuf'
				}}
				favorites={favorites}
			/> */}
		</ContextWeather.Provider>
	)
}

export default React.memo(Weather)
