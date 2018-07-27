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
	}

	render(){
		return(
			<div className="collection">{
				this.props.bookings.map(booking=>{
					return(
						<Booking
							key = {booking.Index}
							booking = {booking} 
							setBooking = {this.props.setBooking} 
							deleteBooking = {this.props.deleteBooking}
							changeHandler = {this.changeHandler.bind(this)}
							seats = {this.props.seats}
							rows = {this.props.rows} />
					)
				})
			}</div>
		)
	}
}

BookingList.propTypes = {
	bookings: PropTypes.array.isRequired,
	setBooking: PropTypes.func.isRequired,
	deleteBooking: PropTypes.func.isRequired,
	seats: PropTypes.number.isRequired,
	rows: PropTypes.number.isRequired
}

export default BookingList