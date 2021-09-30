import React, {Component} from 'react';
import ProjectInfo from '../project-info';

class Projects extends Component {

	addProject= () => {
		return this.props.addProject('projectArr');
	}
	deleteProjects = () => {
		return this.props.deleteProject('projectArr')
	}

		render() {
			const DeleteBtn = this.props.array.length!==1? <button class="button is-primary" style={{marginTop: '1em', marginLeft: '10%', width: '200px', marginBottom: '1em', backgroundColor: '#FF5733'}} onClick={this.deleteProjects}>Удалить запись</button> : null;
						return (
				<div style={{marginBottom: '20px', width: '100%'}}>
				<div>
					<div>
						{this.props.array.map((info, index) =>
							<ProjectInfo handleChange={this.props.handleChange} index={index} elem={info} /> )}
							{DeleteBtn}
							<button class="button is-primary" style={{marginTop: '2em',  marginLeft: '76%', width: '175px'}} onClick={this.addProject}> Добавить запись </button>
					</div>
					</div>
			</div>
			);
		}
};

export default Projects;