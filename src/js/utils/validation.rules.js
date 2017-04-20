/**
 * Created by ibogom on 4/19/17.
 */

const defaultRule = {
        required: true,

        length: {
            min: 3,
            max: 34
        },

        regExp: '',

        defaultFn: function(data){
            if(!data){
                return false;
            } else if(data.length < this.length.min || data.length > this.length.max){
                this.message = 'Data length is wrong! Minimum length is ' +
                    '' + this.length.min + ' and maximum length is ' + this.length.max;
                return false;
            } else if(!(new RegExp(this.regExp).test(data))){
                this.message = 'Data format is wrong!';
                return false;
            } else if(this.fn && !this.fn(data)){
                return false;
            } else {
                return true;
            }
        },

        message: 'This field is required'
};

const userValidationRules = {

    firstName: Object.assign({}, defaultRule, {
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    lastName: Object.assign({}, defaultRule, {
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    company: Object.assign({}, defaultRule, {
        regExp: '^[A-Za-z0-9\\\/\s\-]+$'
    }),

    phone: Object.assign({}, defaultRule, {
        length: {
            min: 10,
            max: 15
        },
        regExp: '^\\+?[0-9]+$'
    })
};

export { userValidationRules };