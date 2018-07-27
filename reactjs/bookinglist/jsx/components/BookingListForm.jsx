import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Flights from './Flights.jsx';


class BookingListForm extends Component{
	onSubmit(e){
		e.preventDefault();
		const node = this.refs.query;
		const query = node.value;
		this.props.searchQuery(query)
	}
	render(){
		const searchIconStyle = {
			position: 'absolute',
			top: 0,
		};
		const searchInputStyle = {
			paddingLeft: '22px',
			width: '94%',
		};
		return (
	      <div className="row">
	        <div className="input-field col s6">
	        	<Flights {...this.props} />
	        </div>
	        <div className="input-field col s6">
		        <form onSubmit={this.onSubmit.bind(this)}>
					<input ref="query" id="query" type="Search" className="validate" style={searchInputStyle} />
					<label className="label-icon" htmlFor="query"><i className="material-icons" style={searchIconStyle}>search</i></label>
					<i className="material-icons">close</i>
		        </form>
	        </div>
	      </div>
		)
	}
}

BookingListForm.propTypes = {
	flights: PropTypes.array.isRequired,
    updateFlightList: PropTypes.func.isRequired,
    searchQuery: PropTypes.func.isRequired
}

export default BookingListForm