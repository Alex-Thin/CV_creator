import React, {Component} from 'react';
import WorkInfo from '../work-info';

class WorkExp extends Component {

	addExp= () => {
		return this.props.addExp("workArr");
	}
	deleteExp = () => {
		return this.props.deleteExp("workArr")
	}

		render() {
			const DeleteBtn = this.props.array.length!==1? <button class="button is-primary" style={{marginTop: '1em', marginLeft: '10%', width: '200px', marginBottom: '1em', backgroundColor: '#FF5733'}} onClick={this.deleteExp}>Удалить место работы</button> : null;
						return (
				<div style={{width: '100%'}}>
				<div>
					<div>
						{this.props.array.map((info, index) =>
							<WorkInfo handleChange={this.props.handleChange} index={index} elem={info}/> )}
							{DeleteBtn}
						<button class="button is-primary" style={{marginTop: '1em', marginLeft: '74%', marginBottom: '1em', width: '200px'}} onClick={this.addExp}>Добавить место работы</button>
					</div>
					</div>
			</div>
			);
		}
};

export default WorkExp;