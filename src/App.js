import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import HeaderComponent from './component/Header/Header'
import Home from './component/Home/Home'
import Rules from './component/Rules/Rules'
import Footer from './component/Footer/Footer'
import Register from './component/Register/Register'
import Character from './component/Character/Character'
import Donate from './component/Donate/Donate'
import Download from './component/Download/Download'
import About from './component/About/About'
export default class App extends Component {
	render() {
		return (
			<Router>
				<HeaderComponent />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/rules" component={Rules} />
					<Route exact path="/character" component={Character} />
					<Route exact path="/donate" component={Donate} />
					<Route exact path="/download" component={Download} />
					<Route exact path="/about" component={About} />
				</Switch>
				<Footer />
			</Router>
		)
	}
}
