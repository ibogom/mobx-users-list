/**
 * Created by ibogom on 4/12/17.
 */

import { computed, observable } from "mobx"

export class UsersStore {

    @observable users = [];
    @observable filter = "";

    @computed get findUser() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.users.filter(user => !this.filter ||
        matchesFilter.test(user.firstName) ||
        matchesFilter.test(user.lastName) ||
        matchesFilter.test(user.company) ||
        matchesFilter.test(user.phone));
    }

    /**
     * Remove user from users store
     * @param id | String
     */
    removeUser(id){
        const newUsersList = this.users.filter((user) =>{
            return user.id.toString() !== id;
        });

        this.users.replace(newUsersList);
    }

    /** Add new user to users store
     * @param data | Object |
     *  data.firstName | String | FirstName
     *  data.lastName | String | LastName
     *  data.company | String | Company name
     *  data.phone | Number | phone
     */
    addUser(data){
        this.users.push({
            firstName: data.firstName,
            lastName: data.lastName,
            company: data.company,
            phone: data.phone,
            id: new Date()
        })
    }
}

export default new UsersStore();