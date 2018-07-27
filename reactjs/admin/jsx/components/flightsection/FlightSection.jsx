import React, {Component} from 'react';
import FlightForm from './FlightForm.jsx';
import FlightTable from './FlightTable.jsx';
import PropTypes from 'prop-types';

class FlightSection extends Component{
	render(){
		return(
			<div className="card">
				<div className="card-image">
					<img src="/images/plane1.jpg" />
					<span className="card-title" style={{top:0}}>Actelligent Flights</span>
				</div>
				<div className="card-content">
					<div className='panel-body channels panel1-body'>
						<FlightTable {...this.props} />
					</div>
					<div>
						<FlightForm {...this.props} />
					</div>
				</div>
			</div>
		)
	}

}

FlightSection.propTypes = {
	flights: PropTypes.array.isRequired,
	setFlight: PropTypes.func.isRequired,
	addFlight: PropTypes.func.isRequired,
	deleteFlight: PropTypes.func.isRequired
}

export default FlightSection
