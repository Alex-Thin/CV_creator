import React, {Component} from 'react';
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';
import LangBlock from '../lang-block/lang-block';

class PersonalInfo extends Component {
    state =  {
        photo: null,
    }

		addLanguage= () => {
			return this.props.addLanguage('langArr');
		}
		deleteLanguage = () => {
			return this.props.deleteLanguage('langArr')
		}

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
            image: URL.createObjectURL(img),
						filename: img.name
        });
				this.readFile(img, function(e) {
					console.log(e.target.result)
				})
			};
		}

		async readFile(file, callback) {
			var reader = new FileReader();
			reader.readAsDataURL(file);

			let promise = new Promise((resolve, reject) => {
				var reader = new FileReader();

				setTimeout(() => resolve(reader.readAsDataURL(file)), 1000)
			})

			let result = await promise;
			this.props.photoChange(reader.result)
		}

		//AddLanguage = () => {
		//	const temp = this.state.langBlocksArr;
		//	temp.push(<LangBlock index={this.state.langBlocksArr.length} langChange={this.props.langChange} deleteLang={this.props.DeleteLanguage}/>);
		//	this.setState({
		//		langBlocksArr: temp
		//	})
		//	this.props.langAdded();
		//}


		render() {
			const DeleteBtn = this.props.array.length!==1? <button class="button is-primary" style={{marginTop: '1em', width: '200px', marginBottom: '1em', backgroundColor: '#FF5733'}} onClick={this.deleteLanguage}>Удалить запись</button> : null;
			return (
				<div style={{marginLeft: '10%', width: '80%'}}>
					<div>
						<div>
							<div class="columns">
								<div class="column is-3">
									<div class="file has-name is-boxed" style={{display: 'block'}}>
										<label class="file-label">
											<input type="file" name="myImage" onChange={this.onImageChange} class="file-input" />
											<div class="file-cta" style={{height: '240px', width: '100%'}}>
												{this.state.image
													?	<div
															class="image"
															style={{width: '300%', height: '300%', marginTop: '-1em'}}>
															<img src={this.state.image}/>
														</div>
													:
													<div>
														<span class="file-icon">
															<i class="fas fa-upload"></i>
														</span>
														<span class="file-label">
															Выберите файл…
														</span>
													</div>
												}
											</div>
										</label>
									</div>
								</div>
								<div class="column is-9">
									<div class="field">
										<label class="label">Имя</label>
										<div class="control">
											<input class="input" type="text"  placeholder="Александр" name="name" onChange={this.props.handleChange}/>
										</div>
									</div>
									<div class="field">
										<label class="label">Фамилия</label>
										<div class="control">
											<input class="input" type="text" placeholder="Петров"  name="surname" onChange={this.props.handleChange}/>
										</div>
									</div>
									<div class="columns">
										<div class="column is-6">
											<div class="field">
												<label class="label">Email</label>
												<div class="control">
													<input class="input" type="text" placeholder="example@gmail.com"  name="email" onChange={this.props.handleChange} />
												</div>
											</div>
										</div>
										<div class="column is-6">
											<div class="field">
												<label class="label">Телефон</label>
												<div class="control">
													<input class="input" type="text" placeholder="+79990010010"  name="phone" onChange={this.props.handleChange}/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="field">
								<label class="label">Адрес</label>
								<div class="control">
									<input class="input" type="text" placeholder="Пермь, Россия"  name="address" onChange={this.props.handleChange} />
								</div>
							</div>
							<div class="field">
								<label class="label">Языки</label>
								<div style={{marginTop: '1em'}}>
								{this.props.array.map((info, index) =>
									<LangBlock handleChange={this.props.handleArrChange} index={index} elem={info} /> )}
									<div style={{marginTop: '-2.9em', marginLeft: '70%'}}>
										<Icon path={mdiPlusCircleOutline}
											size={1}
											color="green"
											onClick = {this.addLanguage}/>
									</div>
									{DeleteBtn}
								</div>
							</div>
							<div class="field">
								<label class="label">Портфолио</label>
								<div class="control">
									<input class="input" type="text" placeholder="Ссылка"  name="portfolio" onChange={this.props.handleChange}/>
								</div>
							</div>
							<div style={{marginBottom: '20px'}}>
								<label class="label">О себе</label>
								<textarea class="textarea" placeholder="Опишите себя" name="description" onChange={this.props.handleChange}></textarea>
							</div>
						</div>
					</div>
				</div>
			);
		}
};

export default PersonalInfo;