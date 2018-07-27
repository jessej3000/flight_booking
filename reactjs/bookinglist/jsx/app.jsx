import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import BookingListSection from './components/BookingListSection.jsx';
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			flights: flightsFromDB,
			bookings: [],
			bookingsDummy: [],
			FlightName: "",
			Origin: "",
			Destination: "",
			Departure:  "",
			Arrival:  "",
		};
	}
	
	filterBookings(query){

	}

	updateFlightList(flightID){
		let {FlightName,Origin,Destination,Departure,Arrival,bookings,bookingsDummy} = this.state;

		var tmpBookings = [];
		var seats = [];
		var seatOrder = [];

		var self = this;
		var bodyFormData = new FormData();
		bodyFormData.set('flightid', flightID);

		axios.post('http://localhost:8282/getbookingslist/',
		bodyFormData
			)
		 .then(function (response) {
			tmpBookings = response.data.Payload.Bookings;
			seats = response.data.Payload.Seats.split(",");
			seatOrder = response.data.Payload.Order.split(",");

			FlightName = response.data.Payload.Flight;
			Origin = response.data.Payload.Origin;
			Destination = response.data.Payload.Destination;
			Departure = response.data.Payload.Departure;
			Arrival = response.data.Payload.Arrival;
			
			// Fix bookings
			var finalBookings = [];
			finalBookings = self.fixBookings(tmpBookings,seats,response.data.Payload.Seatsrow,seatOrder)
			bookings = finalBookings;

			self.setState({FlightName})
			self.setState({Origin})
			self.setState({Destination})
			self.setState({Departure})
			self.setState({Arrival})

			bookingsDummy = bookings;
			self.setState({bookingsDummy});
			self.setState({bookings})
		 })

	}

	fixBookings(bookedPassengers,seatIndexes,divider,seatOrder){
		var tmpNames = [];
		var abc = ["A","B","C","D","E","F","G","H","I","J"];
		for(var i=0; i<seatIndexes.length; i++){
			for(var j=0; j<bookedPassengers.length; j++){
				if(Number(seatIndexes[i])==bookedPassengers[j].ID){
					var row = this.getRow(i+1,divider);
					var col = this.getCol(i+1,divider);
					var tmp = {
						ID: bookedPassengers[j].ID,
						Name: bookedPassengers[j].Name,
						Index: i,
						SeatNumber: row + abc[col],
						BookingOrder: seatOrder[i],
					};
					tmpNames.push(tmp);
				}
			}
		}

		return tmpNames;
	}
	getRow(number,divider){
		
		if(number < divider) {
			return 1;
		}
		var quotient = Math.floor(number / divider);
		var remainder = number % divider;
		if(remainder > 0){
			quotient++;
		}

		return quotient;
	}

	getCol(number,divider){
		if(number <= divider){
			return number - 1;
		}
		var remainder = number % divider;

		if(remainder > 0){
			return remainder - 1;
		}else{
			return divider - 1;
		}
	}

    searchQuery(query){

    	let {bookings,bookingsDummy} = this.state;

    	var newArray = []

    	if(query.trim().length > 0){
			newArray = bookingsDummy.filter(function (el) {
				return (
					(el.Name.indexOf(query) > -1) ||
					(el.ID.toString().indexOf(query) > -1) ||
					(el.SeatNumber.indexOf(query) > -1) ||
					(el.Index.toString().indexOf(query) > -1) ||
					(el.BookingOrder.toString().indexOf(query) > -1)
				)
			});
		}else{
			newArray = bookingsDummy;
		}

		bookings = newArray;

		this.setState({bookings});
    }

	render(){
		return(
			<div className="container">
				<div className="row">
			      <div className="col s12">
			      	<BookingListSection
			      		{...this.state}
			      		filterBookings = {this.filterBookings.bind(this)}
        				updateFlightList = {this.updateFlightList.bind(this)} 
        				searchQuery = {this.searchQuery.bind(this)} />
			      </div>
			    </div>
				
			</div>
		)
	}
}

export default App
