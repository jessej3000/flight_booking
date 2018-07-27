import React, {Component} from 'react';
import Flight from './Flight.jsx';
import PropTypes from 'prop-types';

class FlightTable extends Component{
	constructor(props) {
	    super(props);
	    this.state = { 
	    		activeIndex: -1
	    };
	}

    /*changeHandler(index) {
	    this.setState({ activeIndex: index });
	    console.log(index);
	}*/

	render(){
		return(
			<table className="highlight responsive-table">
				<tbody>{
				this.props.flights.map(flight=>{
					var cName = "collection-item waves-effect waves-light";
					if (flight.ID == this.state.activeIndex) {
						cName = "collection-item waves-effect waves-light active";
					}
					return(
						<Flight
							key = {flight.ID}
							flight = {flight} 
							setFlight = {this.props.setFlight} 
							deleteFlight = {this.props.deleteFlight}
							cName = {cName}
						/>
					)
				})
			}</tbody>
			</table>
		)
	}
}

FlightTable.propTypes = {
	flights: PropTypes.array.isRequired,
	setFlight: PropTypes.func.isRequired,
	deleteFlight: PropTypes.func.isRequired
}

export default FlightTable