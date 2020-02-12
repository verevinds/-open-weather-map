import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Weather from './pages/Weather'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Weather} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
