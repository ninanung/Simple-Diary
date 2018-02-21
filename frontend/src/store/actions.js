import constant from '../constant.js';

export default {
    [constant.LOGIN]: (store, payload) => {
        store.commit(constant.LOGIN, payload);
    },
    [constant.LOGOUT]: (store) => {
        store.commit(constant.LOGOUT);
    },
    [constant.LOGINPAGE]: (store) => {
        store.commit(constant.LOGINPOPUP);
    },
    [constant.SIGNINPAGE]: (store) => {
        store.commit(constant.SIGNINPOPUP);
    },
    [constant.LOGINCANCEL]: (store) => {
        store.commit(constant.LOGINCANCEL);
    },
    [constant.SIGNCANCEL]: (store) => {
        store.commit(constant.SIGNCANCEL);
    }
}