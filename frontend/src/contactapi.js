import axios from 'axios';
import constant from './constant.js';
import config from './config.js';

export default {
    login: function(id, password) {
        return axios.post(config.LOGIN, { id: id, password: password });
    },
    signin: function(id, password) {
        return axios.post(config.SIGNIN, { id: id, password: password });
    },
    confirm: function(id, code) {
        return axios.post(config.CONFIRM, { id: id, code: code });
    },
    changePhoto: function(id, file) {
        return axios.post(config.CHANGEPHOTO, { id: id, file: file });
    }
}