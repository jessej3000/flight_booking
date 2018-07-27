import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Plane from './components/plane/Plane.jsx';
import BookingSection from './components/bookinglist/BookingSection.jsx';
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			seatsInRow: seatsPerRow,//[0,0,0,0,0,0,0,0,0,0],//
			rowsCount: numberOfRows,//[0,0,0],//
			seats: seatIndexes,
			selected: assignmentOrder,
			abc: ['A','B','C','D','E','F','G','H','I','J'],
			counter: 0,
			names: bookedPassengers,
			FLIGHTID: FlightID,
			CLIENTID: ClientID,
			CLIENTNAME: ClientName,
		};
	}
	componentDidMount(){
		/*let {seats,selected,names} = this.state

		console.log(":::: " + names)*/
	}
	setBooking(){
		
	}
	addBooking(bookingInfo){
		//console.log(bookingInfo);
	}
	deleteBooking(booking){
		let {names,seats,selected,FLIGHTID} = this.state;

		seats[booking.Index] = "0";

		var sequence = selected[booking.Index];
		selected[booking.Index] = "0";

		for(var j=0; j<selected.length; j++){
			if(Number(selected[j]) > Number(sequence)){
				selected[j] = (Number(selected[j]) - 1).toString();
				break;
			}
		}

		for(var i=0; i<names.length; i++){
			if(names[i].Index == booking.Index){
				names.splice(i,1);
				break;
			}
		}

		this.setState({seats});
		this.setState({selected});
		this.setState({names});

		// Update Database
		var self = this;
		var bodyFormData = new FormData();
		bodyFormData.set('id', FLIGHTID);
		bodyFormData.set('seats', seats);
		bodyFormData.set('aorder', selected);

		axios.post('http://localhost:8282/bookflight/',
			bodyFormData)
			 .then(function (response) {
			   console.log(response);
		});

	}

	selectSeat(index){
		let {CLIENTID, CLIENTNAME, seats, selected, names, FLIGHTID} = this.state;

		seats[index-1] = CLIENTID.toString();
		
		var name = {
			ID: CLIENTID,
			Name: CLIENTNAME,
			Index: index-1
		}

		names.push(name);

		selected[index-1] = names.length.toString();

		this.setState({seats});
		this.setState({names});
		this.setState({selected});

		var DBSeats = "";
		var DBOrder = "";

		DBSeats = seats[0];
		DBOrder = selected[0];

		for(var i=1; i<seats.length; i++){
			DBSeats += "," + seats[i];
			DBOrder += "," + selected[i];
		}
		// Update Database
		var self = this;
		var bodyFormData = new FormData();
		bodyFormData.set('id', FLIGHTID);
		bodyFormData.set('seats', DBSeats);
		bodyFormData.set('aorder', DBOrder);

		axios.post('http://localhost:8282/bookflight/',
			bodyFormData)
			 .then(function (response) {
			   console.log(response);
		});

	}

	assignSeat(){
		let {rowsCount,seatsInRow,selected,seats,CLIENTID,CLIENTNAME,names,FLIGHTID} = this.state;

		var checkPoints = [];
		var multiplier = 0;

		if(seatsInRow.length>6){
			checkPoints = [ 2,3,6,7,0,9,1,8,4,5];
			multiplier = 10;
		}else{// 6 seats
			checkPoints = [2,3,0,5,1,4];
			multiplier = 6;
		}
		var index = -1; 

		for(var j=0; j<multiplier; j++){
			index = checkPoints[j];
			if(seats[index] == "0"){
				seats[index] = CLIENTID.toString();
	
				var name = {
					ID: CLIENTID,
					Name: CLIENTNAME,
					Index: index
				}

				names.push(name);

				selected[index] = names.length.toString();

				this.setState({seats});
				this.setState({names});
				this.setState({selected});

				var self = this;
				var bodyFormData = new FormData();
				bodyFormData.set('id', FLIGHTID);
				bodyFormData.set('seats', seats);
				bodyFormData.set('aorder', selected);

				axios.post('http://localhost:8282/bookflight/',
					bodyFormData)
					 .then(function (response) {
					   console.log(response);
				});

				return;
			}
			for(var i=1; i<rowsCount.length;i++){
				
				index = index + multiplier;
				if(seats[index] == "0"){
					seats[index] = CLIENTID.toString();
	
					var name = {
						ID: CLIENTID,
						Name: CLIENTNAME,
						Index: index
					}

					names.push(name);

					selected[index] = names.length.toString();

					this.setState({seats});
					this.setState({names});
					this.setState({selected});
					
					var self = this;
					var bodyFormData = new FormData();
					bodyFormData.set('id', FLIGHTID);
					bodyFormData.set('seats', seats);
					bodyFormData.set('aorder', selected);

					axios.post('http://localhost:8282/bookflight/',
						bodyFormData)
						 .then(function (response) {
						   console.log(response);
					});
					return;
				}
			}
		}
		
	}

	getAllSeatNumbers(){
		let {seatsInRow, rowsCount, abc, names} = this.state;
		var booked = [];
		var counter = 0;
		
		if(names){
			for(var r=1; r<=rowsCount.length; r++){
				for(var s=0; s<seatsInRow.length; s++){
					for(var n=0; n<names.length; n++){
						if(counter == names[n].Index){
							booked.push(r + abc[s])
						}
					}
					counter++;
				}
			}
		}

		return booked;
	}

	render(){
		let {seatsInRow, rowsCount, names} = this.state;
		var seatsInRowCount = seatsInRow.length;
		var rowsNum = rowsCount.length;
		var booked = this.getAllSeatNumbers();
		return(
			<div className="">
				<div className="row">
			      <div className="col s8">
			      	<Plane  
			      		{...this.state} 
			      		booked = {booked}
						selectSeat = {this.selectSeat.bind(this)} />
			      </div>
			      <div className="col s4">
			      	<BookingSection
			      		seats = {seatsInRowCount}
			      		rows = {rowsNum}
			      		bookings = {names}
			      		setBooking = {this.setBooking.bind(this)}
			      		addBooking = {this.addBooking.bind(this)}
			      		deleteBooking = {this.deleteBooking.bind(this)}
			      		assignSeat = {this.assignSeat.bind(this)} />
			      </div>
			    </div>
				
			</div>
		)
	}
}

export default App
