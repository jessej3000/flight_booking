import React, {Component} from 'react';
import PropTypes from 'prop-types';


class InfoForm extends Component{
	render(){
		return (
			<div className="row center">
				<form className="col s12" action="/book/" method="POST">
					<div className="row">
						<div className="input-field col s12">
							<input id="first_name" name="first_name" type="text" className="validate" />
							<label htmlFor="first_name">First Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<select id="rows" name="selected_flight">{
							this.props.flights.map(flight=>{
								return(
									<option 
										key 	= {flight.ID}
										value	= {flight.ID} >{flight.Name}  : Departure {flight.Depart} : {flight.Dest} - {flight.Dest}</option>
								)
							})
							}</select>
							<label>Select Flight</label>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<button className="btn waves-effect waves-light" type="submit" name="action">Book Flight Now
							    <i className="material-icons right">airplanemode_active</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

InfoForm.propTypes = {
	flights: PropTypes.array.isRequired
}

export default InfoForm
