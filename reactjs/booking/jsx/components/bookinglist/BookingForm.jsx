import React, {Component} from 'react';
import PropTypes from 'prop-types';


class BookingForm extends Component{
	onClick(e){
		e.preventDefault();
		let {assignSeat} = this.props;
		assignSeat();
	}
	render(){
		return (
			<div className='row'>
				<div className="input-field col s12">
		          <button className="btn waves-effect waves-light" onClick={this.onClick.bind(this)} type="submit" name="action">Book Me Now!
				    <i className="material-icons right">send</i>
				  </button>
		        </div>
			</div>

		)
	}
}

BookingForm.propTypes = {
	assignSeat: PropTypes.func.isRequired
}

export default BookingForm