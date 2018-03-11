import constant from '../constant.js';

export default {
    [constant.LOGIN]: (state, payload) => {
        let user = {
            id: payload.id,
            email: payload.email,
            src: payload.src
        }
        window.sessionStorage.user = JSON.stringify(user);
        window.sessionStorage.islogin = "true";
    },
    [constant.LOGOUT]: (state) => {
        window.sessionStorage.clear();
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
    [constant.SIGNINCANCEL]: (state) => {
        state.Signin = false;
    },
    [constant.PHOTOPOPUP]: (state) => {
        state.Photo = true;
    },
    [constant.PHOTOCANCEL]: (state) => {
        state.Photo = false;
    }
}