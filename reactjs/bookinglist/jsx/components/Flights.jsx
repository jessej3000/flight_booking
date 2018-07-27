import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Flights extends Component{
        onChange(e){
                let {updateFlightList} = this.props;

                const node = this.refs.fli;
                const flightID = node.value;
                if(node.value.trim().length>0){
                        updateFlightList(flightID);
                }
        }
	render(){

		return (
                	<select id="rows" onChange={this.onChange.bind(this)} ref="fli">
                                <option disabled defaultValue value = "" >Choose Flight</option>
                                {
                                this.props.flights.map(flight=>{
                			return(
                				<option 
                					key = {flight.ID}
                					value = {flight.ID}
                					>{flight.Name}</option>
                			)
                		})
                	}</select>
        	
		)
	}
}

Flights.propTypes = {
	flights: PropTypes.array.isRequired,
        updateFlightList: PropTypes.func.isRequired
}

export default Flights