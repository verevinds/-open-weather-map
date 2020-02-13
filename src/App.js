import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Weather from './pages/Weather'
import Forecast from './pages/Forecast'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Weather} />
				<Route path='/forecast/:id/:name' component={Forecast} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
