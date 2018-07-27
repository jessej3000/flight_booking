import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Channel extends Component{
	onClick(e){
		e.preventDefault();
	}
	onClickX(e){
		e.preventDefault();
		const {deleteBooking, booking} = this.props;
		deleteBooking(booking);
	}
	onSelectItem(e){
		e.preventDefault();
		const {changeHandler, booking} = this.props;
		changeHandler(booking.ID);
	}
	getSeatNumber(index){
		let {seats, rows} = this.props;
		let letters = ['A','B','C','D','E','F','G','H','I','J'];

		var counter = 0;
		for(var r=1; r<=rows; r++){
			for(var s=0; s<seats; s++){
				if(counter == index){
					return (r + letters[s]);
				}
				counter++;
			}
		}
	}
	render(){
		const {booking} = this.props;
		var seatNumber = this.getSeatNumber(booking.Index);
		return(
			<a className="collection-item waves-effect waves-light" onMouseDown={this.onSelectItem.bind(this)}>
				{seatNumber} : {booking.Name}
				<span className="secondary-content">
					<i onClick={this.onClickX.bind(this)} className="material-icons">delete</i>
				</span>
			</a>
		)
	}
}

Channel.propTypes = {
	booking: PropTypes.object.isRequired,
	setBooking: PropTypes.func.isRequired,
	deleteBooking: PropTypes.func.isRequired,
	changeHandler: PropTypes.func.isRequired,
	seats: PropTypes.number.isRequired,
	rows: PropTypes.number.isRequired
}

export default Channel