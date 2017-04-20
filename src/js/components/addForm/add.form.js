/**
 * Created by ibogom on 4/13/17.
 */

import React from "react";
import {observer} from "mobx-react";
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ValidationUtil from '../../utils/validation.util';

import './add.form.scss';

@observer
export default class AddForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstNameError: '',
            firstName: '',
            lastNameError: '',
            lastName: '',
            companyError: '',
            company: '',
            phoneError: '',
            phone: ''
        }
        this.validation = new ValidationUtil();
    }

    _handleSaveAction(e){
        e.preventDefault();
        this.doValidation({
            state: this.state
        }).then(function (error) {
            return !error ? this.props.store.addUser(this.state) : false;
        }.bind(this));
    }

    _handleInputChange(e){
        this.doValidation({
            data: e.currentTarget.value,
            field: e.currentTarget.name
        });
    }

    doValidation(options){
        return this.validation.doValidate(options)
                .then(this.onValidationSuccess.bind(this, options), this.onValidationFail.bind(this, options));
    }

    onValidationSuccess(options, value){
        this.setState({
            [options.field]: value,
            [options.field + 'Error']: ''
        });
    }

    onValidationFail(options, message){
        if(Array.isArray(message)) {
            message.forEach(function (error) {
                this.setState({[Object.keys(error)[0] + 'Error']: error[Object.keys(error)[0]]});
            }.bind(this))
        } else {
            this.setState({[options.field + 'Error']: message});
        }
        return new Error("validation failed");
    }

    render(){
        return <Card className="add-form-wrapper">
                <CardTitle title="Add new user"/>
                            <TextField
                                className="text-field"
                                floatingLabelText="First Name"
                                name="firstName"
                                fullWidth={true}
                                errorText= {this.state.firstNameError}
                                onChange={this._handleInputChange.bind(this)}
                            />
                            <TextField
                                className="text-field"
                                floatingLabelText="Last Name"
                                name="lastName"
                                fullWidth={true}
                                errorText= {this.state.lastNameError}
                                onChange={this._handleInputChange.bind(this)}
                            />
                            <TextField
                                className="text-field"
                                floatingLabelText="Company name"
                                name="company"
                                fullWidth={true}
                                errorText= {this.state.companyError}
                                onChange={this._handleInputChange.bind(this)}
                            />
                            <TextField
                                className="text-field"
                                floatingLabelText="Phone"
                                name="phone"
                                type="number"
                                fullWidth={true}
                                errorText= {this.state.phoneError}
                                onChange={this._handleInputChange.bind(this)}
                            />
                        <RaisedButton
                            className="btn"
                            secondary={true}
                            fullWidth={true}
                            onTouchTap={this._handleSaveAction.bind(this)}>
                            SAVE
                        </RaisedButton>
                </Card>
    }
}