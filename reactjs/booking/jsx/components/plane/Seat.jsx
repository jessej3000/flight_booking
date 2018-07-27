import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Seat extends Component{
	onClick(e){
		//e.preventDefault();
		const {seatIndex, selectSeat} = this.props;
		selectSeat(seatIndex);
	}

	render(){
		let {booked} = this.props;
		var rowNum = this.props.seatNumber;
		

		let seats = this.props.seats;
		let seatsStyle = {};
		if(seats.length < 7) {
		 	seatsStyle = {flex: 14.9};
		}

		var disabled = (booked.indexOf(rowNum) > -1) ? true : "";
		return(
			<li className="seat" style={seatsStyle}>
				<input type="checkbox" id={rowNum}  disabled={disabled}  onClick={this.onClick.bind(this)} />
				<label htmlFor={rowNum}>{rowNum}</label>
			</li>
		)
	}
}

Seat.propsType = {
	seatNumber: PropTypes.number.isRequired,
	seats: PropTypes.array.isRequired,
	seatIndex: PropTypes.number.isRequired,
	booked: PropTypes.array.isRequired
}

export default Seat