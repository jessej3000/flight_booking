import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import InfoSection from './components/InfoSection.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			flights: flightsDB,
		};
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
