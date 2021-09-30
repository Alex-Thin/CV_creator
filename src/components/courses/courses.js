import React, {Component} from 'react';
import CourseInfo from '../course-info';

class Courses extends Component {

	addCourse= () => {
		return this.props.addCourse('courseArr');
	}
	deleteCourse = () => {
		return this.props.deleteCourse('courseArr')
	}

		render() {
			const DeleteBtn = this.props.array.length!==1? <button class="button is-primary" style={{marginTop: '1em', marginLeft: '10%', width: '200px', marginBottom: '1em', backgroundColor: '#FF5733'}} onClick={this.deleteCourse}>Удалить запись</button> : null;
						return (
				<div style={{marginBottom: '20px',width: '100%'}}>
				<div>
					<div>
						{this.props.array.map((info, index) =>
							<CourseInfo handleChange={this.props.handleChange} index={index} elem={info} /> )}
							{DeleteBtn}
							<button class="button is-primary" style={{marginTop: '2em',  marginLeft: '76%', width: '175px'}} onClick={this.addCourse}> Добавить запись </button>
					</div>
					</div>
			</div>
			);
		}
};

export default Courses;