import React, {Component} from 'react';

class ProjectInfo extends Component {

	state = {
		index: this.props.index,
		changeApp: this.props.handleChange
	}

	handleChange = ({ target: { value, name }}) => {
		this.setState({ [name]: value });
		this.state.changeApp(this.state.index, name, value, 'projectArr');
	}


		render() {
			return (
				<div style={{marginLeft: '10%', width: '80%'}}>
										<div>
							<div class="field">
								<label class="label">Название</label>
								<div class="control">
									<input class="input" type="text" placeholder="Название проекта"  name="projectName" onChange={this.handleChange}/>
								</div>
							</div>
							<div class="columns">
								<div class="field column is-10">
									<label class="label">Ссылка</label>
									<div class="control">
										<input class="input" type="text" placeholder="Ссылка"  name="projectLink" onChange={this.handleChange}/>
									</div>
								</div>
								<div class="column is-2">
									<label class="label">Дата выполнения</label>
									<div class="select is-normal">
										<select name="finishYear" onChange={this.handleChange} style={{width: '200px'}}>
										<option disabled selected value>  </option>
											<option>2021</option><option>2020</option><option>2019</option>
											<option>2018</option><option>2017</option><option>2016</option>
											<option>2015</option><option>2014</option><option>2013</option>
											<option>2012</option><option>2011</option><option>2010</option>
											<option>2009</option><option>2008</option><option>2007</option>
											<option>2006</option><option>2005</option><option>2004</option>
											<option>2003</option><option>2002</option><option>2001</option>
										</select>
									</div>
								</div>
							</div>
							<div>
								<label class="label">Описание</label>
								<textarea class="textarea" placeholder="Опишите место работы" name="projectDescription" onChange={this.handleChange}></textarea>
							</div>
						</div>
			</div>
			);
		}
};

export default ProjectInfo;