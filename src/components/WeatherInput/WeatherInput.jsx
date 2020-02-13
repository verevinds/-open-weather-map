import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import cityJSON from '../../json/city.list.json'
import { Button } from '@material-ui/core'

const WeatherInput = ({ setCity, city: { id, name } }) => {
	const [prediction, setPrediction] = useState()
	const [state, setState] = useState('')

	const onClick = () => {
		let city
		if (state) {
			city = cityJSON.find(
				city =>
					city.name.toLowerCase() === state.toLowerCase() &&
					city.name.toLowerCase().indexOf(state.toLowerCase()) === 0
			)
		}
		city ? setCity({ id: city.id, name: city.name }) : setCity({ id: null, name: null })
	}
	const handelInput = event => {
		let city
		const name = event.target.value
		if (name) {
			city = cityJSON.find(
				city =>
					city.name.toLowerCase() >= name.toLowerCase() &&
					city.name.toLowerCase().indexOf(name.toLowerCase()) >= 0
			)
		}
		city ? setPrediction(city) : setPrediction()
		if (event.charCode === 13) {
		}
		setState(name)
	}
	return (
		<FormControl fullWidth>
			<InputLabel htmlFor='standard-adornment-amount'>Название города</InputLabel>
			<Input
				id='standard-adornment-amount'
				value={state}
				onChange={handelInput}
				onKeyPress={event => {
					if (event.charCode === 13) {
						setCity({ id: prediction.id, name: prediction.name })
						setState(prediction.name)
					}
				}}
			/>
			<i>{prediction ? `Если вы ищите ${prediction.name}, нажмите Enter ` : ''}</i>
			<Button onClick={onClick}>Поиск</Button>
		</FormControl>
	)
}

export default React.memo(WeatherInput)
