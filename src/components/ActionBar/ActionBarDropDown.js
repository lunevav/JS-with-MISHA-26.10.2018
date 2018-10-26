import React, { Component } from 'react';
import Item from './Item';

class ActionBarDropDown extends Component {


    componentWillReceiveProps(nextProps) {

    }

    // TODO ! ! ! ! ! !
    // TODO GOOD LUCK! ! !
    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.data === nextProps.activeValue)
        //     return true;
        //
        // if (this.props.data === this.props.activeValue)
        //     return true;
        //
        // return false;
        return true;
    }

    render() {
        const {
            data,
            active,
            activeValue,
            _onMouseOver,
            _onMouseOut
        } = this.props;
        console.log('[ActionBarDropDown][render]')
        return (
            <li
                onMouseEnter={_onMouseOver}
                onMouseLeave={_onMouseOut}
                className="navItem"
            >
                <Item
                    data={data}
                    status={active}
                />
                { data === activeValue ? <ul className="show">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul> : <div></div> }
            </li>
        );
    }
}

export default ActionBarDropDown;
