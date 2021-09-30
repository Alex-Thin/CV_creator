import React, {Component} from 'react';

class SkillInfo extends Component {

	state = {
		index: this.props.index,
		changeApp: this.props.handleChange
	}

	handleChange = ({ target: { value, name }}) => {
		this.setState({ [name]: value });
		this.state.changeApp(this.state.index, name, value, this.props.nameArr);
	}


		render() {
			return (
			<div style={{marginLeft: '10%', width: '80%'}}>
				<div class="field">
					<label class="label">Навык</label>
					<div class="control">
						<input class="input" type="text" placeholder="SQL"  name="skill" onChange={this.handleChange}/>
					</div>
				</div>
			</div>
			);
		}
};

export default SkillInfo;