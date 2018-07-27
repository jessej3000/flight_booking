import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FlightSection from './components/flightsection/FlightSection.jsx';
import PropTypes from 'prop-types';
import $ from 'jquery';
import axios from 'axios';


class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			flights: [
				{
					ID: 0,
					Name: "FJ2341",
					Depart: "12:30PM",
					Arrive: "3:00PM",
					Orig: "Davao",
					Dest: "Manila",
				},
			],
		};
	}

	componentDidMount(){
		var self = this;
		$('button').on('click',function(){
			$.post( 'http://ec2-35-163-18-92.us-west-2.compute.amazonaws.com:9393/addflight/', 
				{ 
					plane: $('#flight_name').val(),
					departure: $('#departure').val(),
					arrival: $('#arrival').val(),
					origin: $('#origin').val(),
					destination: $('#destination').val(),
					seatrows: $('#seatsrow').val(),
					rows: $('#rows').val(),
					aorder: ($('#seatsrow').val() * 1) * $('#rows').val(),
					seats: ($('#seatsrow').val() * 1) * $('#rows').val(),
				}
			).done(function( data ) {
				console.log(data)
				var obj = JSON.parse(data);
			    console.log(obj.Payload);
			    self.setState({
			        flights: obj.Payload
			    })
			    $('#flight_name').val("")
				$('#departure').val("")
				$('#arrival').val("")
				$('#origin').val("")
				$('#destination').val("")
			});
		})

		$.get( 'http://ec2-35-163-18-92.us-west-2.compute.amazonaws.com:9393/getflights/', function( data ) {
		  	console.log(data)
			var obj = JSON.parse(data);
		    console.log(obj.Payload);
		    if (obj.Payload == null){
			    self.setState({
			        flights: []
			    })
			}else{
				self.setState({
			        flights: obj.Payload
			    })
		}
		});
	}

	setFlight(){
		console.log("Set Flight")
	}
	addFlight(flightName,departure,arrival,origin,destination){
	}
	deleteFlight(flight){
		var self = this;
		var bodyFormData = new FormData();
		bodyFormData.set('id', flight.ID);

		axios.post('http://ec2-35-163-18-92.us-west-2.compute.amazonaws.com:9393/deleteflight/',
		bodyFormData
			)
		 .then(function (response) {
		   console.log(response);
		   self.setState({flights: response.data.Payload})
		 })
	}


	render(){
		return(
			<div className="plane">
				<FlightSection 
					{...this.state} 

					setFlight = {this.setFlight.bind(this)}
					addFlight = {this.addFlight.bind(this)}
					deleteFlight = {this.deleteFlight.bind(this)}
				/>
			</div>
		)
	}
}

export default App;
