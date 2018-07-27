import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ChannelForm extends Component{
	onSubmit(e){
		e.preventDefault();
		const flightName = this.refs.flight_name;
		const departure = this.refs.departure;
		const arrival = this.refs.arrival;
		const origin = this.refs.origin;
		const destination = this.refs.destination;
		/*const node = this.refs.channel;
		const channelName = node.value;*/
		if(flightName.value.trim().length>0){
			this.props.addFlight(flightName.value,departure.value,arrival.value,origin.value,destination.value)
		}
		/*flightName.value = '';
		departure.value = '';
		arrival.value = '';
		origin.value = '';
		destination.value = '';*/

				/*<div className='form-group'>
					<input
						className='form-control'
						placeholder='Add Channel'
						type= 'text'
						ref = 'channel'
					/>
				</div>*/
	}
	render(){
		return (
			<form onSubmit = {this.onSubmit.bind(this)}>
				<div className="row">
					<div className="input-field col s2">
						<input id="flight_name" type="text" className="validate" ref="flight_name" />
						<label htmlFor="flight_name">Flight Name</label>
					</div>
					<div className="input-field col s5">
						<select id="seatsrow">
							<option value="" disabled defaultValue>Choose your layout</option>
							<option value="6">6 Seats/Row</option>
							<option value="10">10 Seats/Row</option>
						</select>
						<label>Select Seats Layout</label>
					</div>
					<div className="input-field col s5">
						<select id="rows">
							<option value="" disabled defaultValue>Choose number of rows</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
							<option value="16">16</option>
							<option value="17">17</option>
							<option value="18">18</option>
							<option value="19">19</option>
							<option value="20">20</option>
							<option value="21">21</option>
							<option value="22">22</option>
							<option value="23">23</option>
							<option value="24">24</option>
							<option value="25">25</option>
							<option value="26">26</option>
							<option value="27">27</option>
							<option value="28">28</option>
							<option value="29">29</option>
							<option value="30">30</option>
							<option value="31">31</option>
							<option value="32">32</option>
							<option value="33">33</option>
							<option value="34">34</option>
							<option value="35">35</option>
							<option value="36">36</option>
							<option value="37">37</option>
							<option value="38">38</option>
							<option value="39">39</option>
							<option value="40">40</option>
							<option value="41">41</option>
							<option value="42">42</option>
							<option value="43">43</option>
							<option value="44">44</option>
							<option value="45">45</option>
							<option value="46">46</option>
							<option value="47">47</option>
							<option value="48">48</option>
							<option value="49">49</option>
							<option value="50">50</option>
							<option value="51">51</option>
							<option value="52">52</option>
							<option value="53">53</option>
							<option value="54">54</option>
							<option value="55">55</option>
							<option value="56">56</option>
							<option value="57">57</option>
							<option value="58">58</option>
							<option value="59">59</option>
							<option value="60">60</option>
						</select>
						<label>Select Number of Rows</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s2">
						<input id="departure" type="text" className="timepicker" ref="departure" />
						<label htmlFor="departure">Departure</label>
					</div>
					<div className="input-field col s2">
						<input id="arrival" type="text" className="timepicker" ref="arrival" />
						<label htmlFor="arrival">Arrival</label>
					</div>
					<div className="input-field col s3">
						<input id="origin" type="text" className="validate" ref="origin" />
						<label htmlFor="origin">Origin</label>
					</div>
					<div className="input-field col s3">
						<input id="destination" type="text" className="validate" ref="destination" />
						<label htmlFor="destination">Destination</label>
					</div>
					<div className="input-field col s2">
						<button className="btn waves-effect waves-light" type="submit" name="action">Submit
							<i className="material-icons right">send</i>
						</button>
					</div>
				</div>
			</form>
		)
	}
}

ChannelForm.propTypes = {
	addFlight: PropTypes.func.isRequired
}

export default ChannelForm
