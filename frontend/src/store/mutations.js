import constant from '../constant.js';

export default {
    [constant.LOGIN]: (state, payload) => {
        state.islogin = true;
        state.user.id = payload.id;
        state.user.email = payload.email;
    },
    [constant.LOGOUT]: (state) => {
        state.islogin = false;
        state.user.id = "";
        state.user.email = "";
    },
    [constant.LOGINPOPUP]: (state) => {
        state.Login = true;
    },
    [constant.SIGNINPOPUP]: (state) => {
        state.Signin = true;
    },
    [constant.LOGINCANCEL]: (state) => {
        state.Login = false;
    },
    [constant.SIGNCANCEL]: (state) => {
        state.Signin = false;
    }
}