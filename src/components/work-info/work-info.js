import React, {Component} from 'react';

class WorkInfo extends Component {

		state = {
			index: this.props.index,
			changeApp: this.props.handleChange
		}

		handleChange = ({ target: { value, name }}) => {
			this.setState({ [name]: value });
			this.state.changeApp(this.state.index, name, value, 'workArr');
		}

		render() {
			return (
				<div style={{marginLeft: '10%', width: '80%'}}>
				<div>
					<div>
						<div class="field">
							<label class="label">Должность</label>
							<div class="control">
								<input class="input" type="text" placeholder=""  name="position" onChange={this.handleChange} />
							</div>
						</div>
						<div class="field">
							<label class="label">Местоположение</label>
							<div class="control">
								<input class="input" type="text" placeholder="Город, Страна"  name="city" onChange={this.handleChange}/>
							</div>
						</div>
						<div class="field">
							<label class="label">Работодатель</label>
							<div class="control">
								<input class="input" type="text" placeholder="Название компании"  name="employer" onChange={this.handleChange}/>
							</div>
						</div>
						<div class="columns">
							<div class="column is-2">
								<label class="label">Дата начала</label>
								<div class="select is-normal">
									<select name="startMonth" onChange={this.handleChange}>
									<option disabled selected value>  </option>
										<option>Январь</option>
										<option>Февраль</option>
										<option>Март</option>
										<option>Апрель</option>
										<option>Май</option>
										<option>Июнь</option>
										<option>Июль</option>
										<option>Август</option>
										<option>Сентябрь</option>
										<option>Октябрь</option>
										<option>Ноябрь</option>
										<option>Декабрь</option>
									</select>
								</div>
							</div>
							<div class="column is-2">
								<div class="select is-normal" style={{marginTop: '32px'}}>
									<select name="startYear" onChange={this.handleChange} style={{height: '40px'}}>
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
							<div class="column is-2">
								<label class="label">Дата окончания</label>
								<div class="select is-normal">
									<select name="finishMonth" onChange={this.handleChange}>
									<option disabled selected value>  </option>
										<option>Январь</option>
										<option>Февраль</option>
										<option>Март</option>
										<option>Апрель</option>
										<option>Май</option>
										<option>Июнь</option>
										<option>Июль</option>
										<option>Август</option>
										<option>Сентябрь</option>
										<option>Октябрь</option>
										<option>Ноябрь</option>
										<option>Декабрь</option>
									</select>
								</div>
							</div>
							<div class="column is-2">
								<div class="select is-normal" style={{marginTop: '32px'}}>
									<select name="finishYear" onChange={this.handleChange} style={{height: '40px'}}>
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
							<div class="column is-2">
								<input type="checkbox" name="toCurrentTime" onChange={this.handleChange} style={{marginTop: '30%'}}/>
								<label class="checkbox" style={{marginLeft: '1em'}}>По наст. время</label>
							</div>
						</div>
						<div>
							<label class="label">Описание</label>
							<textarea class="textarea" placeholder="Опишите ваши достижения и обязанности на данном месте работы" name="workDescription" onChange={this.handleChange}></textarea>
						</div>
					</div>
					</div>
			</div>
			);
		}
};

export default WorkInfo;