import React, {Component} from 'react';
import './template-modal.scss';
import DocBlock from '../doc-block';
import Stylish from './stylish.png';
import Regular from './reg.png';
import Princeton from './princeton.png';
import Spinner from '../spinner';

class TemplateModal extends Component {

		render() {
			const Spin = this.props.loading? <Spinner /> : null;
			console.log(this.props.active);
			return (
				<div className={this.props.active ? 'modal_window active' : 'modal_window'} onClick={this.props.showModal}>
					<div className={this.props.active ? 'modal__content active': 'modal__content'} onClick={e => e.stopPropagation()}>
						<table>
							<th>
								<DocBlock image={Stylish} name ='Стильный шаблон' downloadPdf={this.props.first}/>
							</th>
							<th>
								<DocBlock image={Regular} name ='Обычный шаблон' downloadPdf={this.props.second}/>
							</th>
							<th>
								<DocBlock image={Princeton} name ='PrinceTon' downloadPdf={this.props.third}/>
							</th>
						</table>
						{Spin}
					</div>
				</div>
			);
		}
};

export default TemplateModal;