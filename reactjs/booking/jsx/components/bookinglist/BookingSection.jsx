import React, {Component} from 'react';
import BookingForm from './BookingForm.jsx';
import BookingList from './BookingList.jsx';
import PropTypes from 'prop-types';

class BookingSection extends Component{
	render(){
		return(
			<div className='support panel panel-primary half-screen-height'>
				<h5 className='header'>
					<strong>Bookings</strong>
				</h5>
				<div>
					<BookingForm {...this.props} />
				</div>
				<div className='panel-body channels panel1-body'>
					<BookingList {...this.props} />
				</div>
				
			</div>
		)
	}

}

BookingSection.propTypes = {
	bookings: PropTypes.array.isRequired,
	setBooking: PropTypes.func.isRequired,
	addBooking: PropTypes.func.isRequired,
	deleteBooking: PropTypes.func.isRequired,
	seats: PropTypes.number.isRequired,
	rows: PropTypes.number.isRequired,
	assignSeat: PropTypes.func.isRequired
}

export default BookingSection