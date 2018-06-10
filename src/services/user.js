import axios from 'axios'
import env from '../config/enviroment'
const user = {};
const url = env.api_url;


user.register = function (user ) {
    return axios.post(url+'users/register', user);
};
user.login = function (user) {
    return axios.post(url+'users/login', user);
};
user.isLogin = function () {
    const user = this.get_localstrorage('user');
    if (user){
        return true;
    }else {return false;}

};
user.getUser = function (token) {
    let headers = { "x-access-token": token};
    return axios.get(url+'users/account?token=' + token);
};
user.save_local_storage = function (key, value) {
    try{
        this.set_localstrorage(key,value);
    }catch(e){
        throw e;
    };
};
user.getUserId = function () {
    if(this.get_localstrorage('user')){
        return JSON.parse(this.get_localstrorage('user')).user_id;
    }else {
        return '';
    }

};
user.set_localstrorage = function (key,value) {

    let str_value = value;
    if (typeof value ===  "object"){
        str_value = JSON.stringify(value);
    }
    return localStorage.setItem(key,str_value);
};
user.get_localstrorage = function (key) {
   return localStorage.getItem(key);
};
user.get_token = function () {
    return this.get_localstrorage('token');
};
export default user;