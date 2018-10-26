import React, { Component } from 'react';

import ActionBarList from './ActionBarList';

class ActionBar extends Component {
    render() {
        return (
            <div className="action-bar-global">
                <ActionBarList
                    actionBarItems={this.props.actionBarItems}
                    activeStyles={this.props.activeStyles}
                />
            </div>
        );
    }
}

export default ActionBar;
