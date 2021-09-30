import React, {Component} from 'react';
import AppHeader from '../app-header';
import Advice from '../advice';
import InformBlock from '../inform-block';
import PersonalInfo from '../personal-info';
import WorkExp from '../work-exp';
import Education from '../education';
import Skills from '../skills';
import Courses from '../courses';
import Projects from '../projects';
import TemplateModal from '../template-modal';
import axios from 'axios';
import { saveAs } from 'file-saver';



import Background from './office-bg1.jpg';
import { Route, Switch } from 'react-router';
import { mdiConsoleNetwork } from '@mdi/js';

class App  extends Component {

    state = {
				langArr:[{}],
				docEducation:<></>,
				doc_workExp:<></>,
				doc_skills:<></>,
				doc_courses:<></>,
				doc_projects:<></>,
				doc_links:<></>,
				doc_personal:'<></>',
				workArr:[{}],
				educArr:[{}],
				hardSkills:[{}],
				softSkills:[{}],
				courseArr:[{}],
				projectArr:[{}],
				loading:false,
				template: 0,
				modalActive: false

    }

		AddArray = (property) => {
			const temp = this.state[property];
			temp.push({});
			this.setState({
				[property]: temp
			})
		}

		DeleteArr = (property)=> {
			if (this.state[property].length!==1)
			{
				this.setState({
					[property]:this.state[property].slice(0,-1),
				})
			}
			}

		ChangeArr = (index, name, value, arr) => {
			let tempEl = this.state[arr][index];
			tempEl[name] = value;
			let temp = this.state[arr];
			temp[index] = tempEl;
			this.setState({
				[arr]: temp
			})
		}

    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

		changePhoto = (image) => {
			this.setState({
				photo: image
			})
			console.log(this.state.photo);
		}

		createWorkExpForPdf = () => {
			let workExp='';
			let workExpArr='';
			let check=0;
			this.state.workArr.map(item => {
				if(this.CheckIfEmpty(item)){
					let workItem =`
					<div class="work-history">
						<span class="main-d">${this.CreateStringForItem(item.employer)}</span>
						<span class="light-d">${this.CreateStringForItem(item.city)}</span>
						<div>
							<span class="main-d">${this.CreateStringForItem(item.position)}</span>
							<span class="light-d">${this.CreateStringForItem(item.startMonth)+this.CreateStringForItem(item.startYear)}</span>
					`
					if(item.toCurrentTime===undefined || item.toCurrentTime!== 'on'){
						workItem+=`
						<span class="light-d">-${this.CreateStringForItem(item.finishMonth)+this.CreateStringForItem(item.finishYear)}</span>`
					} else {
						workItem+="<span class='light-d'>- По настоящее время</span>";
					}
					workItem += "</div></div><div class='e-description'>" + this.CreateStringForItem(item.workDescription) + "</div>";
					check+=1;
					return workExpArr += workItem;
				}
			});
			if(check>0){
				workExp="<h2 class='work-exp-title'>Опыт работы</h2><div class='title-line'></div>"+workExpArr;
			}
			this.setState({ doc_workExp: workExp});
		}

		createEducationForPdf = () => {
			let educ='';
			let educArr='';
			let check=0;
			this.state.educArr.map(item => {
				if(this.CheckIfEmpty(item)){
					let educItem =`
					<div class="education">
						<span class="main-d">${this.CreateStringForItem(item.university)}</span>
						<span class="light-d">${this.CreateStringForItem(item.city)}</span>
						<div>
							<span class="main-d">${this.CreateStringForItem(item.degree)}</span
							<span class="main-d">${this.CreateStringForItem(item.Speciality)}</span>
							<span class="light-d">${this.CreateStringForItem(item.finishDegree)}</span>
						</div>
						<div>
							<p>${this.CreateStringForItem(item.educDescription)}</p>
						</div>
					</div>`
					check+=1;
					return educArr+=educItem;
				}
			})
			if(check>0){
				educ = '<h2>Образование</h2><div class="title-line"></div>' + educArr;
			}
			this.setState({ doc_education: educ} );
		}

		createCourseForPdf = () => {
			let courses='';
			let coursesArr='';
			let check=0;
			this.state.courseArr.map(item => {
				if (this.CheckIfEmpty(item)){
					let courseItem =`
					<div class="courses">
						<span class="main-d">${this.CreateStringForItem(item.course)}</span>
						<span class="light-d">${this.CreateStringForItem(item.finishYear)}</span>
						<p>Сертификат: ${this.CreateStringForItem(item.certificate)}</p>
						<p>${this.CreateStringForItem(item.courseDescription)}</p>
					</div>`
					check+=1;
					return coursesArr+=courseItem;
				}
			});
			if(check>0){
				courses = '<h2>Курсы</h2><div class="title-line"></div>'+coursesArr;
			}
			this.setState({doc_courses : courses })
		}

		createSkillsForPdf = () => {
			let skills='';
			let skillsArr='';
			let check=0;
			skillsArr += '<div class="skills"><td class="hard-skills"><ul>'
			this.state.hardSkills.map(item => {
				if(this.CheckIfEmpty(item)) {
					skillsArr +="<li>"+this.CreateStringForItem(item.skill)+"</li>"
					check+=1;
				}
			});
			skillsArr += '</ul></td><td class="soft-skills"><ul>';
			this.state.softSkills.map(item => {
				if(this.CheckIfEmpty(item)) {
					skillsArr +="<li>"+this.CreateStringForItem(item.skill)+"</li>"
					check+=1;
				}
			});
			skillsArr += '</ul></td>';
			if(check>0){
				skills = '<table class="skills"> <h2>Навыки</h2><div class="title-line"></div> <tr>' + skillsArr + '</tr> </table></div>';
			}
			this.setState({ doc_skills: skills });
		}

		createProjectsForPdf = () => {
			let projects='';
			let projectsArr='';
			let check=0;
			this.state.projectArr.map(item => {
				if(this.CheckIfEmpty(item)){
					projectsArr+= `
					<div class="project">
						<div>
							<span class="main-d">${this.CreateStringForItem(item.projectName)}</span>
							<span class="light-d">${this.CreateStringForItem(item.finishYear)}</span>
						</div>
						<p>${this.CreateStringForItem(item.projectLink)}</p>
						<p>${this.CreateStringForItem(item.projectDescription)}</p>
					</div>`
					check+=1;
				}
			});
			if (check>0) {
				projects+='<h2>Другие проекты</h2><div class="title-line"></div>' + projectsArr;
			}
			this.setState({doc_projects: projects});
		}

		createPersonalInfoForPdf = () => {
			let personalInfo='<div> <h1 class="user-name">'+this.CreateStringForItem(this.state.name)+this.CreateStringForItem(this.state.surname)+'</h1> <p class="personal-address">'+this.CreateStringForItem(this.state.address)+'</p> <div class="lineup"></div>';
			if (this.CheckIfEmpty(this.state.description)) {
				personalInfo += '<h2 class="about-myself">О себе</h2><div class="title-line"></div> <p class="personal-description">'+this.CreateStringForItem(this.state.description)+'</p>';
			}
			this.setState({doc_personal: personalInfo});
		}

		createLinksForPdf = () => {
			let links = '<h3 class="p-contacts">Контакты</h3> <div class="right-title-line"></div> <p>'+this.CreateStringForItem(this.state.phone)+'</p> <p>'+this.CreateStringForItem(this.state.email)+'</p> <a>'+this.CreateStringForItem(this.state.portfolio)+'</a>';
			let linksArr='';
			let check = 0;
			this.state.langArr.map(item => {
				if(this.CheckIfEmpty(item,check)){
					check+=1;
					linksArr+='<p>'+this.CreateStringForItem(item.name)+", "+this.CreateStringForItem(item.level)+"</p>"};
			});
			if(check>0){
				links+='<h3 class="p-langs">Языки</h3> <div class="right-title-line"></div>';
				links+=linksArr;
			}
			this.setState({doc_links: links});
		}

		createInfoForPdf = () => {
			this.createWorkExpForPdf();
			this.createEducationForPdf();
			this.createSkillsForPdf();
			this.createCourseForPdf();
			this.createProjectsForPdf();
			this.createPersonalInfoForPdf();
			this.createLinksForPdf();
		}

		CreateStringForItem = (element) => {
			if (element !== undefined){
				return element+" ";
			}else {
				return "" ;
			}
		}

		CheckIfEmpty = (element) => {
			for (var item in element) {
				if (element.hasOwnProperty(item)){
					if (element[item].trim().length!==0) {
						return true;
					}
				}
			}
			return false;
		}


    createAndDownloadPdf = async () => {
			this.setState({loading:true})
			let promise = new Promise((resolve, reject) => {
				setTimeout(() => resolve(this.createInfoForPdf()), 1000)
			})

			let result = await promise;
			axios.post('/create-pdf', this.state)
				.then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
				.then((res) => {
					const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

					saveAs(pdfBlob, 'newPdf.pdf');
				})
				.then(this.setState({loading:false}))

		}

		chooseFirstTemplate = () => {
			this.setState({template: 1})
			this.createAndDownloadPdf()
		}

		chooseSecondTemplate = () => {
			this.setState({template: 2})
			this.createAndDownloadPdf()
		}

		chooseThirdTemplate = () => {
			this.setState({template: 3})
			this.createAndDownloadPdf()
		}

		changeActive = () => {
			this.setState({
				modalActive: false
			})
		}

		openModal = () => {
			this.setState({
				modalActive: true
			})
		}

    render () {
			const rulesTextForPersonal = ['Если вы обладаете портфолио, в котором работодатель может просмотреть ваши работы, или рекомендацией с прошлого места работы – укажите ссылку в резюме.','Адрес проживания должен включать в себя исключительно город и страну, остальная информация считается лишней при рассмотрении вашего резюме.','Указывайте наличие прав в том случае, если интересующая вас должность непосредственно связана с управлением автомобиля.','Оптимальный объем описания – 3 развернутых предложения.','Текст описания должен быть связан непосредственно с вашей должностью и навыками. Не стоит писать про ваши хобби, семейное положение или другую личную информацию. Постарайтесь отобразить, почему именно вы подходите на эту должность.', 'К обязательным требованиям можно отнести: хорошее качество фото, возможность рассмотреть лицо соискателя (никаких темных очков, масок), деловой стиль, на фото должен быть изображен только соискатель, никаких других людей. Не стоит использовать очень яркие и броские изображения.','Не стоит размещать фото, представляющее некоторое ваше хобби, если это хобби не связано непосредственно с должностью.','Подбирать фото также необходимо исходя из должности, которая вас интересует. Например, если вы устраиваетесь на должность, подразумевающую частое общение с другими людьми, постарайтесь выглядеть на фото дружелюбней.'];
			const advicesTextForPersonal = ['Если вы обладаете даже базовым знанием иностранного языка – укажите это в своем резюме, не забыв отметить ваш уровень. Данный навык может выделить вас среди других претендентов, а также оказаться полезным для руководства.','Прочитайте на сайте компании ее миссию и цель, постарайтесь, чтобы в вашем описании вы были представлены как человек, который данные положения разделяет. ','Подбирая фото для резюме, можно придерживаться следующей стратегии: пошли бы вы в таком виде на собеседование? Если нет, то поиск подходящей фотографии следует продолжить. ', 'Не советуется использовать фото из паспорта, хоть так и делают многие. Как правило, на подобных фотографиях человек выглядит довольно неестественно. '];
			const rulesForPersonal = <Advice title = 'Правила заполнения' text={rulesTextForPersonal}/>;
			const advicesForPersonal = <Advice title = 'Советы' text={advicesTextForPersonal}/>

			const rulesTextForWork = ['Укажите лишь те места работы, которые непосредственно относятся к желаемой должности.', 'Обязательно расшифруйте должности, состоящие из аббревиатур, или включающие в себя иностранные слова.', 'В описании укажите ваши конкретные обязанности на описываемой должности, а также ваши карьерные успехи.'];
			const advicesTextForWork = ['Описывая должность, старайтесь избегать размытых формулировок. Укажите конкретные ваши действия и конкретный полученный результат.', 'Удачно, если этот результат можно выразить в количественном выражении – например, «повысил/а выручку на 10%».'];
			const rulesForWork = <Advice title = 'Правила заполнения' text={rulesTextForWork}/>;
			const advicesForWork = <Advice title = 'Советы' text={advicesTextForWork}/>;

			const rulesTextForEducation = ['В графе «местоположение» необходимо указать страну и город обучения.','Если вы еще находитесь в процессе получения диплома, укажите предполагаемый год получения диплома.', 'Первым укажите высшее образование по профессии, указанной в должности, остальные расположите в хронологическом порядке. Также, если данный список оказывается слишком большим, не стоит указывать должности, не связанные с текущей профессией.'];
			const advicesTextForEducation = ['Указывать в данном блоке свое среднее образование можно, но не считается необходимым. В конце концов, работодателя больше интересует то, где кандидат приобретал свои профессиональные навыки – колледж, университет и т.д.', 'Местоположение должно быть указано в соответствии с указанным в дипломе, а не фактическом городе обучения. Например, в дипломах ВШЭ независимо от города обучения стоит «Москва». '];
			const rulesForEducation = <Advice title = 'Правила заполнения' text={rulesTextForEducation}/>;
			const advicesForEducation = <Advice title = 'Советы' text={advicesTextForEducation}/>;

			const rulesTextForSkills = ['Указывайте навыки, требуюемые и/или напрямую связанные с должностью.', 'Не путайте навык и личное качество. Навыки, в отличие от качеств, можно развить путем практики. Например, к навыкам можно отнести «Умение работать в команде», а к качествам «дружелюбность».'];
			const advicesTextForSkills=['Старайтесь избегать банальных формулировок и навыков при заполнении блока с общими навыками – главная цель резюме выделить вас среди остальных кандидатов. '];
			const rulesForSkills = <Advice title = 'Правила заполнения' text={rulesTextForSkills}/>;
			const advicesForSkills = <Advice title = 'Советы' text={advicesTextForSkills}/>;

			const advicesTextForCourses = ['Укажите только те курсы, которые непосредственно связаны с вашей профессией'];
			const advicesForCourses = <Advice title = 'Советы' text={advicesTextForCourses}/>;

			const advicesTextForProjects = ['Если у вас отсутствует опыт работы, но, например, имеются крупные работы из университета (курсовая работа, дипломная работа) – опишите их, прикрепив ссылку. '];
			const advicesForProjects = <Advice title = 'Советы' text={advicesTextForProjects}/>;

        return (
					<div>
            <div style={{backgroundColor: "#d0c8e5"}} className="app">
                <AppHeader />
                <InformBlock rules={rulesForPersonal} advices={advicesForPersonal}  component={<PersonalInfo array={this.state.langArr} addLanguage={this.AddArray} handleArrChange={this.ChangeArr} handleChange={this.handleChange} deleteLanguage={this.DeleteArr} photoChange={this.changePhoto}/>} name='Личные данные'/>
								<InformBlock rules={rulesForWork} advices={advicesForWork} component={<WorkExp array={this.state.workArr} addExp={this.AddArray} handleChange={this.ChangeArr} deleteExp={this.DeleteArr}/>} name='Опыт работы' />
								<InformBlock rules={rulesForEducation} advices={advicesForEducation} component={<Education array={this.state.educArr} addEduc={this.AddArray} handleChange={this.ChangeArr} deleteEduc={this.DeleteArr}/>} name='Образование' />
								<InformBlock rules={rulesForSkills} advices={advicesForSkills} component={<Skills array={this.state.hardSkills} addSkill={this.AddArray} handleChange={this.ChangeArr} deleteSkill={this.DeleteArr} nameArr='hardSkills'/>} name='Hard Skills' />
								<InformBlock rules={rulesForSkills} advices={advicesForSkills} component={<Skills array={this.state.softSkills} addSkill={this.AddArray} handleChange={this.ChangeArr} deleteSkill={this.DeleteArr} nameArr='softSkills'/>} name='Soft Skills' />
								<InformBlock advices = {advicesForCourses} component={<Courses array={this.state.courseArr} addCourse={this.AddArray} handleChange={this.ChangeArr} deleteCourse={this.DeleteArr}/>} name='Курсы' />
								<InformBlock advices = {advicesForProjects} component={<Projects array={this.state.projectArr} addProject={this.AddArray} handleChange={this.ChangeArr} deleteProject={this.DeleteArr}/>} name='Другие проекты' />
								<button onClick={this.openModal} style={{marginTop: '20px',  display:'block', marginLeft:'auto', marginRight:'auto', backgroundColor:'#00d1b2', color:'white' }} className="button">Загрузить PDF файл</button>
            </div>
						<TemplateModal active={this.state.modalActive} showModal={this.changeActive} first={this.chooseFirstTemplate} second = {this.chooseSecondTemplate} third={this.chooseThirdTemplate} loading={this.state.loading}/>
						</div>

        )
    }
}

export default App;