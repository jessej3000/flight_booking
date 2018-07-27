import React, {Component} from 'react';
import BookingList from './BookingList.jsx';
import BookingListForm from './BookingListForm.jsx';
import PropTypes from 'prop-types';

class BookingListSection extends Component{
	render(){
		return(
			<div className="card">
				<div className="card-image">
					<img src="/images/plane1.jpg" />
					<span className="card-title" style={{top:0}}>Actelligent Booking List</span>
				</div>
				<div className="card-content">
					<div>
						<BookingListForm {...this.props} />
					</div>
					<div>
						<BookingList {...this.props} />
					</div>
				</div>
			</div>
		)
	}

}

BookingListSection.propTypes = {
	bookings: PropTypes.array.isRequired,
	flights: PropTypes.array.isRequired,
    updateFlightList: PropTypes.func.isRequired,
    FlightName: PropTypes.string.isRequired,
	Origin:  PropTypes.string.isRequired,
	Destination: PropTypes.string.isRequired,
	Departure: PropTypes.string.isRequired,
	Arrival:  PropTypes.string.isRequired,
    searchQuery: PropTypes.func.isRequired
}

export default BookingListSection