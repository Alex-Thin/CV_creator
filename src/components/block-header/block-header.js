import React, {Component} from 'react';
import './block-header.scss';

class BlockHeader extends Component {

    render() {
        const {title, onToggleItem, icon} = this.props;

        return (
                <div className='block_header'>
                <header className='text' style={{marginLeft: '4.5em'}}>{title}</header>
                <img className="block_icons" src={icon} alt="arrow_open" onClick={onToggleItem}></img>
                </div>
        )
    }
};

export default BlockHeader;