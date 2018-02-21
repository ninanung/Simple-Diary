import constant from '../constant.js';

export default {
    [constant.LOGIN]: (store, payload) => {
        store.commit(constant.LOGIN, payload);
    },
    [constant.LOGOUT]: (store) => {
        store.commit(constant.LOGOUT);
    },
    [constant.LOGINPAGE]: (store) => {
        store.commit(constant.LOGINPAGE);
    },
    [constant.SIGNINPAGE]: (store) => {
        store.commit(constant.SIGNINPAGE);
    }
}