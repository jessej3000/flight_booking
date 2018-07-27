import React, {Component} from 'react';
import Seat from './Seat.jsx';
import PropTypes from 'prop-types';

class Row extends Component{

	render(){
			var seatsCounter = 0;
			var {seats} = this.props;
			var seatLength = seats.length;
			return(
				<li className="">
					<ol className="seats" type="A">{
						this.props.seats.map(upuan=>{
							var seatNumberLabel = this.props.rowNumber + "" + this.props.abc[seatsCounter];
						
							var base = (this.props.rowNumber - 1) * seatLength
							
							seatsCounter++;	
							var seatIndexCounter = (base + seatsCounter);
							return(
							<Seat 
								{...this.props}
								key = {seatsCounter}
								seatNumber = {seatNumberLabel}
								seats = {this.props.seats}
								seatIndex = {seatIndexCounter}
								selectSeat = {this.props.selectSeat}

							/>)
														
						})
					}
					</ol>
				</li>
				)
	}
}

Row.propTypes = {
	seats: PropTypes.array.isRequired,
	rowNumber: PropTypes.number.isRequired,
	abc: PropTypes.array.isRequired,
	booked: PropTypes.array.isRequired,
	selectSeat: PropTypes.func.isRequired
}

export default Row
