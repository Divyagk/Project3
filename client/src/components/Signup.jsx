
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import './style.css'
















class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		

		//request to server to add a new username/password
		axios.post('//localhost:3001/signup', {
			username: this.state.username,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				photos: this.state.photos
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="SignUpContainer">
					<div className="SignupForm">
						<h4>Sign up</h4>
						<br></br>
						
						<form>


							<div className="form-group">
								<label className="form-label" htmlFor="username"></label>
								<input className="form-input"
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-group col-md-3">
								<label htmlFor="email"> </label>
								<input
									type="email"
									
									className="form-control"
									id="inputEmail"
									placeholder="Email"
									name="email"
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</div>
					
							<div className="form-group">
								<label className="form-label" htmlFor="password"> </label>
								<input className="form-input"
									placeholder="Password"
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</div>
							
						

							<div className="form-group ">
								<button
									className="btn btn-primary col-mr-auto"
									onClick={this.handleSubmit}
									type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>

			)
		}
	}
}

export default Signup



