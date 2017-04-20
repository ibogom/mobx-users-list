/**
 * Created by ibogom on 4/11/17.
 */

import React from "react";
import { observer } from "mobx-react";
import TextField from 'material-ui/TextField';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import './search.scss';

@observer
export default class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            filterData: ''
        }
    }

    _handleSearch(e){
        this.props.store.filter = e.target.value;
        this.setState({
            filterData: e.target.value
        })
    }

    _handleClearData(){
        this.props.store.filter = '';
        this.setState({
            filterData: ''
        })
    }

    render(){
        return (
            <Card className="search-wrapper">
                <CardTitle title="Find user"/>
                <TextField
                    className="text"
                    fullWidth={true}
                    value={this.state.filterData}
                    onChange={this._handleSearch.bind(this)}
                />
                <RaisedButton
                    secondary={true}
                    fullWidth={true}
                    onTouchTap={this._handleClearData.bind(this)}>
                    CLEAR
                </RaisedButton>
            </Card>
        )
    }
}