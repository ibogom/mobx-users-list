/**
 * Created by ibogom on 4/12/17.
 */

import React from "react";
import {observer} from "mobx-react";
import Drawer from 'material-ui/Drawer';
import { Toolbar , ToolbarTitle }  from 'material-ui/Toolbar';

@observer
export default class Menu extends React.Component {

    _handleToggleMenu(){
        this.props.store.isMenuOpen = !this.props.store.isMenuOpen;
    }
    render(){
        return (
            <Drawer
                open={this.props.store.isMenuOpen}
                width={250}
                onTouchTap={this._handleToggleMenu.bind(this)}
                onRequestChange={this._handleToggleMenu.bind(this)}
                docked={false}
            >
                <Toolbar>
                    <ToolbarTitle text={this.props.store.title} />
                </Toolbar>
                { this.props.children }
            </Drawer>
        )
    }
}