import React, {Component} from 'react';
import './inform-block.scss';
import Error from '../error';
import BlockHeader from '../block-header';
import arrowIconClosed from './arrow-bar-up.svg';
import arrowIconOpen from './arrow-bar-down.svg';

class InformBlock extends Component {

    state = {
        showComponent: true,
        icon: arrowIconOpen
    }

    onToggleItem = () => {
        if (this.state.showComponent)
        {
            this.setState({
                showComponent:false,
                icon: arrowIconClosed
            })
        }else {
            this.setState({
                showComponent:true,
                icon: arrowIconOpen
            })
        };

    }

    render() {
        const {component, error, rules, advices} = this.props;
        if (error) {
            return <Error/>
        }
        const classForCompomemt = this.state.showComponent? "" : 'no_display';
				console.log(this.props.text)

        return (
            <div className='inform_block'>
                <BlockHeader title = {this.props.name} onToggleItem = {this.onToggleItem} icon = {this.state.icon}/>
								<div className={classForCompomemt}>
								{rules}
								{advices}
                {component}
								</div>
            </div>
        )
    }
};

export default InformBlock;