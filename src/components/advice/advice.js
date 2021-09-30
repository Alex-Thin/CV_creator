import React, {Component} from 'react';
import './advice.scss';
import Error from '../error';

class Advice extends Component {

    state = {
        showAdvice: false
    }

    ToggleAdvice = () => {
        this.setState((state) => {
            return {
                showAdvice: !state.showAdvice
            }
        });
    }

    render() {
        const {title, text, error} = this.props;
        if (error) {
            return <Error/>
        }

        const text_points = text.map((point) => <li>{point}</li>)
        const element = this.state.showAdvice? <ul className="advice_text">{text_points}</ul> : null; 

        return (
            <>
            <div className='advice' onClick = {this.ToggleAdvice} >{title}</div>
            {element}
            </>
        )
    }
};

export default Advice;