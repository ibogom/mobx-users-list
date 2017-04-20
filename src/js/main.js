
import React from "react";
/** CONTAINERS **/
import App from "./containers/app/app";

/** COMPONENTS **/
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Users from "./components/users/users";
import AddForm from "./components/addForm/add.form";
import Search from "./components/search/search";

/** STORES **/
import AppStore from "./stores/app.store";
import UsersStore from "./stores/users.store";

import ReactDOM from "react-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, lime500, grey50} from 'material-ui/styles/colors';
import GridList from 'material-ui/GridList';
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: lime500,
        primary3Color: grey50,
    },
});

const app = document.getElementById("app")

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App>
            <Menu store={AppStore}>
                <Users isCardView={false} store={UsersStore} />
            </Menu>
            <Header store={AppStore} />
            <Search store={UsersStore} />
            <GridList cols={2} rows={1}>
                <AddForm store={UsersStore} />
                <Users isCardView={true} store={UsersStore} />
            </GridList>
        </App>
    </MuiThemeProvider>, app)