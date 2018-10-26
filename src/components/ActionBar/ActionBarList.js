import React, { Component } from 'react';

import ActionBarDropDown from './ActionBarDropDown';

class ActionBarList extends Component {
    constructor() {
        super();

        this.state = {
            activeValue: ""
        }
    }

    _onMouseOver = (value) => this.setState({ activeValue: value});
    _onMouseOut = (val) => {
        this.setState({activeValue: ""});
        console.log(`[_onMouseOut]-${val}`)
    }

    render() {
        const { actionBarItems, activeStyles } = this.props;
        const { activeValue } = this.state;
        const data = actionBarItems ? actionBarItems.map(item => (
            <ActionBarDropDown
                key={item.url}
                _onMouseOver={() => this._onMouseOver(item.title)}
                _onMouseOut={() => this._onMouseOut(item.title)}
                data={item.title}
                status={item.active}
                activeValue={activeValue}
                expanded={item.dropDownItems.length > 0}
            />
            )
        ) : "No items";
        return (
            <div>
                <ul
                    className={activeStyles}
                    id="myList"
                >
                    {data}
                </ul>

            </div>
        );
    }
}

export default ActionBarList;
