import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import InfoSection from './components/InfoSection.jsx';
import $ from 'jquery';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			flights: [],
		};
	}
	componentDidMount(){
		var self = this;
		$.get( 'http://localhost:8282/getflights/', function( data ) {
		  	console.log(data)
			var obj = JSON.parse(data);
		    console.log(obj.Payload);
		    self.setState({
		        flights: obj.Payload
		    })
		});
	}
	render(){
		return(
			<div className='container'>
				<div className='nav col s6 nopadding whole-screen-height'>
					<InfoSection {...this.state}/>
				</div>
			</div>
		)
	}
}

export default App
