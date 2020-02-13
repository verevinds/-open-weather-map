import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_WEATHER } from '../WeatherItem/query'
import { ContextWeather } from '../../context/ContextWeather'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		maxWidth: 400,
		float: 'left',
		margin: 10
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	right: {
		marginLeft: 'auto'
	}
})

const WeatherItem = ({ city: { id, name }, favorites }) => {
	const classes = useStyles()
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
	const { loading, error, data } = useQuery(GET_WEATHER, {
		variables: { city: name, countryCode: id }
	})
	useEffect(() => {
		if (!loading && data) setList(data.getWeather.list)
	}, [loading, data])

	const [favoritesCheck, setFavoritesCheck] = useState(false)
	const { pushFavorites, removeFavorites } = useContext(ContextWeather)
	useEffect(() => {
		if (favorites.find(currentValue => currentValue.id === id)) {
			setFavoritesCheck(true)
		} else {
			setFavoritesCheck(false)
		}
	}, [id, favorites])
	const handleFavorites = event => {
		if (!favoritesCheck) {
			if (favorites.find(currentValue => currentValue.id === id) === undefined) {
				pushFavorites(id, name)
			}
		} else {
			removeFavorites(id)
		}
		setFavoritesCheck(!favoritesCheck)
	}

	if (loading) {
		return (
			<Card className={classes.root} variant='outlined'>
				<p>Loading...</p>
			</Card>
		)
	}
	if (error)
		return (
			<Card className={classes.root} variant='outlined'>
				<p>{`Error: ${error.message}`}</p>
			</Card>
		)

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography className={classes.title} color='textSecondary' gutterBottom>
					{name} <i>{convert(list[0].dt)}</i>
				</Typography>
				<hr />
				<Typography variant='h5' component='h2'>
					Outside: {Math.round(list[0].main.temp - 273.15)}&deg;С
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					Max degrees: {Math.round(list[0].main.temp_min - 273.15)}&deg;С
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					Min degrees: {Math.round(list[0].main.temp_max - 273.15)}&deg;С
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites' value={{ id, name }} onClick={handleFavorites}>
					{favoritesCheck ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteIcon />}
				</IconButton>
				<Button size='small' className={classes.right}>
					Подробнее
				</Button>
			</CardActions>
		</Card>
	)
}

export default React.memo(WeatherItem)

function convert(value) {
	var unixtimestamp = value
	var months_arr = [
		'Янв',
		'Фев',
		'Март',
		'Апр',
		'Май',
		'Июнь',
		'Июль',
		'Авг',
		'Сент',
		'Окт',
		'Нояб',
		'Дек'
	]
	var date = new Date(unixtimestamp * 1000)
	var year = date.getFullYear()
	var month = months_arr[date.getMonth()]
	var day = date.getDate()
	var hours = date.getHours()
	var minutes = '0' + date.getMinutes()
	var seconds = '0' + date.getSeconds()
	var convdataTime = `${day}-${month}-${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
	return convdataTime
}
