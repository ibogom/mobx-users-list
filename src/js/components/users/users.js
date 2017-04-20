/**
 * Created by ibogom on 4/12/17.
 */

import React from "react";
import {observer} from "mobx-react";
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import Person from 'material-ui/svg-icons/social/person';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import './users.scss';

@observer
export default class Users extends React.Component {
    _handleRemoveUser(e){
        e.preventDefault();
        this.props.store.removeUser(e.currentTarget.dataset.id);
    }
    render() {
        let usersCardListView = this.props.store.findUser.map((user, i) => {
            return <Card
                    className="users-card-wrapper"
                    key={i}>
                    <CardHeader
                        title={user.lastName}
                        subtitle={user.firstName}
                    />
                    <CardTitle
                        title={user.company}
                        subtitle={user.phone}
                    />
                    <RaisedButton
                        className="delete-icon-wrapper"
                        data-id={user.id}
                        secondary={true}
                        fullWidth={true}
                        onTouchTap={this._handleRemoveUser.bind(this)}>
                        DELETE
                    </RaisedButton>
                </Card>

        });
        let usersListView = this.props.store.findUser.map((user, i) => {
            return <List key={i}>
                <ListItem
                    leftAvatar={<Person />}
                    primaryText={user.lastName}
                    secondaryText={user.firstName}
                />
                <ListItem
                    leftIcon={<CommunicationCall/>}
                    primaryText={user.phone}
                    secondaryText={user.company}
                />
                <Divider inset={true}/>
            </List>
        });
        return (
            <div>
                { this.props.isCardView ? (
                    <Card className="users-cards-wrapper">
                        <CardTitle title="Added users"/>
                        {usersCardListView}
                    </Card>) :  usersListView }
            </div>
        )
    }
}