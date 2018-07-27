import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Cabin from './Cabin.jsx';
import PropTypes from 'prop-types';

class Plane extends Component{

	render(){
		let {seatsInRow} = this.props;
		var planeSize = (seatsInRow.length > 6) ? "plane10" : "plane6"
		return(
			<div className={planeSize}>
				<div className="cockpit">
					<h1>PILOT</h1>
				</div>
				<div className="exit exit--front fuselage">
				</div>
				<Cabin 
					{...this.props} 
					selectSeat = {this.props.selectSeat} />
				<div className="exit exit--front fuselage">
				</div>
				<div className="tail">
				</div>
			</div>
		)
	}
}

Plane.propsType = {
	seatsInRow: PropTypes.array.isRequired,
	rowsCount: PropTypes.array.isRequired,
	abc: PropTypes.array.isRequired,
	booked: PropTypes.array.isRequired,
	selectSeat: PropTypes.func.isRequired
}

export default Plane
