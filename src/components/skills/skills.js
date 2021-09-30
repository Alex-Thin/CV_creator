import React, {Component} from 'react';
import SkillInfo from '../skill-info';

class Skills extends Component {

	addSkill= () => {
		return this.props.addSkill(this.props.nameArr);
	}
	deleteSkill = () => {
		return this.props.deleteSkill(this.props.nameArr)
	}

		render() {
			const DeleteBtn = this.props.array.length!==1? <button class="button is-primary" style={{marginTop: '1em', marginLeft: '10%', width: '200px', marginBottom: '1em', backgroundColor: '#FF5733'}} onClick={this.deleteSkill}>Удалить нывык</button> : null;
						return (
				<div style={{marginBottom: '20px', width: '100%'}}>
				<div>
					<div>
						{this.props.array.map((info, index) =>
							<SkillInfo handleChange={this.props.handleChange} index={index} elem={info} nameArr={this.props.nameArr}/> )}
							{DeleteBtn}
							<button class="button is-primary" style={{marginTop: '2em',  marginLeft: '76%', width: '175px'}} onClick={this.addSkill}> Добавить навык </button>
					</div>
					</div>
			</div>
			);
		}
};

export default Skills;