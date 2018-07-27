import React, {Component} from 'react';
import Booking from './Booking.jsx';
import PropTypes from 'prop-types';

class BookingList extends Component{
	constructor(props) {
	    super(props);
	    this.state = { 
	    		activeIndex: -1
	    };
	}

    changeHandler(index) {
	    this.setState({ activeIndex: index });
	    console.log(index);
	}

	render(){
		let {FlightName,Origin,Destination,Departure,Arrival} = this.props;
		return(
			<div>
				<div className="row">
					<table className="highlight">
						<tbody>
							<tr>
								<td>Flight</td><td>{FlightName} </td>
							</tr>
							<tr>
								<td>Origin</td><td>{Origin}</td>
							</tr>
							<tr>
								<td>Destination</td><td>{Destination} </td>
							</tr>
							<tr>
								<td>Departure</td><td>{Departure}</td>
							</tr>
							<tr>
								<td>Arrival</td><td>{Arrival}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="row">
					<ul className="collapsible popout">{
						this.props.bookings.map(book=>{
							return(
								<Booking
									key = {book.Index}
									booking = {book}  />
							)
						})
					}</ul>
				</div>
			</div>
		)
	}
}

BookingList.propTypes = {
	bookings: PropTypes.array.isRequired,
    FlightName: PropTypes.string.isRequired,
	Origin:  PropTypes.string.isRequired,
	Destination: PropTypes.string.isRequired,
	Departure: PropTypes.string.isRequired,
	Arrival:  PropTypes.string.isRequired,
}

export default BookingList