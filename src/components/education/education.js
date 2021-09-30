import React, {Component} from 'react';
import EducationInfo from '../education-info/education-info';

class Education extends Component {

	addExp= () => {
		return this.props.addEduc("educArr");
	}

	deleteExp = () => {
		return this.props.deleteEduc("educArr")
	}

		render() {
			const DeleteBtn =this.props.array.length!==1? <button class="button is-primary" style={{marginTop: '1em', marginLeft: '10%', width: '270px', marginBottom: '1em', backgroundColor: '#FF5733'}} onClick={this.deleteExp}>Удалить запись об образовании</button> : null;
						return (
				<div style={{marginBottom: '20px', width: '100%'}}>
					{this.props.array.map((info, index) =>
						<EducationInfo handleChange={this.props.handleChange} index={index} elem={info}/> )}
						{DeleteBtn}
					<button class="button is-primary" style={{marginTop: '2em',  marginLeft: '76%', width: '175px'}} onClick={this.addExp}>Добавить запись</button>
				</div>
			);
		}
};

export default Education;