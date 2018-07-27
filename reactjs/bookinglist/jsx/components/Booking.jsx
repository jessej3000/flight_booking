import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Booking extends Component{
	render(){
		let {booking} = this.props;
		return(
			<li>
				<div className="collapsible-header">
					<i className="material-icons">filter_drama</i>{booking.Name}
					<div style={{width:'100%'}}>
						<span className="secondary-content">{booking.SeatNumber}</span>
					</div>
				</div>
	      		<div className="collapsible-body">
	      			<span>
	      				<table className="highlight">
							<tbody>
								<tr>
									<td>Passenger Index</td><td>{booking.Index} </td>
								</tr>
								<tr>
									<td>Passenger ID</td><td>{booking.ID}</td>
								</tr>
								<tr>
									<td>Booking Order</td><td>{booking.BookingOrder}</td>
								</tr>
							</tbody>
						</table>
	      			</span>
	      		</div>
			</li>

		)
	}
}

Booking.propTypes = {
	booking: PropTypes.object.isRequired
}

export default Booking