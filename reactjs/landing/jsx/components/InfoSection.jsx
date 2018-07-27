import React, {Component} from 'react';
import InfoForm from './InfoForm.jsx';
import PropTypes from 'prop-types';

class InfoSection extends Component{
	render(){
		return(
			<div className="row">
				<div className="col s12">
					<div className="card">
						<div className="card-image">
							<img src="/images/plane1.jpg" />
							<span className="card-title" style={{top:0}}>Actelligent Airlines</span>
						</div>
						<div className="card-content">
							<InfoForm {...this.props} />
						</div>
					</div>
				</div>
			</div>
		)
	}

}

InfoSection.propTypes = {
	flights: PropTypes.array.isRequired
}

export default InfoSection