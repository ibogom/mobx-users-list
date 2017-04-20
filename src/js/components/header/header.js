/**
 * Created by ibogom on 4/11/17.
 */
import React from "react";
import {observer} from "mobx-react";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

@observer
export default class Header extends React.Component {

    _handleOpenMenu(e) {
        e.stopPropagation();
        this.props.store.isMenuOpen = !this.props.store.isMenuOpen;
    }

    render(){
        return (
        <AppBar
            title={this.props.store.title}
            onLeftIconButtonTouchTap={this._handleOpenMenu.bind(this)}
            iconElementLeft={
                <IconButton>
                    <span className="material-icons">{ this.props.store.isMenuOpen ? 'close' : 'menu' }</span>
                </IconButton>
            }
        />
        )
    }
}