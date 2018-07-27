import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Flight extends Component{
	onClick(e){
		e.preventDefault();
		const {deleteFlight, flight} = this.props;
		deleteFlight(flight);
	}
	render(){
		const {flight} = this.props;
		return(
			<tr>
				<td>{flight.Name}</td>
				<td>{flight.Depart}</td>
				<td>{flight.Arrive}</td>
				<td>{flight.Orig}</td>
				<td>{flight.Dest}</td>
				<td>
					<a onClick={this.onClick.bind(this)} >
						<span className="secondary-content">
							<i className="material-icons" >delete</i>
						</span>
					</a>
				</td>
			</tr>
				
		)
	}
}

Flight.propTypes = {
	flight: PropTypes.object.isRequired,
	deleteFlight: PropTypes.func.isRequired
}

export default Flight