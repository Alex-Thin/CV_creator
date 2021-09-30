import React, {Component} from 'react';
import Error from '../error';

class LangBlock extends Component {

	state = {
		index: this.props.index,
		changeApp: this.props.handleChange
	}
	handleChange = ({ target: { value, name }}) => {
		this.setState({ [name]: value });
		this.state.changeApp(this.state.index, name, value, 'langArr');
	}

    render() {


        return (
            <div class="columns" style={{marginTop: '1em'}}>
            <label class="column is-1" style={{marginTop: '-3px'}}>Язык</label>
				 		<input class="input column is-3" type="text" name='name' onChange={this.handleChange} />
						<label class="column is-1" style={{marginTop: '-3px'}}>Уровень</label>
						<input class="input column is-3" type="text" name='level' onChange={this.handleChange}/>
            </div>
        )
    }
};

export default LangBlock;