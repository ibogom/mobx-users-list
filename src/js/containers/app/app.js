/**
 * Created by ibogom on 4/10/17.
 */

import React from "react";
import {observer} from "mobx-react";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './app.scss';

@observer
export default class App extends React.Component {

    render() {
        return (
            <div id="app-wrapper">
                    {this.props.children}
            </div>
        )
    }
}