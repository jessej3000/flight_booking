import React, {Component} from 'react';
import Row from './Row.jsx';
import PropTypes from 'prop-types';

class Cabin extends Component{

	render(){
		var rowsCounter = 0;
		return(
			<ol className="cabin fuselage">{
				this.props.rowsCount.map(row=>{
					rowsCounter++;
					return(
						<Row 
							{...this.props}
							key = {rowsCounter}
							seats = {this.props.seatsInRow}
							rowNumber = {rowsCounter}
						/>
					)
					
				})
			}</ol>
		)
	}
}

Cabin.propTypes = {
	seatsInRow: PropTypes.array.isRequired,
	rowsCount: PropTypes.array.isRequired,
	abc: PropTypes.array.isRequired,
	booked: PropTypes.array.isRequired
}

export default Cabin
