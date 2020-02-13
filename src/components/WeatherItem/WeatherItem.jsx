import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_WEATHER } from './query'
import { ContextWeather } from '../../context/ContextWeather'
import { NavLink } from 'react-router-dom'

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

	const [list, setList] = useState({ celcius_avg: null, pressure_avg: null, humidity_avg: null })
	const { loading, error, data } = useQuery(GET_WEATHER, {
		variables: { city: name, countryCode: id }
	})
	useEffect(() => {
		if (!loading && data) setList(data.getWeather)
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

	if (loading)
		return (
			<Card className={classes.root} variant='outlined'>
				<p>Loading...</p>
			</Card>
		)
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
					{name}
				</Typography>
				<hr />
				<Typography variant='h5' component='h2'>
					Темпрепатура: {list.celcius_avg}&deg;С
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					Давление: {list.pressure_avg}Па
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					Влажность: {list.humidity_avg}%
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites' value={{ id, name }} onClick={handleFavorites}>
					{favoritesCheck ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteIcon />}
				</IconButton>
				<Button
					size='small'
					className={classes.right}
					to={`/forecast/${id}/${name}`}
					component={NavLink}>
					Подробнее
				</Button>
			</CardActions>
		</Card>
	)
}

export default React.memo(WeatherItem)
