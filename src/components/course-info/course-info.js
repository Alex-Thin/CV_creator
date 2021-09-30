import React, {Component} from 'react';

class CourseInfo extends Component {

	state = {
		index: this.props.index,
		changeApp: this.props.handleChange
	}

	handleChange = ({ target: { value, name }}) => {
		this.setState({ [name]: value });
		this.state.changeApp(this.state.index, name, value, 'courseArr');
	}


		render() {
			return (
				<div style={{marginLeft: '10%', width: '80%'}}>
					<div class="field">
						<label class="label">Название</label>
						<div class="control">
							<input class="input" type="text" placeholder="Skillbox"  name="course" onChange={this.handleChange}/>
						</div>
					</div>
					<div class="columns">
						<div class="column is-2">
						<label class="label">Дата окончания</label>
							<div class="select is-normal">
								<select name="finishYear" onChange={this.handleChange}>
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
					<div class="field">
						<label class="label">Сертификат</label>
						<div class="control">
							<input class="input" type="text" placeholder="Ссылка"  name="certificate" onChange={this.handleChange}/>
						</div>
					</div>
					<div>
						<label class="label">Описание</label>
						<textarea class="textarea" placeholder="Опишите место работы" name="courseDescription" onChange={this.handleChange}></textarea>
					</div>
			</div>
			);
		}
};

export default CourseInfo;