import React, {Component} from 'react';
import './doc-block.scss';

class DocBlock extends Component {

		render() {
			return (
				<div className='doc'>
					<img className='doc_image' src={this.props.image}/>
					<p></p>
					<a className='doc_text' onClick={this.props.downloadPdf}>{this.props.name}</a>
				</div>
			);
		}
};

export default DocBlock;