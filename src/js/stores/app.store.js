/**
 * Created by ibogom on 4/10/17.
 */

import { computed, observable } from "mobx"

export class AppStore {
    @observable title = "Users list";
    @observable isMenuOpen = false;
}

export default new AppStore();